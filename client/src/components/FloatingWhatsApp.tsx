import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/254720448662"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all group border-2 border-white/20 hover:bg-[#20bd5a]"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="h-8 w-8 relative z-10" />
      <span className="absolute flex h-full w-full">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40"></span>
      </span>
      {/* Tooltip on hover for desktop */}
      <span className="absolute right-20 top-1/2 -translate-y-1/2 scale-0 rounded-lg bg-background border border-border px-4 py-2 text-sm font-bold text-foreground shadow-xl transition-all origin-right group-hover:scale-100 hidden md:block whitespace-nowrap">
        Ready to order? Chat with us!
        {/* Little arrow pointing right */}
        <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-background border-r border-t border-border rotate-45"></span>
      </span>
    </motion.a>
  );
}
