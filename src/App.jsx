import { useState } from 'react'
import Navigation from './components/Navigation'
// import HeroSection from './components/HeroSection'
// import SolarEnergyProduction from './components/SolarEnergyProduction'


function App() {
  const [count, setCount] = useState(0)

  return (
<>
      <Navigation />
      <main>
        {/* <HeroSection />
        <SolarEnergyProduction /> */}
      </main>
    </>  );
}

export default App
