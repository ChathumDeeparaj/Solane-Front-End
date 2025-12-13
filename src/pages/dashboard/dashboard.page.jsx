import { useGetSolarUnitForUserQuery } from "@/lib/redux/query";
import DataChart from "./components/DataChart";
import { useUser } from "@clerk/clerk-react";
import WeatherConditionsCard from "./components/WeatherConditionsCard";
import RealTimePowerCard from "./components/RealTimePowerCard";
import { Zap } from 'lucide-react';


const DashboardPage = () => {
  const { user, isLoaded } = useUser();

  const { data: solarUnit, isLoading: isLoadingSolarUnit, isError: isErrorSolarUnit, error: errorSolarUnit } = useGetSolarUnitForUserQuery();

  if (isLoadingSolarUnit) {
    return <div>Loading...</div>;
  }

  if (isErrorSolarUnit) {
    return <div>Error: {errorSolarUnit.message}</div>;
  }

  console.log(solarUnit);

  return (
    <main className="mt-4">
      <h1 className="text-4xl font-bold text-foreground">{user?.firstName}'s House</h1>
      <p className="text-gray-600 mt-2">
        Welcome back to your Solar Energy Production Dashboard
      </p>
      <div className="w-full p-2">
      <div className="grid grid-cols-1 justify-between  lg:grid-cols-2 gap-4 max-w-6xl">
        <WeatherConditionsCard 
          temperature={12}
          windSpeed={8.5}
        />
        
        <RealTimePowerCard 
          currentPower={332}
          percentage={36.9}
          avgWindSpeed={7.8}
          avgPower={280.4}
          peakPower={332.1}
          totalEnergy={4.0}
        />
      </div>
    </div>
      <div className="mt-8">
        <DataChart solarUnitId={solarUnit._id} />
      </div>
    </main>
  );
};

export default DashboardPage;