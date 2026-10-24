
import ShopUtilityBar from "@/components/shop/ShopUtilityBar";

export default function ShopPage() {
  return (
    <main>
      <ShopUtilityBar
        cartCount={0}
        favoriteCount={0}
      />

      {/* Product catalogue, promotions, and categories
          should be rendered here. */}

    </main>
  );
}
