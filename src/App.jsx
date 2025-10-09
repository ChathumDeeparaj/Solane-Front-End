import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
// import { Button } from "./components/ui/button";
import SolarEnergyProduction from "./components/SolarEnergyProduction/SolarEnergyProduction";


function App() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <SolarEnergyProduction />
      </main>
    </>
  );
}

export default App;