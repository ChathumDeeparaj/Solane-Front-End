import HeroSection from "@/pages/home/components/HeroSection/HeroSection";
// import SolarEnergyProduction from "@/pages/home/components/SolarEnergyProduction";
import HomepageBody1 from "@/pages/home/components/HomepageBody/HomepageBody1";
import HomepageBody2 from "@/pages/home/components/HomepageBody/HomepageBody2";
import HomepageBody3 from "@/pages/home/components/HomepageBody/HomepageBody3";
import HomepageBody4 from "@/pages/home/components/HomepageBody/HomepageBody4";
import Footer from "@/components/Footer/footer";
import { useUser } from "@clerk/clerk-react";
import { useGetSolarUnitForUserQuery, useGetSolarStatsQuery } from "@/lib/redux/query";

const HomePage = () => {
  const { isSignedIn, isLoaded } = useUser();

  // Only fetch solar unit if user is signed in
  const {
    data: solarUnits,
    isLoading: isLoadingSolarUnit
  } = useGetSolarUnitForUserQuery(undefined, {
    skip: !isSignedIn
  });

  // Get first solar unit from array (handling the new array response)
  const solarUnit = Array.isArray(solarUnits) ? solarUnits[0] : solarUnits;

  // Only fetch stats if we have a solar unit
  const {
    data: stats,
    isLoading: isLoadingStats
  } = useGetSolarStatsQuery(solarUnit?._id, {
    skip: !solarUnit?._id
  });

  // Calculate energy value from stats (convert from Wh to kWh)
  // Note: totalEnergy is all-time energy, displayed as total production
  const energyValue = stats?.totalEnergy
    ? stats.totalEnergy / 1000  // Convert Wh to kWh
    : null;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      <HeroSection />
      <main>
        {/* <SolarEnergyProduction /> */}
        <HomepageBody1
          energyValue={energyValue}
          isLoading={!isLoaded || isLoadingSolarUnit || isLoadingStats}
          isSignedIn={isSignedIn}
          hasSolarUnit={!!solarUnit}
        />
        <HomepageBody2 />
        <HomepageBody3 />
        <HomepageBody4 />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
