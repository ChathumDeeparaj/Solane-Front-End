import { Sailboat, Shield, Triangle, Wind } from "lucide-react";
import { motion } from "framer-motion";
import imgWindTurbine from "./wind-turbine.png";
import videoWindTurbine from "./WindTurbined.mp4";

const AnimatedText = ({ text, delay = 0 }) => {
  const letters = text.split("");

  return (
    <>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.03,
            ease: "easeOut"
          }}
          style={{ display: 'inline-block' }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
};

export default function HeroSection() {
  return (
    <div className="bg-white px-12 font-sans">
      {/* Navigation Bar */}
      <nav className="flex flex-wrap items-center justify-between py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light sm:h-12 sm:w-12">
            <Wind className="h-5 w-5 text-brand-dark sm:h-6 sm:w-6" />
          </div>
          <span className="text-center text-xs font-medium text-brand-dark sm:text-left sm:text-sm">
            Solar Energy
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark sm:h-12 sm:w-12">
            <Sailboat className="h-5 w-5 text-brand-light sm:h-6 sm:w-6" />
          </div>
          <span className="text-center text-xs font-medium text-brand-dark sm:text-left sm:text-sm">
            Home Dashboard
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light sm:h-12 sm:w-12">
            <Triangle className="h-5 w-5 fill-current text-brand-dark sm:h-6 sm:w-6" />
          </div>
          <span className="text-center text-xs font-medium text-brand-dark sm:text-left sm:text-sm">
            Real-Time Monitoring
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden flex-col items-center gap-2 sm:flex sm:flex-row sm:gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark sm:h-12 sm:w-12">
            <Shield className="h-5 w-5 text-brand-light sm:h-6 sm:w-6" />
          </div>
          <span className="text-center text-xs font-medium text-brand-dark sm:text-left sm:text-sm">
            Anomaly Detection
          </span>
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="px-4 py-4 md:px-6 md:py-16">
        <div>
          {/* Hero Section */}
          <div className="mb-12 md:mb-24">
            <h1 className="text-4xl leading-tight font-bold text-brand-dark sm:text-5xl sm:leading-20 md:text-7xl md:leading-32 xl:text-8xl">
              <div>
                <AnimatedText text="Monitor Your Home's" delay={0.5} />
              </div>
              <div className="flex flex-row items-center gap-4 sm:gap-8">
                <span>
                  <AnimatedText text="Solar Energy" delay={1.0} />
                </span>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="relative overflow-hidden rounded-xl md:rounded-2xl"
                >
                  <video
                    src={videoWindTurbine}
                    className="max-h-8 sm:max-h-16 md:max-h-20 object-cover"
                    style={{
                      transform: 'scale(1.5) scaleX(1.2)',
                      transformOrigin: 'center'
                    }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </motion.div>
              </div>
              <div className="flex items-center gap-4 sm:gap-8">
                <span>
                  <AnimatedText text="with Real-Time" delay={1.8} />
                </span>
              </div>
              <div className="flex flex-row items-center gap-4 sm:gap-8">
                <span>
                  <AnimatedText text="Insights & Alerts" delay={2.3} />
                </span>
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 2.8,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark sm:h-14 sm:w-14 md:h-16 md:w-16"
                >
                  <Triangle className="h-5 w-5 fill-current text-white sm:h-7 sm:w-7 md:h-8 md:w-8" />
                </motion.div>
              </div>
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}