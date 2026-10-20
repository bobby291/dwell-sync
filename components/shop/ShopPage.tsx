
import ShopUtilityBar from "@/components/shop/ShopUtilityBar";

export default function ShopPage() {
  return (
    <main>
      <ShopUtilityBar
        cartCount={0}
        favoriteCount={0}
      />

      {/* Promotions, categories and product sections come next */}
    </main>
  );
}
