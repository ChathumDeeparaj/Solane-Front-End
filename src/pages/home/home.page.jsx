import HeroSection from "@/pages/home/components/HeroSection/HeroSection";
// import SolarEnergyProduction from "@/pages/home/components/SolarEnergyProduction";
import HomepageBody1 from "@/pages/home/components/HomepageBody/HomepageBody1";
import HomepageBody2 from "@/pages/home/components/HomepageBody/HomepageBody2";
import HomepageBody3 from "@/pages/home/components/HomepageBody/HomepageBody3";
import HomepageBody4 from "@/pages/home/components/HomepageBody/HomepageBody4";
import Footer from "@/components/Footer/footer";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      <HeroSection />
      <main>
        {/* <SolarEnergyProduction /> */}
        <HomepageBody1 />
        <HomepageBody2 />
        <HomepageBody3 />
        <HomepageBody4 />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
