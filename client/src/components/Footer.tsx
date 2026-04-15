import { Link } from "wouter";
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8 relative z-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="h-14 w-14 rounded-full border-2 border-primary/40 overflow-hidden shrink-0 flex items-center justify-center bg-[#8B0000] transition-all group-hover:scale-105">
                  <img
                    src="/logo.jpg"
                    alt="Al Yasmin Swahili Dishes Logo"
                    className="w-[135%] h-[135%] max-w-none object-cover"
                  />
                </div>
                <span className="text-3xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                  Al<span className="text-primary ml-0.5">yasmin</span>
                </span>
              </div>
            </Link>
            <p className="opacity-80 italic font-light text-sm">"Ladha Halisi ya Kiswahili"</p>
            <p className="opacity-80 text-sm leading-relaxed">
              Authentic Swahili Coastal Cuisine in Ukunda, near Diani Beach.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/254720448662" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors text-white">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold tracking-widest uppercase text-amber-500">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/">
                  <a className="opacity-70 hover:opacity-100 hover:text-primary transition-colors text-sm">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="opacity-70 hover:opacity-100 hover:text-primary transition-colors text-sm">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/menu">
                  <a className="opacity-70 hover:opacity-100 hover:text-primary transition-colors text-sm">Menu</a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="opacity-70 hover:opacity-100 hover:text-primary transition-colors text-sm">Gallery</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="opacity-70 hover:opacity-100 hover:text-primary transition-colors text-sm">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold tracking-widest uppercase text-amber-500">Services</h3>
            <ul className="space-y-4">
              <li><span className="opacity-70 text-sm cursor-default">Dine-In</span></li>
              <li><span className="opacity-70 text-sm cursor-default">Take-Away</span></li>
              <li><span className="opacity-70 text-sm cursor-default">Delivery</span></li>
              <li><span className="opacity-70 text-sm cursor-default">Catering & Events</span></li>
              <li><span className="opacity-70 text-sm cursor-default">Group Bookings</span></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold tracking-widest uppercase text-amber-500">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 opacity-80 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 opacity-80" />
                <span>Ukunda, Kwale County, Kenya</span>
              </li>
              <li className="flex items-start gap-3 opacity-80 text-sm hover:opacity-100 transition-opacity">
                <Phone className="w-5 h-5 text-primary shrink-0 opacity-80" />
                <a href="tel:+254720448662">0720 448662</a>
              </li>
              <li className="flex items-start gap-3 opacity-80 text-sm hover:opacity-100 hover:text-[#25D366] transition-colors">
                <MessageCircle className="w-5 h-5 text-primary shrink-0 opacity-80" />
                <a href="https://wa.me/254720448662" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </li>
              <li className="flex items-start gap-3 opacity-80 text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0 opacity-80" />
                <span>Open Daily: 7:00 AM, 10:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 opacity-60 text-xs">
          <p>&copy; 2026 Al Yasmin Swahili Dishes. All rights reserved.</p>
          <p className="text-center md:text-right">
            SEO: Swahili food Ukunda · Restaurant near Diani Beach · Coastal Kenya cuisine
          </p>
        </div>
      </div>
    </footer>
  );
}
