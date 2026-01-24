import WindTurbine2 from "./wind-turbine-2-i2cMFNlb.png";
import SolarConstruction from "./solar-construction-DLKEjVnj.webp";
import { Link } from "react-router";

const HomepageBody1 = ({ energyValue, isLoading, isSignedIn, hasSolarUnit }) => {
    // Render the energy value section based on state
    const renderEnergyContent = () => {
        if (!isSignedIn) {
            return (
                <p className="mb-8 text-center text-base leading-relaxed text-gray-400 sm:mb-12 sm:text-lg lg:text-left">
                    Track your solar energy production and see how much clean energy you generate each month.{' '}
                    <Link to="/sign-in" className="text-cyan-400 hover:text-cyan-300 underline">
                        Sign in
                    </Link>
                    {' '}to view your personalized energy dashboard.
                </p>
            );
        }

        if (isLoading) {
            return (
                <p className="mb-8 text-center text-base leading-relaxed text-gray-400 sm:mb-12 sm:text-lg lg:text-left">
                    Loading your energy production data...
                </p>
            );
        }

        if (!hasSolarUnit) {
            return (
                <p className="mb-8 text-center text-base leading-relaxed text-gray-400 sm:mb-12 sm:text-lg lg:text-left">
                    You don't have a solar unit linked to your account yet. Contact your administrator to get started with solar energy monitoring.
                </p>
            );
        }

        if (energyValue !== null && energyValue !== undefined) {
            return (
                <p className="mb-8 text-center text-base leading-relaxed text-gray-400 sm:mb-12 sm:text-lg lg:text-left">
                    Your solar panels have generated a total of{' '}
                    <span className="font-bold text-cyan-400 text-2xl">{energyValue.toFixed(1)}kWh</span>
                    {' '}of clean energy, helping you save on electricity bills and reduce your carbon footprint. Track your energy production trends and see how much power you contribute back to the grid.
                </p>
            );
        }

        return (
            <p className="mb-8 text-center text-base leading-relaxed text-gray-400 sm:mb-12 sm:text-lg lg:text-left">
                No energy data available for this month yet. Check back soon to see your solar production statistics.
            </p>
        );
    };

    return (
        <div className="flex min-h-screen flex-col lg:flex-row px-6 md:px-12 py-12">
            {/* Left side - Image */}
            <div className="flex-1 p-2 sm:p-4">
                <div className="h-64 overflow-hidden rounded-3xl sm:h-80 lg:h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-2xl rounded-3xl"></div>
                    <img
                        alt="Solar panel installation on a house roof"
                        width="800"
                        height="600"
                        className="h-full w-full object-cover rounded-3xl relative border border-purple-500/30"
                        src={WindTurbine2}
                    />
                </div>
            </div>

            {/* Right side - Content */}
            <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-12 px-12 py-6">
                <div className="mx-auto max-w-lg lg:mx-0">
                    <h2 className="mb-6 text-center text-3xl leading-tight font-bold text-white sm:mb-8 sm:text-3xl lg:text-left lg:text-5xl">
                        Your Solar Energy Generation
                    </h2>

                    {renderEnergyContent()}

                    <div className="mx-auto h-40 w-56 overflow-hidden rounded-2xl sm:h-48 sm:w-64 lg:mx-0 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl rounded-2xl"></div>
                        <img
                            alt="Wind turbine maintenance workers in safety gear"
                            width="256"
                            height="192"
                            className="h-full w-full object-cover rounded-2xl relative border border-cyan-500/30"
                            src={SolarConstruction}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomepageBody1;