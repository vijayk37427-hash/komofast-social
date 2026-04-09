import Map "mo:core/Map";
import List "mo:core/List";
import Array "mo:core/Array";
import Set "mo:core/Set";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Blob "mo:core/Blob";
import Nat "mo:core/Nat";
import Float "mo:core/Float";
import Int "mo:core/Int";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinObjectStorage "mo:caffeineai-object-storage/Mixin";
import Storage "mo:caffeineai-object-storage/Storage";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import AccessControl "mo:caffeineai-authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinObjectStorage();

  // Types
  module Notification {
    public func compareByCreatedAt(a : Notification, b : Notification) : Order.Order {
      Int.compare(b.createdAt, a.createdAt);
    };
  };

  public type UserProfile = {
    id : Text;
    username : Text;
    displayName : Text;
    bio : Text;
    avatarBlobId : ?Text;
    isCreator : Bool;
    isActive : Bool;
    createdAt : Time.Time;
  };

  type Post = {
    id : Text;
    authorId : Text;
    textContent : Text;
    imageBlobId : ?Storage.ExternalBlob;
    postType : { #post; #reel };
    createdAt : Time.Time;
    likesCount : Nat;
    commentsCount : Nat;
    shareCount : Nat;
    approvalStatus : { #pending; #approved; #rejected };
    trendingScore : Float;
  };

  type Comment = {
    id : Text;
    postId : Text;
    authorId : Text;
    text : Text;
    createdAt : Time.Time;
  };

  type Notification = {
    id : Text;
    recipientId : Text;
    notificationType : {
      #like;
      #comment;
      #follow;
      #subscribe;
    };
    actorId : Text;
    postId : ?Text;
    createdAt : Time.Time;
    isRead : Bool;
  };

  type Product = {
    id : Text;
    sellerId : Text;
    title : Text;
    description : Text;
    price : Float;
    imageBlobId : ?Storage.ExternalBlob;
    category : Text;
    stock : Nat;
    createdAt : Time.Time;
  };

  type CartItem = {
    productId : Text;
    quantity : Nat;
  };

  type Order = {
    id : Text;
    userId : Text;
    items : [CartItem];
    deliveryAddress : Text;
    totalAmount : Float;
    createdAt : Time.Time;
    status : { #pending; #completed; #cancelled };
  };

  type Story = {
    id : Text;
    authorId : Text;
    imageBlobId : Storage.ExternalBlob;
    text : ?Text;
    expiresAt : Time.Time;
    createdAt : Time.Time;
  };

  // User compare
  module User {
    public func compare(a : UserProfile, b : UserProfile) : Order.Order {
      Text.compare(a.username, b.username);
    };
  };

  // Post compare
  module Post {
    public func compare(a : Post, b : Post) : Order.Order {
      Int.compare(b.createdAt, a.createdAt);
    };
  };

  // Story compare
  module Story {
    public func compare(a : Story, b : Story) : Order.Order {
      Int.compare(b.createdAt, a.createdAt);
    };
  };

  let users = Map.empty<Text, UserProfile>();
  let principalToUserId = Map.empty<Principal, Text>();
  let userImages = Map.empty<Text, Storage.ExternalBlob>();
  let posts = Map.empty<Text, Post>();
  let postImages = Map.empty<Text, Storage.ExternalBlob>();
  let postLikes = Map.empty<Text, Set.Set<Text>>();
  let comments = Map.empty<Text, Comment>();
  let notifications = Map.empty<Text, Notification>();
  let products = Map.empty<Text, Product>();
  let productImages = Map.empty<Text, Storage.ExternalBlob>();
  let carts = Map.empty<Text, [CartItem]>();
  let orders = Map.empty<Text, Order>();
  let stories = Map.empty<Text, Story>();
  let storyImages = Map.empty<Text, Storage.ExternalBlob>();
  let followers = Map.empty<Text, Set.Set<Text>>();
  let followings = Map.empty<Text, Set.Set<Text>>();
  let creatorEarnings = Map.empty<Text, Float>();
  let creatorSubscriptions = Map.empty<Text, Set.Set<Text>>();
  let storyViews = Map.empty<Text, Set.Set<Text>>();
  var totalCommissions : Float = 0.0;

  // Helper function to get userId from Principal
  func getUserIdFromPrincipal(caller : Principal) : ?Text {
    principalToUserId.get(caller);
  };

  // Required profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    switch (getUserIdFromPrincipal(caller)) {
      case (?userId) { users.get(userId) };
      case (null) { null };
    };
  };

  public query ({ caller }) func getUserProfile(userId : Text) : async ?UserProfile {
    // Anyone can view user profiles (public data)
    users.get(userId);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    switch (getUserIdFromPrincipal(caller)) {
      case (?userId) {
        if (userId != profile.id) {
          Runtime.trap("Unauthorized: Can only update your own profile");
        };
        users.add(userId, profile);
      };
      case (null) {
        Runtime.trap("User profile not found for caller");
      };
    };
  };

  // User functions
  public shared ({ caller }) func createUserProfile(username : Text, displayName : Text, bio : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create profiles");
    };

    // Check if caller already has a profile
    switch (getUserIdFromPrincipal(caller)) {
      case (?_) { Runtime.trap("User already has a profile") };
      case (null) {};
    };

    let userId = username;

    if (users.containsKey(userId)) {
      Runtime.trap("Username already taken");
    };

    let profile : UserProfile = {
      id = userId;
      username;
      displayName;
      bio;
      avatarBlobId = null;
      isCreator = false;
      isActive = true;
      createdAt = Time.now();
    };

    users.add(userId, profile);
    principalToUserId.add(caller, userId);
    creatorEarnings.add(userId, 0.0);
    followers.add(userId, Set.empty<Text>());
    followings.add(userId, Set.empty<Text>());
  };

  public shared ({ caller }) func updateUserProfile(displayName : Text, bio : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update profiles");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    switch (users.get(userId)) {
      case (null) { Runtime.trap("User not found") };
      case (?profile) {
        let updatedProfile : UserProfile = {
          id = profile.id;
          username = profile.username;
          displayName;
          bio;
          avatarBlobId = profile.avatarBlobId;
          isCreator = profile.isCreator;
          isActive = profile.isActive;
          createdAt = profile.createdAt;
        };
        users.add(userId, updatedProfile);
      };
    };
  };

  public shared ({ caller }) func toggleCreatorStatus() : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can toggle creator status");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    switch (users.get(userId)) {
      case (null) { Runtime.trap("User not found") };
      case (?profile) {
        let updatedProfile : UserProfile = {
          id = profile.id;
          username = profile.username;
          displayName = profile.displayName;
          bio = profile.bio;
          avatarBlobId = profile.avatarBlobId;
          isCreator = not profile.isCreator;
          isActive = profile.isActive;
          createdAt = profile.createdAt;
        };
        users.add(userId, updatedProfile);
      };
    };
  };

  public shared ({ caller }) func followUser(followeeId : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can follow others");
    };

    let followerId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    if (not users.containsKey(followeeId)) {
      Runtime.trap("User to follow does not exist");
    };

    if (followerId == followeeId) {
      Runtime.trap("Cannot follow yourself");
    };

    // Add to follower's following list
    let followingSet = switch (followings.get(followerId)) {
      case (?set) { set };
      case (null) { Set.empty<Text>() };
    };
    followingSet.add(followeeId);
    followings.add(followerId, followingSet);

    // Add to followee's followers list
    let followerSet = switch (followers.get(followeeId)) {
      case (?set) { set };
      case (null) { Set.empty<Text>() };
    };
    followerSet.add(followerId);
    followers.add(followeeId, followerSet);
  };

  public shared ({ caller }) func unfollowUser(followeeId : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can unfollow others");
    };

    let followerId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    // Remove from follower's following list
    switch (followings.get(followerId)) {
      case (?followingSet) {
        followingSet.remove(followeeId);
        followings.add(followerId, followingSet);
      };
      case (null) {};
    };

    // Remove from followee's followers list
    switch (followers.get(followeeId)) {
      case (?followerSet) {
        followerSet.remove(followerId);
        followers.add(followeeId, followerSet);
      };
      case (null) {};
    };
  };

  public query ({ caller }) func getFollowers(userId : Text) : async [Text] {
    // Anyone can view followers (public data)
    switch (followers.get(userId)) {
      case (?set) { set.toArray() };
      case (null) { [] };
    };
  };

  public query ({ caller }) func getFollowings(userId : Text) : async [Text] {
    // Anyone can view followings (public data)
    switch (followings.get(userId)) {
      case (?set) { set.toArray() };
      case (null) { [] };
    };
  };

  public query ({ caller }) func getFollowerCount(userId : Text) : async Nat {
    switch (followers.get(userId)) {
      case (?set) { set.size() };
      case (null) { 0 };
    };
  };

  public query ({ caller }) func getFollowingCount(userId : Text) : async Nat {
    switch (followings.get(userId)) {
      case (?set) { set.size() };
      case (null) { 0 };
    };
  };

  public query ({ caller }) func getFriendSuggestions() : async [UserProfile] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can get friend suggestions");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { return [] };
    };

    let followingSet = switch (followings.get(userId)) {
      case (?set) { set };
      case (null) { Set.empty<Text>() };
    };

    users.values().filter(func(u : UserProfile) : Bool {
      u.id != userId and not followingSet.contains(u.id)
    }).toArray().sort();
  };

  public query ({ caller }) func getCreatorEarnings() : async Float {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view their earnings");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    switch (creatorEarnings.get(userId)) {
      case (?earnings) { earnings };
      case (null) { 0.0 };
    };
  };

  public query ({ caller }) func getAllUsers() : async [UserProfile] {
    // Anyone can view user list (public data)
    users.values().toArray().sort();
  };

  // Post functions
  public shared ({ caller }) func createPost(textContent : Text, postType : { #post; #reel }) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create posts");
    };

    let authorId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    if (not users.containsKey(authorId)) {
      Runtime.trap("Author not found");
    };

    let postId = authorId.concat(Time.now().toText());

    let post : Post = {
      id = postId;
      authorId;
      textContent;
      imageBlobId = null;
      postType;
      createdAt = Time.now();
      likesCount = 0;
      commentsCount = 0;
      shareCount = 0;
      approvalStatus = #pending;
      trendingScore = 0.0;
    };

    posts.add(postId, post);
    postLikes.add(postId, Set.empty<Text>());
  };

  public shared ({ caller }) func likePost(postId : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can like posts");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    switch (posts.get(postId)) {
      case (null) { Runtime.trap("Post not found") };
      case (?post) {
        let likesSet = switch (postLikes.get(postId)) {
          case (?set) { set };
          case (null) { Set.empty<Text>() };
        };

        if (likesSet.contains(userId)) {
          Runtime.trap("Already liked this post");
        };

        likesSet.add(userId);
        postLikes.add(postId, likesSet);

        let updatedPost : Post = {
          id = post.id;
          authorId = post.authorId;
          textContent = post.textContent;
          imageBlobId = post.imageBlobId;
          postType = post.postType;
          createdAt = post.createdAt;
          likesCount = post.likesCount + 1;
          commentsCount = post.commentsCount;
          shareCount = post.shareCount;
          approvalStatus = post.approvalStatus;
          trendingScore = post.trendingScore + 1.0;
        };
        posts.add(postId, updatedPost);
      };
    };
  };

  public shared ({ caller }) func unlikePost(postId : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can unlike posts");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    switch (posts.get(postId)) {
      case (null) { Runtime.trap("Post not found") };
      case (?post) {
        let likesSet = switch (postLikes.get(postId)) {
          case (?set) { set };
          case (null) { Runtime.trap("Post has no likes") };
        };

        if (not likesSet.contains(userId)) {
          Runtime.trap("Haven't liked this post");
        };

        likesSet.remove(userId);
        postLikes.add(postId, likesSet);

        let updatedPost : Post = {
          id = post.id;
          authorId = post.authorId;
          textContent = post.textContent;
          imageBlobId = post.imageBlobId;
          postType = post.postType;
          createdAt = post.createdAt;
          likesCount = if (post.likesCount > 0) { post.likesCount - 1 } else { 0 };
          commentsCount = post.commentsCount;
          shareCount = post.shareCount;
          approvalStatus = post.approvalStatus;
          trendingScore = if (post.trendingScore > 1.0) { post.trendingScore - 1.0 } else { 0.0 };
        };
        posts.add(postId, updatedPost);
      };
    };
  };

  public shared ({ caller }) func addComment(postId : Text, commentText : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can comment");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    if (not users.containsKey(userId) or not posts.containsKey(postId)) {
      Runtime.trap("User or post does not exist");
    };

    let commentId = userId.concat(Time.now().toText());

    let comment : Comment = {
      id = commentId;
      postId;
      authorId = userId;
      text = commentText;
      createdAt = Time.now();
    };

    comments.add(commentId, comment);

    // Update post comment count
    switch (posts.get(postId)) {
      case (?post) {
        let updatedPost : Post = {
          id = post.id;
          authorId = post.authorId;
          textContent = post.textContent;
          imageBlobId = post.imageBlobId;
          postType = post.postType;
          createdAt = post.createdAt;
          likesCount = post.likesCount;
          commentsCount = post.commentsCount + 1;
          shareCount = post.shareCount;
          approvalStatus = post.approvalStatus;
          trendingScore = post.trendingScore + 0.5;
        };
        posts.add(postId, updatedPost);
      };
      case (null) {};
    };
  };

  public query ({ caller }) func getAllPosts() : async [Post] {
    // Anyone can view approved posts
    posts.values().filter(func(p : Post) : Bool {
      p.approvalStatus == #approved
    }).toArray().sort();
  };

  public query ({ caller }) func getUserPosts(userId : Text) : async [Post] {
    // Anyone can view user's approved posts
    posts.values().filter(func(p : Post) : Bool {
      p.authorId == userId and p.approvalStatus == #approved
    }).toArray().sort();
  };

  public query ({ caller }) func getPostComments(postId : Text) : async [Comment] {
    // Anyone can view comments
    comments.values().filter(func(c : Comment) : Bool {
      c.postId == postId
    }).toArray();
  };

  // Story functions
  public shared ({ caller }) func createStory(blob : Storage.ExternalBlob, text : ?Text, expiresAt : Time.Time) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create stories");
    };

    let authorId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    if (not users.containsKey(authorId)) {
      Runtime.trap("Author not found");
    };

    let storyId = authorId.concat(Time.now().toText());

    let story : Story = {
      id = storyId;
      authorId;
      imageBlobId = blob;
      text;
      expiresAt;
      createdAt = Time.now();
    };

    stories.add(storyId, story);
    storyViews.add(storyId, Set.empty<Text>());
  };

  public query ({ caller }) func getActiveStories() : async [Story] {
    // Anyone can view active stories
    let now = Time.now();
    stories.values().filter(func(s : Story) : Bool {
      s.expiresAt > now
    }).toArray().sort();
  };

  public shared ({ caller }) func markStoryViewed(storyId : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view stories");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    if (not users.containsKey(userId) or not stories.containsKey(storyId)) {
      Runtime.trap("User or story does not exist");
    };

    let viewsSet = switch (storyViews.get(storyId)) {
      case (?set) { set };
      case (null) { Set.empty<Text>() };
    };
    viewsSet.add(userId);
    storyViews.add(storyId, viewsSet);
  };

  // Notification functions
  public shared ({ caller }) func createNotification(recipientId : Text, notificationType : { #like; #comment; #follow; #subscribe }, postId : ?Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create notifications");
    };

    let actorId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    let notificationId = recipientId.concat(Time.now().toText());

    let notification : Notification = {
      id = notificationId;
      recipientId;
      notificationType;
      actorId;
      postId;
      createdAt = Time.now();
      isRead = false;
    };

    notifications.add(notificationId, notification);
  };

  public query ({ caller }) func getUserNotifications() : async [Notification] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view their notifications");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { return [] };
    };

    notifications.values().filter(func(n : Notification) : Bool {
      n.recipientId == userId
    }).toArray().sort(Notification.compareByCreatedAt);
  };

  public shared ({ caller }) func markNotificationRead(notificationId : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can mark notifications as read");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    switch (notifications.get(notificationId)) {
      case (null) { Runtime.trap("Notification not found") };
      case (?notification) {
        if (notification.recipientId != userId) {
          Runtime.trap("Unauthorized: Can only mark your own notifications as read");
        };

        let updatedNotification : Notification = {
          id = notification.id;
          recipientId = notification.recipientId;
          notificationType = notification.notificationType;
          actorId = notification.actorId;
          postId = notification.postId;
          createdAt = notification.createdAt;
          isRead = true;
        };
        notifications.add(notificationId, updatedNotification);
      };
    };
  };

  public query ({ caller }) func getUnreadNotificationCount() : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view their notification count");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { return 0 };
    };

    var count = 0;
    for (notification in notifications.values()) {
      if (notification.recipientId == userId and not notification.isRead) {
        count += 1;
      };
    };
    count;
  };

  // Creator Subscription functions
  public shared ({ caller }) func subscribeToCreator(creatorId : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can subscribe to creators");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    switch (users.get(creatorId)) {
      case (null) { Runtime.trap("Creator not found") };
      case (?creator) {
        if (not creator.isCreator) {
          Runtime.trap("User is not a creator");
        };
      };
    };

    let subscribersSet = switch (creatorSubscriptions.get(creatorId)) {
      case (?set) { set };
      case (null) { Set.empty<Text>() };
    };
    subscribersSet.add(userId);
    creatorSubscriptions.add(creatorId, subscribersSet);
  };

  public shared ({ caller }) func unsubscribeFromCreator(creatorId : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can unsubscribe from creators");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    switch (creatorSubscriptions.get(creatorId)) {
      case (?subscribersSet) {
        subscribersSet.remove(userId);
        creatorSubscriptions.add(creatorId, subscribersSet);
      };
      case (null) {};
    };
  };

  public query ({ caller }) func isSubscribedToCreator(creatorId : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can check subscription status");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { return false };
    };

    switch (creatorSubscriptions.get(creatorId)) {
      case (?subscribersSet) { subscribersSet.contains(userId) };
      case (null) { false };
    };
  };

  public query ({ caller }) func getSubscriberCount(creatorId : Text) : async Nat {
    // Anyone can view subscriber count
    switch (creatorSubscriptions.get(creatorId)) {
      case (?set) { set.size() };
      case (null) { 0 };
    };
  };

  // Marketplace functions
  public shared ({ caller }) func createProduct(title : Text, description : Text, price : Float, category : Text, stock : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create products");
    };

    let sellerId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    if (not users.containsKey(sellerId)) {
      Runtime.trap("Seller not found");
    };

    let productId = sellerId.concat(Time.now().toText());

    let product : Product = {
      id = productId;
      sellerId;
      title;
      description;
      price;
      imageBlobId = null;
      category;
      stock;
      createdAt = Time.now();
    };

    products.add(productId, product);
  };

  public shared ({ caller }) func updateProduct(productId : Text, title : Text, description : Text, price : Float, category : Text, stock : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update products");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    switch (products.get(productId)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) {
        if (product.sellerId != userId) {
          Runtime.trap("Unauthorized: Can only update your own products");
        };

        let updatedProduct : Product = {
          id = product.id;
          sellerId = product.sellerId;
          title;
          description;
          price;
          imageBlobId = product.imageBlobId;
          category;
          stock;
          createdAt = product.createdAt;
        };
        products.add(productId, updatedProduct);
      };
    };
  };

  public shared ({ caller }) func deleteProduct(productId : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can delete products");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    switch (products.get(productId)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) {
        if (product.sellerId != userId) {
          Runtime.trap("Unauthorized: Can only delete your own products");
        };
        products.remove(productId);
      };
    };
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    // Anyone can view products
    products.values().toArray();
  };

  public query ({ caller }) func getProductsByCategory(category : Text) : async [Product] {
    // Anyone can view products by category
    products.values().filter(func(p : Product) : Bool {
      p.category == category
    }).toArray();
  };

  public shared ({ caller }) func addToCart(productId : Text, quantity : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can add to cart");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    if (not users.containsKey(userId) or not products.containsKey(productId)) {
      Runtime.trap("User or product does not exist");
    };

    let cart = switch (carts.get(userId)) {
      case (?items) { items };
      case (null) { [] };
    };
    carts.add(userId, cart.concat([{ productId; quantity }]));
  };

  public query ({ caller }) func getCart() : async [CartItem] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view their cart");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { return [] };
    };

    switch (carts.get(userId)) {
      case (?items) { items };
      case (null) { [] };
    };
  };

  public shared ({ caller }) func createOrder(deliveryAddress : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create orders");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { Runtime.trap("User profile not found") };
    };

    switch (carts.get(userId)) {
      case (null) { Runtime.trap("Cart not found") };
      case (?items) {
        if (items.size() == 0) {
          Runtime.trap("Cart is empty");
        };

        let orderId = userId.concat(Time.now().toText());
        var totalAmount : Float = 0.0;

        for (item in items.vals()) {
          switch (products.get(item.productId)) {
            case (?product) {
              totalAmount += product.price * item.quantity.toFloat();
            };
            case (null) {};
          };
        };

        let commission = totalAmount * 0.1;
        totalCommissions += commission;

        let order : Order = {
          id = orderId;
          userId;
          items;
          deliveryAddress;
          totalAmount;
          createdAt = Time.now();
          status = #pending;
        };

        orders.add(orderId, order);
        carts.remove(userId);
      };
    };
  };

  public query ({ caller }) func getMyOrders() : async [Order] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view their orders");
    };

    let userId = switch (getUserIdFromPrincipal(caller)) {
      case (?id) { id };
      case (null) { return [] };
    };

    orders.values().filter(func(o : Order) : Bool {
      o.userId == userId
    }).toArray();
  };

  // Admin functions
  public query ({ caller }) func getPlatformStats() : async { userCount : Nat; postCount : Nat; orderCount : Nat } {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view platform stats");
    };

    {
      userCount = users.size();
      postCount = posts.size();
      orderCount = orders.size();
    };
  };

  public query ({ caller }) func getPendingPosts() : async [Post] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view pending posts");
    };

    posts.values().filter(func(p : Post) : Bool {
      p.approvalStatus == #pending
    }).toArray().sort();
  };

  public shared ({ caller }) func approvePost(postId : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can approve posts");
    };

    switch (posts.get(postId)) {
      case (null) { Runtime.trap("Post not found") };
      case (?post) {
        let updatedPost : Post = {
          id = post.id;
          authorId = post.authorId;
          textContent = post.textContent;
          imageBlobId = post.imageBlobId;
          postType = post.postType;
          createdAt = post.createdAt;
          likesCount = post.likesCount;
          commentsCount = post.commentsCount;
          shareCount = post.shareCount;
          approvalStatus = #approved;
          trendingScore = post.trendingScore;
        };
        posts.add(postId, updatedPost);
      };
    };
  };

  public shared ({ caller }) func rejectPost(postId : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can reject posts");
    };

    switch (posts.get(postId)) {
      case (null) { Runtime.trap("Post not found") };
      case (?post) {
        let updatedPost : Post = {
          id = post.id;
          authorId = post.authorId;
          textContent = post.textContent;
          imageBlobId = post.imageBlobId;
          postType = post.postType;
          createdAt = post.createdAt;
          likesCount = post.likesCount;
          commentsCount = post.commentsCount;
          shareCount = post.shareCount;
          approvalStatus = #rejected;
          trendingScore = post.trendingScore;
        };
        posts.add(postId, updatedPost);
      };
    };
  };

  public query ({ caller }) func listAllUsers() : async [UserProfile] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can list all users");
    };

    users.values().toArray().sort();
  };

  public shared ({ caller }) func toggleUserActiveStatus(userId : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can toggle user status");
    };

    switch (users.get(userId)) {
      case (null) { Runtime.trap("User not found") };
      case (?user) {
        let updatedUser : UserProfile = {
          id = user.id;
          username = user.username;
          displayName = user.displayName;
          bio = user.bio;
          avatarBlobId = user.avatarBlobId;
          isCreator = user.isCreator;
          isActive = not user.isActive;
          createdAt = user.createdAt;
        };
        users.add(userId, updatedUser);
      };
    };
  };

  public query ({ caller }) func getTotalCommissions() : async Float {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view total commissions");
    };

    totalCommissions;
  };

  public query ({ caller }) func getAllOrders() : async [Order] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all orders");
    };

    orders.values().toArray();
  };
};
