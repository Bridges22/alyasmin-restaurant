import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Users, Truck, UtensilsCrossed, Star, Quote } from "lucide-react";
import { Link } from "wouter";
import PageTransition from "@/components/PageTransition";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SEO from "@/components/SEO";

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const features = [
    {
      icon: Users,
      title: "Family Friendly",
      description: "Welcoming atmosphere for families and groups",
    },
    {
      icon: MapPin,
      title: "Beachside Location",
      description: "Beautiful outdoor seating near Diani Beach",
    },
    {
      icon: Truck,
      title: "Delivery & Takeaway",
      description: "Convenient options for on-the-go dining",
    },
    {
      icon: UtensilsCrossed,
      title: "Outside Catering",
      description: "Events, weddings & group meals handled perfectly anywhere you need",
    },
  ];

  const menuPreview = [
    {
      name: "Chicken Biriani",
      description: "Juicy chicken biryani bursting with flavor.",
      price: "KSh 600",
      image: "/images/chicken_biryani.jpg"
    },
    {
      name: "Grilled Fish",
      description: "Whole grilled fish with Swahili spices, fresh & smoky.",
      price: "KSh 700",
      image: "/images/grilled_fish.jpg"
    },
    {
      name: "Beef Pilau",
      description: "Fragrant spiced rice with tender beef, Swahili soul food.",
      price: "KSh 400",
      image: "/images/beef_pilau.jpg"
    },
    {
      name: "Coconut Mbaazi",
      description: "Pigeon peas in rich coconut sauce.",
      price: "KSh 180",
      image: "/images/mbaazi.png"
    },
  ];

  const reviews = [
    {
      text: "The biryani here is the best I've had in Kenya. Rich, aromatic, generous portions. The outdoor seating with the breeze was perfect. Will definitely return!",
      author: "Sarah B.",
      origin: "Tourist from UK"
    },
    {
      text: "Chakula kizuri sana! Hospitality that feels like home. We brought our whole family for a weekend lunch and everyone loved it. True coastal flavors.",
      author: "Ahmed Hassan",
      origin: "Local Family, Ukunda"
    },
    {
      text: "We had Alyasmin cater our wedding reception for over 150 guests. The team was professional, the food was incredible, and everyone kept asking for the recipe!",
      author: "Mwana K.",
      origin: "Wedding Client, Kwale"
    }
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const marqueeText = " Alyasmin Swahili Dishes • Ladha Halisi ya Kiswahili • Authentic Coastal Cuisine • ";

  return (
    <PageTransition>
      <SEO 
        title="Alyasmin Swahili Dishes | Authentic Coastal Cuisine in Ukunda" 
        description="Experience the true flavors of the coast at Alyasmin Swahili Dishes. Authentic coastal cuisine in the heart of Ukunda near Diani Beach." 
      />

      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          animate={{ scale: [1.1, 1.02] }}
          transition={{ duration: 15 }}
          className="absolute inset-0 bg-cover bg-center"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663333072259/59pcTgQtqakmcKawFWBMNB/hero-food-dish-N4jj2aZh7sMKBDKuuUoSvG.webp')`,
            }}
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </motion.div>

        {/* Content */}
        <div className="container relative z-10 max-w-3xl">
          <motion.div 
            style={{ opacity: heroOpacity }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-white"
          >
            <motion.div variants={fadeUpVariant} className="overflow-hidden mb-4">
              <span className="text-xl md:text-2xl font-light tracking-widest uppercase text-amber-500 drop-shadow-md">Karibu, Welcome to Ukunda</span>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="overflow-hidden">
              <h1 className="text-5xl md:text-8xl font-bold leading-tight drop-shadow-2xl">
                Taste the<br/>Swahili Coast
              </h1>
            </motion.div>
            <motion.p variants={fadeUpVariant} className="text-xl md:text-3xl font-light drop-shadow-md text-white/90 italic">
              "Ladha Halisi ya Kiswahili"
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href="/menu">
                <button className="cta-button w-full sm:w-auto text-center touch-manipulation border-none text-lg px-10 py-4">
                  View Menu
                </button>
              </Link>
              <a
                href="tel:+254720448662"
                className="px-10 py-4 rounded-lg font-semibold border-2 border-white/80 text-white hover:bg-white hover:text-black transition-all duration-300 text-center text-lg backdrop-blur-sm"
              >
                Call Now
              </a>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4 pt-8">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded border border-white/20 text-sm font-medium">Outdoor Seating</div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded border border-white/20 text-sm font-medium">Reservations</div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded border border-white/20 text-sm font-medium">Delivery</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Marquee */}
      <div className="bg-primary border-y-4 border-amber-600/30 text-primary-foreground py-4 overflow-hidden relative my-6 shadow-lg">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex text-2xl md:text-3xl font-bold tracking-wider"
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="mx-4">{marqueeText}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div variants={fadeUpVariant} key={idx} className="text-center space-y-4 group p-6 rounded-2xl hover:bg-secondary/30 transition-colors">
                  <div className="flex justify-center">
                    <div className="p-5 rounded-full bg-primary/10 group-hover:bg-primary text-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(212,132,92,0.4)] transition-all duration-300">
                      <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Story / About Snippet Section */}
      <section className="py-24 overflow-hidden bg-secondary/10">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative overflow-hidden rounded-2xl group shadow-2xl h-[500px] bg-secondary/20 flex items-center justify-center border-2 border-dashed border-primary/20">
             {/* 10+ Years Badge overlaying the container */}
             <div className="absolute bottom-6 right-6 z-20 bg-primary text-white p-6 text-center transform shadow-2xl flex flex-col items-center justify-center border-l-4 border-amber-400">
                <span className="text-4xl md:text-5xl font-black mb-1">10+</span>
                <span className="text-xs tracking-widest font-bold uppercase">Years Serving<br/>The Coast</span>
             </div>
             
             <div className="text-primary/40 font-medium italic">Image coming soon...</div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Where Every Meal Tells a <em className="text-primary not-italic">Coastal Story</em>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-amber-500 rounded my-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nestled in Ukunda, just minutes from the famous Diani Beach, Alyasmin Swahili Dishes was born from a love of authentic Swahili cooking. We use time-honored recipes passed down through generations of coastal families, crafted with the freshest local ingredients.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Whether you're a tourist discovering Kenyan cuisine for the first time, a local family looking for a warm place to gather, or a business group needing catering, we welcome you with open arms and generous plates.
            </p>
            
            <div className="p-6 border-l-4 border-primary bg-background shadow-sm relative mt-4">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
              <p className="text-xl font-bold italic text-foreground mb-2">"Chakula ni uhai, pamoja tunakula, pamoja tunaishi."</p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Food is life, together we eat, together we live.</p>
            </div>
            
            <div className="pt-6">
              <Link href="/about">
                <button className="cta-button border-none px-8 py-3 text-lg font-semibold">Read Our Full Story</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.h2 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="section-heading text-primary relative inline-block left-1/2 -translate-x-1/2"
          >
            Signature Dishes
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 pt-8"
          >
            {menuPreview.map((item, idx) => (
              <motion.div 
                 variants={fadeUpVariant} 
                 key={idx} 
                 className="menu-card cursor-pointer group bg-secondary/20 hover:bg-secondary/40 border border-transparent hover:border-primary/20"
                 whileHover={{ y: -8, scale: 1.02 }}
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
               >
                 <div className="w-full h-48 overflow-hidden rounded-t-lg mb-4 bg-primary/5">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                 </div>
                 <h3 className="text-xl font-bold text-primary mb-3 px-4 group-hover:text-amber-600 transition-colors">
                   {item.name}
                 </h3>
                 <p className="text-base text-muted-foreground mb-6 px-4">
                   {item.description}
                 </p>
                 <div className="mt-auto px-4 pb-4">
                   <div className="flex justify-between items-center mb-4">
                     <span className="font-black text-xl text-foreground">{item.price}</span>
                   </div>
                   <a
                     href={`https://wa.me/254720448662?text=${encodeURIComponent(`Hi Alyasmin, I would like to order: ${item.name}`)}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     onClick={(e) => e.stopPropagation()}
                     className="bg-green-600 text-white w-full py-2 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 hover:bg-green-700 hover:shadow-lg"
                   >
                     <span>Order Now</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1z" /></svg>
                   </a>
                 </div>
               </motion.div>
            ))}
          </motion.div>
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center"
          >
            <Link href="/menu">
              <button className="cta-button border-none text-lg px-12 py-4">View Full Menu</button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials / Reviews Section */}
      <section className="py-24 bg-foreground relative overflow-hidden text-background">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjUiIG51bU9jdGF2ZXM9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-amber-500">What People Say</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Loved by Tourists & <em className="text-primary not-italic">Locals Alike</em></h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-terracotta rounded mx-auto mt-6"></div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {reviews.map((review, idx) => (
              <motion.div variants={fadeUpVariant} key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex gap-1 text-amber-500 mb-6">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-lg italic text-white/90 leading-relaxed mb-8">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-white shadow-lg">
                    {review.author.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-bold text-white">{review.author}</div>
                    <div className="text-sm text-white/60">{review.origin}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        <div className="container text-center space-y-10 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Experience Real Swahili Taste
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl opacity-90 max-w-2xl mx-auto font-light"
          >
            We are open every day in Ukunda, dine in, take-away, delivery or catering.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <a
              href="tel:+254720448662"
              className="px-10 py-4 rounded-xl font-bold bg-primary-foreground text-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-lg shadow-xl"
            >
              Call: 0720 448662
            </a>
            <a
              href="https://wa.me/254720448662"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-xl font-bold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 text-lg"
            >
              Message on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
