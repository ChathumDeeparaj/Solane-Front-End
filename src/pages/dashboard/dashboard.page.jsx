import { useGetSolarUnitForUserQuery } from "@/lib/redux/query";
import DataChart from "./components/DataChart";
import { useUser } from "@clerk/clerk-react";
import WeatherConditionsCard from "./components/WeatherConditionsCard";
import RealTimePowerCard from "./components/RealTimePowerCard";
import { Zap } from 'lucide-react';

import CapacityFactorChart from "./components/CapacityFactorChart";

const DashboardPage = () => {
  const { user, isLoaded } = useUser();

  const { data: solarUnit, isLoading: isLoadingSolarUnit, isError: isErrorSolarUnit, error: errorSolarUnit } = useGetSolarUnitForUserQuery();

  if (isLoadingSolarUnit) {
    return <div className="text-white">Loading...</div>;
  }

  if (isErrorSolarUnit) {
    return <div className="text-white">Error: {errorSolarUnit.message}</div>;
  }

  console.log(solarUnit);

  // Get coordinates from solar unit or use default (San Francisco)
  const latitude = solarUnit?.location?.coordinates?.[1] || 6.9355;
  const longitude = solarUnit?.location?.coordinates?.[0] || 79.8531;

  return (
    <main className="mt-4">
      <h1 className="text-4xl text-white font-bold">{user?.firstName}'s House</h1>
      <p className="text-gray-600 mt-2">
        Welcome back to your Solar Energy Production Dashboard
      </p>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
        <WeatherConditionsCard
          latitude={latitude}
          longitude={longitude}
        />
        <RealTimePowerCard
          solarUnitId={solarUnit._id}
        />
        <DataChart solarUnitId={solarUnit._id} />
        <CapacityFactorChart solarUnitId={solarUnit._id} />
      </div>
    </main>
  );
};

export default DashboardPage;
