import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { UserProfile } from "../context/AppContext";

// Local type stubs for types not in backend.d
export type Post = {
  id: string;
  text: string;
  type: string;
  [key: string]: unknown;
};
export type Product = {
  id: string;
  title: string;
  price: number;
  [key: string]: unknown;
};
export type CartItem = {
  productId: string;
  quantity: bigint;
  [key: string]: unknown;
};
export type Order = { id: string; address: string; [key: string]: unknown };
export type Notification = {
  id: string;
  message: string;
  [key: string]: unknown;
};

// Runtime const AND type for post/reel variant (dual declaration pattern)
export const Variant_post_reel = {
  post: "post" as const,
  reel: "reel" as const,
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Variant_post_reel = "post" | "reel";

// Typed actor interface (backend.d.ts is empty so we define methods locally)
type ActorMethods = {
  getAllPosts: () => Promise<Post[]>;
  getUserPosts: (userId: string) => Promise<Post[]>;
  getAllUsers: () => Promise<UserProfile[]>;
  getFriendSuggestions: () => Promise<UserProfile[]>;
  getUserNotifications: () => Promise<Notification[]>;
  getAllProducts: () => Promise<Product[]>;
  getCart: () => Promise<CartItem[]>;
  getMyOrders: () => Promise<Order[]>;
  getPlatformStats: () => Promise<{
    postCount: bigint;
    orderCount: bigint;
    userCount: bigint;
  }>;
  getPendingPosts: () => Promise<Post[]>;
  getAllOrders: () => Promise<Order[]>;
  likePost: (postId: string) => Promise<void>;
  unlikePost: (postId: string) => Promise<void>;
  addComment: (postId: string, text: string) => Promise<void>;
  createPost: (text: string, type: Variant_post_reel) => Promise<void>;
  followUser: (userId: string) => Promise<void>;
  addToCart: (productId: string, quantity: bigint) => Promise<void>;
  createOrder: (address: string) => Promise<void>;
  approvePost: (postId: string) => Promise<void>;
  rejectPost: (postId: string) => Promise<void>;
  toggleUserActiveStatus: (userId: string) => Promise<void>;
  createProduct: (
    title: string,
    desc: string,
    price: number,
    cat: string,
    stock: bigint,
  ) => Promise<void>;
  deleteProduct: (productId: string) => Promise<void>;
  getUserProfile: (userId: string) => Promise<UserProfile | null>;
  getCallerUserProfile: () => Promise<UserProfile | null>;
  isCallerAdmin: () => Promise<boolean>;
  getCallerUserRole: () => Promise<string>;
  getUnreadNotificationCount: () => Promise<bigint>;
};

function useTypedActor() {
  const { actor, isFetching } = useActor(createActor);
  return { actor: actor as unknown as ActorMethods | null, isFetching };
}

export function useAllPosts() {
  const { actor, isFetching } = useTypedActor();
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUserPosts(userId: string | undefined) {
  const { actor, isFetching } = useTypedActor();
  return useQuery<Post[]>({
    queryKey: ["userPosts", userId],
    queryFn: async () => {
      if (!actor || !userId) return [];
      return actor.getUserPosts(userId);
    },
    enabled: !!actor && !isFetching && !!userId,
  });
}

export function useAllUsers() {
  const { actor, isFetching } = useTypedActor();
  return useQuery<UserProfile[]>({
    queryKey: ["users"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllUsers();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFriendSuggestions() {
  const { actor, isFetching } = useTypedActor();
  return useQuery<UserProfile[]>({
    queryKey: ["suggestions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getFriendSuggestions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useNotifications() {
  const { actor, isFetching } = useTypedActor();
  return useQuery<Notification[]>({
    queryKey: ["notifications"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getUserNotifications();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllProducts() {
  const { actor, isFetching } = useTypedActor();
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCart() {
  const { actor, isFetching } = useTypedActor();
  return useQuery<CartItem[]>({
    queryKey: ["cart"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCart();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMyOrders() {
  const { actor, isFetching } = useTypedActor();
  return useQuery<Order[]>({
    queryKey: ["orders"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyOrders();
    },
    enabled: !!actor && !isFetching,
  });
}

export function usePlatformStats() {
  const { actor, isFetching } = useTypedActor();
  return useQuery<{ postCount: bigint; orderCount: bigint; userCount: bigint }>(
    {
      queryKey: ["platformStats"],
      queryFn: async () => {
        if (!actor) return { postCount: 0n, orderCount: 0n, userCount: 0n };
        return actor.getPlatformStats();
      },
      enabled: !!actor && !isFetching,
    },
  );
}

export function usePendingPosts() {
  const { actor, isFetching } = useTypedActor();
  return useQuery<Post[]>({
    queryKey: ["pendingPosts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPendingPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllOrders() {
  const { actor, isFetching } = useTypedActor();
  return useQuery<Order[]>({
    queryKey: ["allOrders"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllOrders();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useLikePost() {
  const { actor } = useTypedActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (postId: string) => {
      if (!actor) return;
      await actor.likePost(postId);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["posts"] }),
  });
}

export function useUnlikePost() {
  const { actor } = useTypedActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (postId: string) => {
      if (!actor) return;
      await actor.unlikePost(postId);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["posts"] }),
  });
}

export function useAddComment() {
  const { actor } = useTypedActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ postId, text }: { postId: string; text: string }) => {
      if (!actor) return;
      await actor.addComment(postId, text);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["posts"] }),
  });
}

export function useCreatePost() {
  const { actor } = useTypedActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      text,
      type,
    }: { text: string; type: Variant_post_reel }) => {
      if (!actor) return;
      await actor.createPost(text, type);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["posts"] }),
  });
}

export function useFollowUser() {
  const { actor } = useTypedActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (userId: string) => {
      if (!actor) return;
      await actor.followUser(userId);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["suggestions"] }),
  });
}

export function useAddToCart() {
  const { actor } = useTypedActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      productId,
      quantity,
    }: { productId: string; quantity: bigint }) => {
      if (!actor) return;
      await actor.addToCart(productId, quantity);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });
}

export function useCreateOrder() {
  const { actor } = useTypedActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (address: string) => {
      if (!actor) return;
      await actor.createOrder(address);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["cart"] });
      qc.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}

export function useApprovePost() {
  const { actor } = useTypedActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (postId: string) => {
      if (!actor) return;
      await actor.approvePost(postId);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["pendingPosts"] }),
  });
}

export function useRejectPost() {
  const { actor } = useTypedActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (postId: string) => {
      if (!actor) return;
      await actor.rejectPost(postId);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["pendingPosts"] }),
  });
}

export function useToggleUserActive() {
  const { actor } = useTypedActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (userId: string) => {
      if (!actor) return;
      await actor.toggleUserActiveStatus(userId);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["users"] }),
  });
}

export function useCreateProduct() {
  const { actor } = useTypedActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (p: {
      title: string;
      description: string;
      price: number;
      category: string;
      stock: bigint;
    }) => {
      if (!actor) return;
      await actor.createProduct(
        p.title,
        p.description,
        p.price,
        p.category,
        p.stock,
      );
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
}

export function useDeleteProduct() {
  const { actor } = useTypedActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (productId: string) => {
      if (!actor) return;
      await actor.deleteProduct(productId);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
}

export function useGetUserProfile(userId: string | undefined) {
  const { actor, isFetching } = useTypedActor();
  return useQuery<UserProfile | null>({
    queryKey: ["userProfile", userId],
    queryFn: async () => {
      if (!actor || !userId) return null;
      return actor.getUserProfile(userId);
    },
    enabled: !!actor && !isFetching && !!userId,
  });
}
