import EnargyProductionCard from "@/EnargyProductionCard";

const SolarEnergyProduction = () => {
    const enargyProductiondata = [
        { day: "Mon", date: "Aug 18", production: 34.1 , hasAnomaly:false},
        { day: "Tue", date: "Aug 19", production: 32.1 , hasAnomaly:true},
        { day: "Wed", date: "Aug 20", production: 36.9 , hasAnomaly:false},
        { day: "Thu", date: "Aug 21", production: 30.9 , hasAnomaly:false},
        { day: "Fri", date: "Aug 22", production: 34.1 , hasAnomaly:false},
        { day: "Sat", date: "Aug 23", production: 20.1 , hasAnomaly:true},
        { day: "Sun", date: "Aug 24", production: 35.1 , hasAnomaly:false},
    ];
  return (
    <section className="px-12 py-6 font-[Inter] py-6 ">
        <div classsname="mb-6">
            <h2 className="mb-2 text-2xl font-bold 	font-weigh-500 text-gray-900">Solar Energy Production</h2>
            <p className="text-gray-600">Daily enargy output for the past 7 days</p>
        </div>
        <br></br>
        <div className="grid grid-cols-7 gap-4">
            {enargyProductiondata.map((el) => {
                return(
                    <EnargyProductionCard 
                    key={el.date} 
                    day={el.day} 
                    date={el.date} 
                    production={el.production}
                    hasAnomaly={el.hasAnomaly}
                    />
                    
                );
            })} 
        </div>
    </section>

  )
};
  export default SolarEnergyProduction;