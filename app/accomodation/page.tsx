import Hero from "./components/Hero"
import Badges from "./components/Badges"
import Popular from "./components/Popular"
import Featured from "./components/Featured"
import Rated from "./components/Rated"
import WhyChose from "./components/WhyChose"


export default function accomodation() {
  return (
    <>
      <Hero />
      <Badges />
      <Featured />
      <Popular />
      <Rated />
      <WhyChose />

    </>
  )
}