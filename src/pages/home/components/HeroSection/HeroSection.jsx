import { Triangle, Wind, LayoutDashboard, Activity, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import videoWindTurbine from "./WindTurbined.mp4";

const AnimatedText = ({ text, delay = 0, className = "" }) => {
  const letters = text.split("");

  return (
    <span className={className}>
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
    </span>
  );
};

export default function HeroSection() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 px-6 md:px-12 font-sans overflow-hidden">
      {/* Feature Icons Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 md:gap-8 py-8 md:py-12"
      >
        {[
          { icon: Wind, label: "Solar Energy", color: "from-green-400 to-emerald-500" },
          { icon: LayoutDashboard, label: "Home Dashboard", color: "from-blue-400 to-blue-500" },
          { icon: Activity, label: "Real-Time Monitoring", color: "from-cyan-400 to-teal-500" },
          { icon: AlertTriangle, label: "Anomaly Detection", color: "from-purple-400 to-purple-500" },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full"
          >
            <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${item.color}`}>
              <item.icon className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-300">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Hero Content */}
      <main className="py-8 md:py-16 flex justify-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-6xl xl:text-7xl text-center">
            <div className="text-white">
              <AnimatedText text="Monitor Your Home's" delay={0.5} />
            </div>
            <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 mt-2">
              <span className="text-white">
                <AnimatedText text="Solar Energy" delay={1.0} />
              </span>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="relative overflow-hidden rounded-xl"
              >
                <video
                  src={videoWindTurbine}
                  className="max-h-12 sm:max-h-16 md:max-h-20 object-cover rounded-xl"
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
            <div className="mt-2">
              <span className="text-white">
                <AnimatedText text="with " delay={1.8} />
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                <AnimatedText text="Real-Time" delay={2.0} />
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 mt-2">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                <AnimatedText text="Insights & Alerts" delay={2.5} />
              </span>
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 3.0,
                  type: "spring",
                  stiffness: 200
                }}
                className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg shadow-cyan-500/30"
              >
                <Triangle className="h-6 w-6 md:h-7 md:w-7 fill-current text-white" />
              </motion.div>
            </div>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.2 }}
            className="mt-8 text-gray-400 text-lg text-center max-w-2xl mx-auto"
          >
            Gain complete control and visibility over your solar power generation with live data visualization,
            historical performance analysis, and proactive anomaly detection.
          </motion.p>
        </div>
      </main>
    </div>
  );
}