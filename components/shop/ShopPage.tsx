
import ShopUtilityBar from "@/components/shop/ShopUtilityBar";
import ProductPurchaseActions from "@/components/shop/ProductPurchaseActions";

export default function ShopPage() {
  return (
    <main>
      <ShopUtilityBar
        cartCount={0}
        favoriteCount={0}
      />

      <ProductPurchaseActions product={product} />

      {/* Promotions, categories and product sections come next */}
    </main>
  );
}
