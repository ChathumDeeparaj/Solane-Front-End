import { ChevronRight, User } from "lucide-react";
import SolarInstallation from "./solar-construction-DLKEjVnj.webp"; // Using existing image as placeholder, or I should use one from the other files if relevant. "solar-construction" seems fitting for the right side image.


import ProfilePic from "./wind-turbine-2-i2cMFNlb.png"; // Just as a placeholder for the avatar
import { useUser } from "@clerk/clerk-react";

const HomepageBody4 = () => {
    const { user, isSignedIn } = useUser();

    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">

                    {/* Left Column: Content */}
                    <div className="flex-1 space-y-12 pt-8">

                        {/* Goals Section */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-brand-dark">Goals:</h2>
                            <ul className="space-y-4">
                                {[
                                    "Maximize solar energy savings.",
                                    "Detect and resolve issues early.",
                                    "Track daily, weekly, and monthly output.",
                                    "Get notified of anomalies instantly."
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-brand-dark flex-shrink-0 mt-1" />
                                        <span className="text-lg text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Needs Section */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-brand-dark">Needs:</h2>
                            <ul className="space-y-4">
                                {[
                                    "A simple dashboard for real-time monitoring.",
                                    "Instant alerts for system anomalies.",
                                    "Easy access to historical performance data.",
                                    "Clear, actionable insights for better energy management."
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-brand-dark flex-shrink-0 mt-1" />
                                        <span className="text-lg text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Profile Card */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 max-w-md mt-12 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                                <img
                                    src={isSignedIn ? user.imageUrl : ProfilePic}
                                    alt={isSignedIn ? user.fullName : "User Profile"}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-baseline gap-2">
                                    <span className="font-bold text-gray-900">
                                        {isSignedIn ? user.fullName || user.firstName : "Alex P."}
                                    </span>
                                    {!isSignedIn && <span className="text-sm text-gray-500">42 y.o.</span>}
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="text-gray-500">Homeowner</span>
                                    <span className="font-bold text-brand-dark">Solar User</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Image */}
                    <div className="flex-1 w-full relative">
                        <div className="rounded-3xl overflow-hidden h-[600px] w-full relative">
                            <img
                                src={SolarInstallation}
                                alt="Solar Panel Installation"
                                className="w-full h-full object-cover"
                            />

                            {/* User Profile Badge */}
                            <div className="absolute top-6 left-6">
                                <div className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-medium shadow-lg backdrop-blur-sm bg-opacity-90">
                                    <User className="w-5 h-5" />
                                    <span>{isSignedIn ? "Your Profile" : "User Profile"}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomepageBody4;
