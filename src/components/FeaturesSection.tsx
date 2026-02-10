import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Shield,
  BarChart3,
  Brain,
  Lightbulb,
  Bell,
  Target,
  BookOpen,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Daily Opulent Trade",
    description:
      "Short-term intraday stock trading recommendations based on technical analysis for quick opportunities.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Optimum Options",
    description:
      "Low-risk option trading service ideal for beginners focusing on capital safety and consistency.",
    color: "secondary",
  },
  {
    icon: BarChart3,
    title: "Index Option",
    description:
      "Expert index option calls on NIFTY and BANK NIFTY with defined entry, exit, and risk levels.",
    color: "primary",
  },
  {
    icon: Target,
    title: "Index Option Power",
    description:
      "Advanced index option strategies designed to capture strong market momentum efficiently.",
    color: "secondary",
  },
  {
    icon: Brain,
    title: "Option Strategy",
    description:
      "Well-structured option strategies for traders looking to balance risk and reward effectively.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "The Bunny Midcap",
    description:
      "Mid-cap stock recommendations selected through in-depth research for growth opportunities.",
    color: "secondary",
  },
  {
    icon: Bell,
    title: "The Turtle Trade",
    description:
      "Positional trading service focused on holding quality stocks for days to weeks.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Mega Derivative",
    description:
      "High-level derivative trading service for experienced traders in stock and index derivatives.",
    color: "secondary",
  },
  {
    icon: BookOpen,
    title: "Intensify Strategies",
    description:
      "Research-backed trading strategies combining market data, analytics, and trading psychology.",
    color: "primary",
  },
];

const FeaturesSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="features"
      className="py-20 bg-section-gradient relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-secondary">
            Professional Trading <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Intensify Research provides research-driven trading services designed
            for beginners to advanced traders.
          </p>
        </motion.div>

        {/* Auto-rotating Featured Card */}
        <div className="mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div
                className={`bg-card border border-border p-8 rounded-2xl shadow-lg ${
                  features[activeCard].color === "primary"
                    ? "glow-orange"
                    : "glow-gold"
                }`}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${
                      features[activeCard].color === "primary"
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary/20 text-secondary"
                    }`}
                  >
                    {(() => {
                      const Icon = features[activeCard].icon;
                      return <Icon className="w-8 h-8" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      {features[activeCard].title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {features[activeCard].description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeCard
                    ? "w-8 bg-primary"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group bg-card border border-border p-6 rounded-xl cursor-pointer transition-all duration-300 hover:border-primary/50 shadow-sm hover:shadow-md ${
                index === activeCard ? "ring-2 ring-primary/30" : ""
              }`}
              onClick={() => setActiveCard(index)}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  feature.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
