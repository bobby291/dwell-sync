
import ShopUtilityBar from "@/components/shop/ShopUtilityBar";
import ProductSection from "@/components/shop/ProductSection";
import ShopCategories from "@/components/shop/ShopCategories";
import {
  flashSaleProducts,
  newArrivalProducts,
} from "@/data/shopData";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FC]">
      {/* Dark utility bar beneath the existing Navbar */}
      <ShopUtilityBar
        cartCount={0}
        favoriteCount={0}
      />

        
      <div className="mx-auto max-w-[1600px] space-y-10 px-4 py-6 sm:px-6 lg:px-8">
        {/* Temporary introduction */}
        <section>
          <p className="text-sm font-medium text-blue-600">
            DWELLSYNC MARKETPLACE
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
            Shop everything you love
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">
            Discover great deals, new arrivals, everyday essentials
            and products from businesses you can trust.
          </p>
        </section>

        {/* Flash Sales */}
            <ProductSection
            id="flash-sales"
            title="Flash Sales"
            description="Hot deals and limited-time savings."
            products={flashSaleProducts}
            href="/shop/deals"
            icon="zap"
            iconColor="#EF4444"
            />

        {/* New Arrivals */}
            <ProductSection
            id="new-arrivals"
            title="New Arrivals"
            description="Discover the latest products added to DwellSync."
            products={newArrivalProducts}
            href="/shop/new-arrivals"
            icon="sparkles"
            iconColor="#2979FF"
            />
      </div>

        <ShopCategories />

    </main>
  );
}
