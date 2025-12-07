import HeroSection from "@/components/HeroSection/HeroSection";
import SolarEnergyProduction from "@/components/SolarEnergyProduction/SolarEnergyProduction";
import Navigation from "@/components/Navigation/Navigation";
import HomepageBody1 from "@/components/HomepageBody/HomepageBody1";
import HomepageBody2 from "@/components/HomepageBody/HomepageBody2";
import HomepageBody3 from "@/components/HomepageBody/HomepageBody3";

const HomePage = () => {
  return (
    <>
           <Navigation />
           <main className="space-y-6 px-2 sm:px-6 lg:px-12">
             <HeroSection />
             <SolarEnergyProduction />
             <HomepageBody1 />
             <br />
             <HomepageBody2 />
             <HomepageBody3 />
           </main>
         </>
  );
};

export default HomePage;