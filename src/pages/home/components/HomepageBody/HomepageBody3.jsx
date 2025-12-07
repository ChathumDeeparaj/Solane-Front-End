const HomepageBody3 = () => {
    return(
        <div className="flex min-h-screen flex-col bg-white lg:flex-row">
            {/* Left side - Image */}
            <div className="relative m-2 min-h-[400px] flex-1 lg:min-h-auto">
                <div className="relative h-full overflow-hidden rounded-3xl">
                    <img 
                        alt="Solar panel installation on a house roof" 
                        width="800" 
                        height="600" 
                        className="h-full w-full object-cover" 
                        src="/src/assets/wind-turbine-2-i2cMFNlb.png"
                    />
                    <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8">
                        <div className="flex flex-col items-center rounded-2xl bg-blue-500 p-4 text-white sm:p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle mb-2 h-6 w-6 fill-current sm:h-8 sm:w-8" aria-hidden="true">
                                <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                            </svg>
                            <span className="text-lg font-bold sm:text-xl">Aelora</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Right side content */}
            <div className="m-2 flex flex-1 flex-col justify-center rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 p-8 text-white sm:p-12 lg:p-16">
                <div className="max-w-none lg:max-w-2xl">
                    {/* Solution badge */}
                    <div className="mb-6 inline-flex">
                        <div className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-4 py-2 text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap" aria-hidden="true">
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
                            </svg>
                            <span className="text-base font-semibold">Solution</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="mb-12 text-4xl leading-tight font-bold sm:text-5xl lg:text-5xl">
                        The Solar Home Dashboard empowers you to monitor your solar panels, receive instant alerts for anomalies, and optimize your energy usage for maximum savings and peace of mind.
                    </h2>

                    {/* Features list */}
                    <div className="space-y-4">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-5 w-5 flex-shrink-0 text-lime-400" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                            <span className="text-lg text-white">Real-time energy tracking</span>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-5 w-5 flex-shrink-0 text-lime-400" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                            <span className="text-lg text-white">Anomaly alerts</span>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-5 w-5 flex-shrink-0 text-lime-400" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                            <span className="text-lg text-white">Historical performance reports</span>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-5 w-5 flex-shrink-0 text-lime-400" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                            <span className="text-lg text-white">Remote diagnostics & support</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomepageBody3;