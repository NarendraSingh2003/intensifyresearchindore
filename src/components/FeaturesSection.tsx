import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Brain, BookOpen, Star } from "lucide-react";

/* ================= FEATURES ================= */

const features = [
  {
    icon: BarChart3,
    title: "Technical Based",
    description:
      "Pure technical analysis using price action, indicators, chart patterns, and market trends for precise trade execution.",
  },
  {
    icon: Brain,
    title: "Technical–Fundamental Based",
    description:
      "A hybrid approach combining technical charts with fundamental strength to identify high-probability trades.",
  },
  {
    icon: BookOpen,
    title: "Full Research Analytical",
    description:
      "End-to-end research including sector analysis, stock fundamentals, technical confirmation, and risk assessment.",
  },
];

/* ================= TESTIMONIALS ================= */

const testimonials = [
  { name: "Amit Sharma", rating: 5, comment: "Pure analysis based approach, no fake tips. Very professional." },
  { name: "Rohit Verma", rating: 4.5, comment: "Best research-driven trading guidance I have seen." },
  { name: "Neha Gupta", rating: 5, comment: "Clear logic, structured analysis, and disciplined risk management." },
  { name: "Sandeep Jain", rating: 4, comment: "No noise, only data. Exactly what serious traders need." },
  { name: "Pooja Mehta", rating: 5, comment: "Helped me understand market structure properly." },
];

/* ================= STAR COMPONENT ================= */

const Stars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-1 mb-3">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
      {halfStar && (
        <div className="relative w-4 h-4">
          <Star className="absolute w-4 h-4 text-primary" />
          <div className="absolute w-2 h-4 overflow-hidden">
            <Star className="w-4 h-4 fill-primary text-primary" />
          </div>
        </div>
      )}
    </div>
  );
};

/* ================= COMPONENT ================= */

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
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Research Approach
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-secondary">
            Trading Based on <span className="text-primary">Pure Analysis</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No tips. No noise. Only structured, data-driven market research.
          </p>
        </div>

        {/* Auto Rotating Feature Card */}
        <div className="mb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-card border border-border p-10 rounded-2xl shadow-xl text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {features[activeCard].title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {features[activeCard].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
              What Traders Say
            </h3>
            <p className="text-muted-foreground">
              Trusted by disciplined traders
            </p>
          </div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
              {[...testimonials, ...testimonials].map((item, index) => (
                <div
                  key={index}
                  className="min-w-[300px] bg-card border border-border rounded-xl p-6"
                >
                  <Stars rating={item.rating} />
                  <p className="text-sm text-muted-foreground mb-4">
                    “{item.comment}”
                  </p>
                  <span className="font-semibold">— {item.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
