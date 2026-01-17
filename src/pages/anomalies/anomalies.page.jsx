import { useGetSolarUnitForUserQuery } from "@/lib/redux/query";
import DataCard from "./components/DataCard";
import AnomalyList from "./components/AnomalyList";
import { useUser } from "@clerk/clerk-react";
import EnergyProductionCard from "./components/EnergyProductionCard";
import EnergyProductionCards from "./components/EnergyProductionCards";

const AnomaliesPage = () => {
  const { user, isLoaded } = useUser();

  const { data: solarUnit, isLoading: isLoadingSolarUnit, isError: isErrorSolarUnit, error: errorSolarUnit } = useGetSolarUnitForUserQuery();

  if (isLoadingSolarUnit) {
    return <div className="text-white">Loading...</div>;
  }

  if (isErrorSolarUnit) {
    return <div className="text-red-400">Error: {errorSolarUnit.message}</div>;
  }

  console.log(solarUnit);

  return (
    <main className="mt-4">
      <h1 className="text-4xl font-bold text-white">{user?.firstName}'s House</h1>
      <p className="text-gray-400 mt-2">
        Monitor anomalies in your solar unit
      </p>
      <div className="mt-8 space-y-8">
        <DataCard solarUnitId={solarUnit._id} />
        <AnomalyList solarUnitId={solarUnit._id} />
      </div>
    </main>
  );
};

export default AnomaliesPage;