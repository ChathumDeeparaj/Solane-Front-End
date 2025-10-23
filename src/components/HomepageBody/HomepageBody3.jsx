const HomepageBody3 = () => {
    return(
        <div className="flex min-h-screen flex-col bg-white lg:flex-row">
            <div className="relative m-2 min-h-[400px] flex-1 lg:min-auto ">
                <div className="relative h-full overflow-hidden rounded-3xl">
                    <img 
                        alt="Solar panel installation on a house roof" 
                        width="800" 
                        height="600" 
                        className="h-full w-full object-cover" 
                        src="/src/assets/wind-turbine-2-i2cMFNlb.png"
                    />
                    <div>
                        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8">
                            <div className="flex flex-col items-center rounded-2xl bg-blue-500 p-4 text-white sm:p-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle mb-2 h-6 w-6 fill-current sm:h-8 sm:w-8" aria-hidden="true"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
                                <span class="text-lg font-bold sm:text-xl">Aelora</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
























        </div>
    )

}
export default HomepageBody3;