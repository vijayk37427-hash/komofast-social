import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export type Time = bigint;
export interface Comment {
    id: string;
    authorId: string;
    createdAt: Time;
    text: string;
    postId: string;
}
export interface Story {
    id: string;
    expiresAt: Time;
    authorId: string;
    createdAt: Time;
    text?: string;
    imageBlobId: ExternalBlob;
}
export interface Order {
    id: string;
    status: Variant_cancelled_pending_completed;
    deliveryAddress: string;
    userId: string;
    createdAt: Time;
    totalAmount: number;
    items: Array<CartItem>;
}
export interface Post {
    id: string;
    postType: Variant_post_reel;
    authorId: string;
    createdAt: Time;
    trendingScore: number;
    approvalStatus: Variant_pending_approved_rejected;
    shareCount: bigint;
    commentsCount: bigint;
    likesCount: bigint;
    imageBlobId?: ExternalBlob;
    textContent: string;
}
export interface Notification {
    id: string;
    notificationType: Variant_subscribe_like_comment_follow;
    createdAt: Time;
    isRead: boolean;
    actorId: string;
    recipientId: string;
    postId?: string;
}
export interface CartItem {
    productId: string;
    quantity: bigint;
}
export interface Product {
    id: string;
    title: string;
    createdAt: Time;
    description: string;
    stock: bigint;
    category: string;
    sellerId: string;
    price: number;
    imageBlobId?: ExternalBlob;
}
export interface UserProfile {
    id: string;
    bio: string;
    isCreator: boolean;
    username: string;
    displayName: string;
    createdAt: Time;
    isActive: boolean;
    avatarBlobId?: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export enum Variant_cancelled_pending_completed {
    cancelled = "cancelled",
    pending = "pending",
    completed = "completed"
}
export enum Variant_pending_approved_rejected {
    pending = "pending",
    approved = "approved",
    rejected = "rejected"
}
export enum Variant_post_reel {
    post = "post",
    reel = "reel"
}
export enum Variant_subscribe_like_comment_follow {
    subscribe = "subscribe",
    like = "like",
    comment = "comment",
    follow = "follow"
}
export interface backendInterface {
    addComment(postId: string, commentText: string): Promise<void>;
    addToCart(productId: string, quantity: bigint): Promise<void>;
    approvePost(postId: string): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createNotification(recipientId: string, notificationType: Variant_subscribe_like_comment_follow, postId: string | null): Promise<void>;
    createOrder(deliveryAddress: string): Promise<void>;
    createPost(textContent: string, postType: Variant_post_reel): Promise<void>;
    createProduct(title: string, description: string, price: number, category: string, stock: bigint): Promise<void>;
    createStory(blob: ExternalBlob, text: string | null, expiresAt: Time): Promise<void>;
    createUserProfile(username: string, displayName: string, bio: string): Promise<void>;
    deleteProduct(productId: string): Promise<void>;
    followUser(followeeId: string): Promise<void>;
    getActiveStories(): Promise<Array<Story>>;
    getAllOrders(): Promise<Array<Order>>;
    getAllPosts(): Promise<Array<Post>>;
    getAllProducts(): Promise<Array<Product>>;
    getAllUsers(): Promise<Array<UserProfile>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCart(): Promise<Array<CartItem>>;
    getCreatorEarnings(): Promise<number>;
    getFollowerCount(userId: string): Promise<bigint>;
    getFollowers(userId: string): Promise<Array<string>>;
    getFollowingCount(userId: string): Promise<bigint>;
    getFollowings(userId: string): Promise<Array<string>>;
    getFriendSuggestions(): Promise<Array<UserProfile>>;
    getMyOrders(): Promise<Array<Order>>;
    getPendingPosts(): Promise<Array<Post>>;
    getPlatformStats(): Promise<{
        postCount: bigint;
        orderCount: bigint;
        userCount: bigint;
    }>;
    getPostComments(postId: string): Promise<Array<Comment>>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
    getSubscriberCount(creatorId: string): Promise<bigint>;
    getTotalCommissions(): Promise<number>;
    getUnreadNotificationCount(): Promise<bigint>;
    getUserNotifications(): Promise<Array<Notification>>;
    getUserPosts(userId: string): Promise<Array<Post>>;
    getUserProfile(userId: string): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    isSubscribedToCreator(creatorId: string): Promise<boolean>;
    likePost(postId: string): Promise<void>;
    listAllUsers(): Promise<Array<UserProfile>>;
    markNotificationRead(notificationId: string): Promise<void>;
    markStoryViewed(storyId: string): Promise<void>;
    rejectPost(postId: string): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    subscribeToCreator(creatorId: string): Promise<void>;
    toggleCreatorStatus(): Promise<void>;
    toggleUserActiveStatus(userId: string): Promise<void>;
    unfollowUser(followeeId: string): Promise<void>;
    unlikePost(postId: string): Promise<void>;
    unsubscribeFromCreator(creatorId: string): Promise<void>;
    updateProduct(productId: string, title: string, description: string, price: number, category: string, stock: bigint): Promise<void>;
    updateUserProfile(displayName: string, bio: string): Promise<void>;
}
