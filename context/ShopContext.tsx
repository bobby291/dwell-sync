
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { ShopProduct } from "@/types/shop";

interface CartItem {
  product: ShopProduct;
  quantity: number;
}

interface ShopContextValue {
  cartItems: CartItem[];
  favoriteIds: string[];
  cartCount: number;
  favoriteCount: number;
  addToCart: (product: ShopProduct) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleFavorite: (product: ShopProduct) => void;
  isFavorite: (productId: string) => boolean;
  clearCart: () => void;
}

const ShopContext = createContext<ShopContextValue | undefined>(undefined);

const CART_STORAGE_KEY = "dwellsync-cart";
const FAVORITES_STORAGE_KEY = "dwellsync-favorites";

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);

      if (savedCart) {
        const parsed: CartItem[] = JSON.parse(savedCart);

        if (Array.isArray(parsed)) {
          setCartItems(
            parsed.filter(
              (item) =>
                item &&
                item.product &&
                typeof item.product.id === "string" &&
                Number.isInteger(item.quantity) &&
                item.quantity > 0
            )
          );
        }
      }

      if (savedFavorites) {
        const parsed: string[] = JSON.parse(savedFavorites);

        if (Array.isArray(parsed)) {
          setFavoriteIds(
            parsed.filter((id): id is string => typeof id === "string")
          );
        }
      }
    } catch {
      // Ignore malformed saved data and keep the shop usable.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems, hydrated]);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(favoriteIds)
    );
  }, [favoriteIds, hydrated]);

  const addToCart = useCallback((product: ShopProduct) => {
    if (!product.inStock) return;

    setCartItems((current) => {
      const existing = current.find(
        (item) => item.product.id === product.id
      );

      if (existing) {
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCartItems((current) =>
      current.filter((item) => item.product.id !== productId)
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }

      setCartItems((current) =>
        current.map((item) =>
          item.product.id === productId
            ? { ...item, quantity }
            : item
        )
      );
    },
    [removeFromCart]
  );

  const toggleFavorite = useCallback((product: ShopProduct) => {
    setFavoriteIds((current) =>
      current.includes(product.id)
        ? current.filter((id) => id !== product.id)
        : [...current, product.id]
    );
  }, []);

  const isFavorite = useCallback(
    (productId: string) => favoriteIds.includes(productId),
    [favoriteIds]
  );

  const clearCart = useCallback(() => setCartItems([]), []);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const value = useMemo(
    () => ({
      cartItems,
      favoriteIds,
      cartCount,
      favoriteCount: favoriteIds.length,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleFavorite,
      isFavorite,
      clearCart,
    }),
    [
      cartItems,
      favoriteIds,
      cartCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleFavorite,
      isFavorite,
      clearCart,
    ]
  );

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }

  return context;
}
