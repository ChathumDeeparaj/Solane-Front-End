
// import { createLucideIcon } from "lucide-react";
import WindTurbine3 from "./wind-turbine-3-BGYqnrhL.png";

const HomepageBody2 = () => {
    return (
        <div>
            <div className="flex min-h-screen flex-col bg-white lg:flex-row">
                <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-12">
                    <div className="mb-6 flex items-center gap-3  rounded-400 sm:mb-8">
                        <div className="mx-auto max-w-lg lg:mx-0">
                            <div className="mb-6 flex items-center  gap-3 sm:mb-8">
                                <div className="flex items-center gap-2 rounded-lg bg-red-500 px-3 py-2 text-white font-semibold sm:px-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-triangle-alert-icon lucide-triangle-alert">
                                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                                        <path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                                </div>
                                <span className="text-sm font-medium sm:text-base">Problems</span>
                            </div>
                        </div>
                    </div>
                    <p className="mb-8 text-2xl leading-tight font-bold text-brand-dark sm:mb-12 sm:text-3xl lg:text-4xl">
                        Home solar systems can face reduced efficiency and
                        missed savings due to panel shading, dirt, unexpected
                        drops in output, or inverter issues. Stay ahead with instant
                        anomaly alerts.
                    </p>
                    <div className="space-y-4 sm:space-y-4">
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-shrink-0 text-red-500 sm:h-5 sm:w-5" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
                            <span className="text-base text-gray-700 sm:text-lg">Panel shading or dirt</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-shrink-0 text-red-500 sm:h-5 sm:w-5" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
                            <span className="text-base text-gray-700 sm:text-lg">Unexpected drop in output</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-shrink-0 text-red-500 sm:h-5 sm:w-5" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
                            <span className="text-base text-gray-700 sm:text-lg">Inverter errors</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-shrink-0 text-red-500 sm:h-5 sm:w-5" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
                            <span className="text-base text-gray-700 sm:text-lg">Missed maintenance reminders</span>
                        </div>
                    </div>

                </div>
                {/* Left side - Image */}
                <div className="flex-1 p-2 sm:p-4">
                    <div className="h-20 overflow-hidden rounded-3xl sm:h-50 lg:h-190 ">
                        <img
                            alt="Solar panel installation on a house roof"
                            width="800"
                            height="600"
                            className="h-full w-full object-cover"
                            src={WindTurbine3}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomepageBody2;
