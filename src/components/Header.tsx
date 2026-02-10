import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    setIsOpen(false);

    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 96; // height of sticky header
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div className="flex items-center gap-3">
            <button onClick={() => handleScroll("home")}>
              <img
                src={logo}
                alt="Intensify Research"
                className="h-12 md:h-14 object-contain"
              />
            </button>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleScroll("home")}
              className="text-secondary hover:text-primary font-medium"
            >
              Home
            </button>

            <button
              onClick={() => handleScroll("services")}
              className="text-secondary hover:text-primary font-medium"
            >
              Services
            </button>

            <button
              onClick={() => handleScroll("contact")}
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.nav className="md:hidden mt-4 flex flex-col gap-4">
            <button onClick={() => handleScroll("home")}>Home</button>
            <button onClick={() => handleScroll("services")}>Services</button>
            <button
              onClick={() => handleScroll("contact")}
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg"
            >
              Get Started
            </button>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
