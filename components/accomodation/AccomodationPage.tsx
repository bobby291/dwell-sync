import PopularAbuja from "./PopularAbuja";
import TopHotelsNigeria from "./HotelsNig";
import LagosHomes from "./HomesListing";
import WhyChosePage from "./WhyChose";

export default function AccomodationPage() {
    return (
        <main className="min-h-screen bg-[#0B0B16]">
            <PopularAbuja />
            <TopHotelsNigeria />
            <LagosHomes />
            <WhyChosePage />

        </main>
    )
}