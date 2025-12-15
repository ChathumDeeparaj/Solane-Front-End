import HeroSection from "@/pages/home/components/HeroSection/HeroSection";
// import SolarEnergyProduction from "@/pages/home/components/SolarEnergyProduction";
import HomepageBody1 from "@/pages/home/components/HomepageBody/HomepageBody1";
import HomepageBody2 from "@/pages/home/components/HomepageBody/HomepageBody2";
import HomepageBody3 from "@/pages/home/components/HomepageBody/HomepageBody3";

const HomePage = () => {
  return (
           <main className="space-y-6 px-2 sm:px-6 lg:px-12">
             <HeroSection />
             {/* <SolarEnergyProduction /> */}
             <HomepageBody1 />
             <br />
             <HomepageBody2 />
             <HomepageBody3 />
           </main>
  );
};

export default HomePage;
