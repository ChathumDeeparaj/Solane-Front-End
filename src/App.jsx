import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import HomepageBody1 from "./components/HomepageBody/HomepageBody1"; // Changed to uppercase H
// import { Button } from "./components/ui/button";
import SolarEnergyProduction from "./components/SolarEnergyProduction/SolarEnergyProduction";


function App() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <SolarEnergyProduction />
        <HomepageBody1 />
      </main>
    </>
  );
}

export default App;