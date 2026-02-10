import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Youtube,
  Send,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Logo with different color background */}
            <div className="inline-flex items-center justify-center bg-white rounded-xl p-3 shadow-lg mb-6">
              <img
                src={logo}
                alt="Intensify Research"
                className="h-10 w-auto"
              />
            </div>

            <p className="text-white/80 text-sm leading-relaxed">
              <strong>Head Office:</strong> A-1508, Floor No. 15, Mantri Serene,
              Opp. Mhada Bungalow, Off Film City Road, Dindoshi Goregaon (E),
              Mumbai – 400065
            </p>

            <p className="text-white/80 text-sm mt-4 leading-relaxed">
              <strong>Branch Office:</strong> 1st Floor 609, Khatiwala Tank,
              Indore (M.P) – 452014
            </p>
          </motion.div>

          {/* Important Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-6">Important Links</h4>
            <ul className="space-y-3 text-white/75 text-sm">
              {[
                "Blog",
                "Services",
                "Our Process",
                "Performance",
                "Terms & Condition",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-primary transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/75 text-sm">
              {[
                "KYC",
                "About",
                "Grievance",
                "Contact Us",
                "Investor Charter",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-primary transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-6">Support</h4>

            <ul className="space-y-4 text-sm text-white/80">
              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:07314287574"
                  className="hover:text-primary transition"
                >
                  0731-4287574
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:support@intensifyresearch.com"
                  className="hover:text-primary transition"
                >
                  support@intensifyresearch.com
                </a>
              </li>

              {/* Website */}
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <a
                  href="https://www.intensifyresearch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  www.intensifyresearch.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[
                {
                  href: "https://www.instagram.com/intensify.research",
                  Icon: Instagram,
                },
                {
                  href: "https://www.youtube.com/@intensifyresearch",
                  Icon: Youtube,
                },
                {
                  href: "https://www.linkedin.com/company/intensify-research/",
                  Icon: Linkedin,
                },
                {
                  href: "https://t.me/intensifyresearch",
                  Icon: Send,
                },
              ].map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20"></div>

      {/* Disclaimer */}
      <div className="container mx-auto px-4 py-8 text-center text-xs text-white/70 max-w-5xl leading-relaxed">
        <p>
          “Investment in securities market are subject to market risks. Read all
          the related documents carefully before investing.”
        </p>
        <p className="mt-3">
          “Registration granted by SEBI, Membership of BSE and certification from
          NISM in no way guarantee performance or provide any assurance of
          returns to investors”
        </p>
        <p className="mt-2">
          ODR Link:
          <a
            href="https://smartodr.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary ml-1 hover:underline"
          >
            https://smartodr.in/
          </a>
        </p>
      </div>

      {/* Copyright */}
      <div className="bg-secondary/90 text-center py-4 text-sm text-white/60">
        © 2024 Intensify Research Services Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
