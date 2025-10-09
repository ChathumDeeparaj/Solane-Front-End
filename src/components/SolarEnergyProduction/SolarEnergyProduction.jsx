import EnargyProductionCard from "@/EnargyProductionCard";

const SolarEnergyProduction = () => {
  return (
    <section className="px-12 py-6 font-['Inter'] py-6 ">
        <div classsname="mb-6">
            <h2 className="mb-2.text-2xl.font-bold.text-gray-900">Solar Energy Production</h2>
            <p className="text-gray-600">Daily enargy output for the past 7 days</p>
        </div>
        <br></br>
        <div className="grid grid-cols-7 gap-4">
            <EnargyProductionCard day="mon" date="Aug 18" production={34.1} />
            <EnargyProductionCard day="tue" date="Aug 19" production={32.1}/>
            <EnargyProductionCard day="wed" date="Aug 20" production={36.9}/>
            <EnargyProductionCard day="thu" date="Aug 21" production={30.9}/>
            <EnargyProductionCard day="fri" date="Aug 22" production={34.1}/>
            <EnargyProductionCard day="sat" date="Aug 23" production={20.1}/>
            <EnargyProductionCard day="sun" date="Aug 24" production={35.1}/>
        </div>
    </section>

  )
};
  export default SolarEnergyProduction;