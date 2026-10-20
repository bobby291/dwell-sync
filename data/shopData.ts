
import type { ShopCategory, ShopProduct } from "@/types/shop";

export const shopCategories: ShopCategory[] = [
  {
    id: "beauty-care",
    name: "Beauty & Care",
    slug: "beauty-care",
    description: "Skincare, cosmetics, haircare and personal care.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",
  },
  {
    id: "food-provision",
    name: "Cooked Food & Provision",
    slug: "food-provision",
    description: "Freshly prepared meals and everyday essentials.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
  },
  {
    id: "electricals-gadgets",
    name: "Electricals & Gadgets",
    slug: "electricals-gadgets",
    description: "Phones, computers, accessories and electronics.",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600",
  },
  {
    id: "fashion",
    name: "Fashion",
    slug: "fashion",
    description: "Clothing, shoes, bags, watches and accessories.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600",
  },
  {
    id: "home-household",
    name: "Home & Household",
    slug: "home-household",
    description: "Kitchenware, furniture and household essentials.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
  },
];

export const shopProducts: ShopProduct[] = [
  {
    id: "product-001",
    name: "Wireless Earbuds Pro",
    slug: "wireless-earbuds-pro",
    description: "Wireless earbuds with a compact charging case.",
    category: "electricals-gadgets",
    price: 29500,
    originalPrice: 55000,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600",
    rating: 4.7,
    reviewCount: 120,
    inStock: true,
    isFlashSale: true,
    isNewArrival: false,
    badge: "45% OFF",
  },
  {
    id: "product-002",
    name: "Digital Air Fryer",
    slug: "digital-air-fryer",
    description: "A convenient air fryer for everyday cooking.",
    category: "home-household",
    price: 68000,
    originalPrice: 95000,
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600",
    rating: 4.6,
    reviewCount: 85,
    inStock: true,
    isFlashSale: true,
    isNewArrival: false,
    badge: "28% OFF",
  },
  {
    id: "product-003",
    name: "Smartphone",
    slug: "smartphone",
    description: "A modern smartphone for work and entertainment.",
    category: "electricals-gadgets",
    price: 935000,
    originalPrice: 1250000,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    rating: 4.9,
    reviewCount: 240,
    inStock: true,
    isFlashSale: true,
    isNewArrival: false,
    badge: "25% OFF",
  },
  {
    id: "product-004",
    name: "Casual Sneakers",
    slug: "casual-sneakers",
    description: "Versatile sneakers for everyday wear.",
    category: "fashion",
    price: 45000,
    originalPrice: 65000,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    rating: 4.8,
    reviewCount: 110,
    inStock: true,
    isFlashSale: true,
    isNewArrival: true,
    badge: "31% OFF",
  },
  {
    id: "product-005",
    name: "Blender and Grinder",
    slug: "blender-and-grinder",
    description: "A multipurpose blender for everyday kitchen use.",
    category: "home-household",
    price: 46750,
    originalPrice: 65000,
    image:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600",
    rating: 4.5,
    reviewCount: 90,
    inStock: true,
    isFlashSale: true,
    isNewArrival: false,
    badge: "28% OFF",
  },
  {
    id: "product-006",
    name: "Smart Wristwatch",
    slug: "smart-wristwatch",
    description: "A stylish smartwatch for everyday activity tracking.",
    category: "fashion",
    price: 120000,
    originalPrice: 150000,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    rating: 4.7,
    reviewCount: 98,
    inStock: true,
    isFlashSale: true,
    isNewArrival: true,
    badge: "20% OFF",
  },
  {
    id: "product-007",
    name: "Skincare Essentials Set",
    slug: "skincare-essentials-set",
    description: "A skincare set for your daily personal care routine.",
    category: "beauty-care",
    price: 28000,
    originalPrice: 35000,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600",
    rating: 4.6,
    reviewCount: 72,
    inStock: true,
    isFlashSale: false,
    isNewArrival: true,
    badge: "NEW",
  },
  {
    id: "product-008",
    name: "Freshly Prepared Meal",
    slug: "freshly-prepared-meal",
    description: "A sample prepared-meal listing from a local food vendor.",
    category: "food-provision",
    price: 6500,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
    rating: 4.8,
    reviewCount: 54,
    inStock: true,
    isFlashSale: false,
    isNewArrival: true,
    badge: "NEW",
  },
  {
    id: "product-009",
    name: "Women's Handbag",
    slug: "womens-handbag",
    description: "A versatile handbag for daily use and outings.",
    category: "fashion",
    price: 38000,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    rating: 4.8,
    reviewCount: 64,
    inStock: true,
    isFlashSale: false,
    isNewArrival: true,
    badge: "NEW",
  },
  {
    id: "product-010",
    name: "Cookware Set",
    slug: "cookware-set",
    description: "A cookware set for preparing everyday meals.",
    category: "home-household",
    price: 72000,
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600",
    rating: 4.7,
    reviewCount: 41,
    inStock: true,
    isFlashSale: false,
    isNewArrival: true,
    badge: "NEW",
  },
  {
    id: "product-011",
    name: "Portable Power Bank",
    slug: "portable-power-bank",
    description: "Portable charging for compatible mobile devices.",
    category: "electricals-gadgets",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600",
    rating: 4.7,
    reviewCount: 62,
    inStock: true,
    isFlashSale: false,
    isNewArrival: true,
    badge: "NEW",
  },
  {
    id: "product-012",
    name: "Men's Casual Shirt",
    slug: "mens-casual-shirt",
    description: "A versatile casual shirt for everyday outfits.",
    category: "fashion",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
    rating: 4.5,
    reviewCount: 39,
    inStock: true,
    isFlashSale: false,
    isNewArrival: true,
    badge: "NEW",
  },
];

export const flashSaleProducts = shopProducts.filter(
  (product) => product.isFlashSale,
);

export const newArrivalProducts = shopProducts.filter(
  (product) => product.isNewArrival,
);

export function getProductsByCategory(slug: string): ShopProduct[] {
  return shopProducts.filter((product) => product.category === slug);
}

export function getProductById(id: string): ShopProduct | undefined {
  return shopProducts.find((product) => product.id === id);
}
