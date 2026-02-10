import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  Shield,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Success! 🎉",
      description:
        "Thank you for your interest! Our experts will contact you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden
      bg-gradient-to-br from-[#E4D3C2] via-[#E5D8C4] to-[#E4D3C2]"
    >
      {/* ===== SECTION BACKGROUND : LINE GRAPH + CANDLES ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Line graph */}
          <motion.path
            d="M0,420 L120,380 L240,400 L360,340 L480,360 L600,300
               L720,320 L840,260 L960,290 L1080,230 L1200,250 L1320,210 L1440,230"
            fill="none"
            stroke="#000"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Small green/red candles */}
          {[
            { x: 220, y: 330, h: 55, c: "#16a34a" },
            { x: 340, y: 310, h: 70, c: "#dc2626" },
            { x: 460, y: 300, h: 60, c: "#16a34a" },
            { x: 580, y: 280, h: 80, c: "#dc2626" },
            { x: 700, y: 260, h: 65, c: "#16a34a" },
            { x: 820, y: 250, h: 85, c: "#dc2626" },
            { x: 940, y: 270, h: 60, c: "#16a34a" },
          ].map((c, i) => (
            <motion.g
              key={i}
              initial={{ opacity: 0.4, y: 10 }}
              animate={{ opacity: 0.7, y: -10 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.25,
              }}
            >
              {/* wick */}
              <line
                x1={c.x}
                y1={c.y - 25}
                x2={c.x}
                y2={c.y + c.h + 25}
                stroke={c.c}
                strokeWidth="2"
              />
              {/* body */}
              <rect
                x={c.x - 6}
                y={c.y}
                width="12"
                height={c.h}
                rx="2"
                fill={c.c}
              />
            </motion.g>
          ))}
        </svg>
      </div>

      {/* Soft blur blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            <h2 className="text-[34px] sm:text-[38px] md:text-[46px] lg:text-[54px]
              font-black leading-[1.05] tracking-tight mb-6">
              An <span className="text-primary">Upper Hand</span> for
              <span className="block font-extrabold">
                Growth-Focused Investors
              </span>
            </h2>

            <div className="space-y-3">
              {[
                "Research + Data ⇒ Market Analysis",
                "Live Data × Time ⇒ Real-Time Market Trends",
                "Accuracy + Timing ⇒ Buy | Sell | Hold",
                "Systems → Track → Measure → Report",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-gray-800 text-sm md:text-lg">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 max-w-md flex items-center gap-4
              rounded-md bg-[#F6F1E8] px-5 py-4 border border-black/5">
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-orange-100">
                <Shield className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm md:text-base">
                  Your Data is Secure
                </p>
                <p className="text-gray-600 text-xs md:text-sm">
                  We never spam or share your information.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM (CLEAN – NO GRAPH INSIDE) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="-mt-7"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/70 backdrop-blur-md border
              p-6 rounded-2xl shadow-xl max-w-md mx-auto"
            >
              <h3 className="text-center mb-6">
                <span className="block text-2xl font-bold">
                  Start Investing
                </span>
                <span className="block text-3xl font-extrabold text-orange-500">
                  Smarter Today
                </span>
              </h3>

              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full pl-11 pr-4 py-3 border rounded-xl text-sm"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full pl-11 pr-4 py-3 border rounded-xl text-sm"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full pl-11 pr-4 py-3 border rounded-xl text-sm"
                  />
                </div>

                <select
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-xl text-sm"
                >
                  <option value="" disabled>
                    Experience Level
                  </option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3 w-4 h-4 text-gray-500" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your investment goals..."
                    rows={3}
                    className="w-full pl-11 pr-4 py-3 border rounded-xl text-sm resize-none"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90"
                  >
                    {isSubmitting ? "Submitting..." : "Get Guidance"}
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LeadForm;
