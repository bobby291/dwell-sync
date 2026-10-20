
export type ShopCategorySlug =
  | "beauty-care"
  | "food-provision"
  | "electricals-gadgets"
  | "fashion"
  | "home-household";

export interface ShopCategory {
  id: string;
  name: string;
  slug: ShopCategorySlug;
  description: string;
  image: string;
}

export interface ShopProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: ShopCategorySlug;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isFlashSale: boolean;
  isNewArrival: boolean;
  badge?: string;
  brand?: string;
}
