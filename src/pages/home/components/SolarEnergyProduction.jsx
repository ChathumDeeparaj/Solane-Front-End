import { Button } from "@/components/ui/button";
import { getEnergyGenerationRecordsBySolarUnit } from "@/lib/api/energy-generation-record";
import { useSelector } from "react-redux";
import EnergyProductionCards from "./EnergyProductionCards";
import Tab from "./Tab";
import { useEffect } from "react";
import { useState } from "react";
import { useGetEnergyGenerationRecordsBySolarUnitQuery } from "@/lib/redux/query";


const SolarEnergyProduction = () => {
    const energyProductionData = [
        { day: "Mon", date: "Aug 18", production: 34.1 , hasAnomaly:false},
        { day: "Tue", date: "Aug 19", production: 32.1 , hasAnomaly:false},
        { day: "Wed", date: "Aug 20", production: 36.9 , hasAnomaly:true},
        { day: "Thu", date: "Aug 21", production: 30.9 , hasAnomaly:false},
        { day: "Fri", date: "Aug 22", production: 34.1 , hasAnomaly:false},
        { day: "Sat", date: "Aug 23", production: 20.1 , hasAnomaly:false},
        { day: "Sun", date: "Aug 24", production: 35.1 , hasAnomaly:false},
    ];

const tabs = [
    { label: "All", value: "all" },
    { label: "Anomaly", value: "anomaly" },
    ];
    
const selectedTab = useSelector((state) => state.ui.selectedHomeTab);

    
const filteredEnergyProductionData = energyProductionData.filter((el) => {
    if (selectedTab === "all") {
        return true;
    } else if (selectedTab === "anomaly") {
        return el.hasAnomaly;
    }
});
    
const { data, isLoading, isError, error } =
    useGetEnergyGenerationRecordsBySolarUnitQuery("6935d47ec45eb384a42ad64d");
    
      console.log(data, isLoading);

  return (
    <section className="px-12 py-6 font-[Inter] py-6 ">
        <div>
            <h2 className="mb-2 text-2xl font-bold 	font-weigh-500 text-gray-900">Solar Energy Production</h2>
            <p className="text-gray-600">Daily enargy output for the past 7 days</p>
        </div>
        <div className="mt-4 flex gap-x-4 flex items-center">
           {tabs.map((tab) => {
          return <Tab key={tab.value} tab={tab} />;
        })}
        </div>

        <br></br>
        < EnergyProductionCards energyProductionData={filteredEnergyProductionData} />
    </section>

  )
};
  export default SolarEnergyProduction;
