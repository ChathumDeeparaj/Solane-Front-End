import EnergyProductionCard from "./EnergyProductionCard";

const EnergyProductionCards = (props) => {

    if(props.energyProductionData.length === 0){
        return (
            <div className="text-center text-gray-500">
                No Anomaly Data Available
            </div>
        );
    }

    return (
        <div className="grid grid-cols-7 gap-4">
        {props.energyProductionData.map((el) => {
            return(
                <EnergyProductionCard
                key={el.date} 
                day={el.day} 
                date={el.date} 
                production={el.production}
                hasAnomaly={el.hasAnomaly}
                />
                
            );
        })} 
    </div>
    );
};

export default EnergyProductionCards;