import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import StockChart from "./StockChart";

const heroTexts = [
  "Learn Stock Market From Experts",
  "Start Your Trading Journey Today",
  "Grow Your Wealth With Confidence",
  "Master Technical Analysis",
  "Build Your Investment Portfolio",
];

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start overflow-hidden bg-hero-gradient"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* TEXT (order added safely – no effect) */}
          <motion.div
            className="order-1 lg:order-1 text-center lg:text-left mt-12 lg:mt-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-medium text-primary">
                SEBI Registered RA
              </span>
            </div>

            <div className="min-h-[130px] md:min-h-[150px] mb-4 overflow-hidden flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentText}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold"
                >
                  {(() => {
                    const words = heroTexts[currentText].split(" ");
                    const first = words.slice(0, -1).join(" ");
                    const last = words[words.length - 1];
                    return (
                      <>
                        <span className="text-secondary">{first}</span>{" "}
                        <span className="text-primary">{last}</span>
                      </>
                    );
                  })()}
                </motion.h1>
              </AnimatePresence>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0">
              Join India’s most trusted stock market education platform. Get expert
              guidance and real-time insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToForm}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2"
              >
                Get Guided Today
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#features"
                className="border-2 border-secondary/30 px-8 py-4 rounded-xl font-semibold text-lg text-secondary"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* CHART (order added safely – no effect) */}
          <motion.div
            className="order-2 lg:order-2 relative mt-12 lg:mt-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-navy-gradient border border-secondary/20 rounded-2xl p-6 shadow-xl">
              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="text-white font-semibold">NIFTY 50</h3>
                  <p className="text-white/70 text-sm">NSE Index</p>
                </div>
                <div className="text-right">
                  <p className="text-stock-green font-bold text-xl">
                    24,677.80
                  </p>
                  <p className="text-stock-green text-sm flex items-center gap-1 justify-end">
                    <TrendingUp className="w-4 h-4" />
                    +176.45
                  </p>
                </div>
              </div>

              <StockChart />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
