const EnargyProductionCard = (props) => {
    
    return (
        <div className="relative border border-gray-500 rounded-lg ">
            <div className="flex flex-col items-center gap-2 p-6 pb-2">
                <span className="block text-gray-600 text-sm font-medium">{props.day}</span>
                <span className="block text-xs text-gray-500">{props.date}</span>
            </div>
            <div className="p-6 pt-2 flex flex-col items-center">
                <span className="block mb-1 text-3xl font-bold text-blue-600">{props.production}</span>
                <span className="block text-sm font-medium text-gray-500">KWh</span>
            </div>
        </div>
    );
};
export default EnargyProductionCard;