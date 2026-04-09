import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to add slight background when scrolled down for visibility
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/70 backdrop-blur-md border-b border-border shadow-sm py-2" : "bg-transparent py-4"}`}>
      <div className="container flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="h-12 w-12 rounded-full border-2 border-primary/20 overflow-hidden shrink-0 flex items-center justify-center bg-[#8B0000]"
            >
              <img
                src="/logo.jpg"
                alt="Alyasmin Swahili Dishes Logo"
                className="w-[135%] h-[135%] max-w-none object-cover"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary group-hover:text-amber-600 transition-colors leading-tight">Alyasmin Swahili Dishes</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold text-green-600 tracking-widest uppercase">Open Now</span>
              </div>
            </div>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 relative items-center">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <span className="relative cursor-pointer hover:text-primary transition-colors py-1 group font-semibold drop-shadow-sm">
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute left-0 right-0 h-0.5 bg-primary bottom-0 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {/* Subtle hover underline when not active */}
                  {!isActive && (
                    <span className="absolute left-1/2 right-1/2 h-0.5 bg-primary/50 bottom-0 rounded-full group-hover:left-0 group-hover:right-0 transition-all duration-300 ease-out" />
                  )}
                </span>
              </Link>
            );
          })}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/254720448662"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button text-sm flex items-center justify-center shadow-lg"
          >
            WhatsApp
          </motion.a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay (Transparent Glassmorphism) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-background/90 backdrop-blur-lg border-b border-border shadow-lg md:hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-6">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <div 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-xl font-semibold cursor-pointer transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`}
                    >
                      {link.label}
                    </div>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-border/50">
                <a
                  href="https://wa.me/254720448662"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cta-button w-full text-center block text-lg py-3"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
