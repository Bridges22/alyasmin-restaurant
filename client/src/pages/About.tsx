import { Link } from "wouter";
import { ArrowLeft, Leaf, Users, Globe, ChefHat, Quote } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

/**
 * About Page - Restaurant story and Swahili cultural identity
 */
export default function About() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const coreValues = [
    {
      icon: Leaf,
      title: "Fresh & Local",
      desc: "We source from local farms and the Diani coastline. Fresh, seasonal, honest."
    },
    {
      icon: Users,
      title: "Family Welcome",
      desc: "Our tables welcome all, families, children, elders, tourists, locals."
    },
    {
      icon: Globe,
      title: "Tourist Friendly",
      desc: "English, Swahili, guidance on dishes. We make visitors feel at home."
    },
    {
      icon: ChefHat,
      title: "Catering Experts",
      desc: "Weddings, corporate events, group meals, we deliver quality at scale."
    }
  ];

  return (
    <PageTransition>
      <SEO 
        title="Our Story | Alyasmin Swahili Dishes" 
        description="Learn about the rich Swahili culinary heritage and coastal hospitality behind Alyasmin Swahili Dishes in Ukunda." 
      />
      {/* Hero Section */}
      <section className="py-24 bg-secondary/20 mt-16 md:mt-20">
        <div className="container">
          <Link href="/">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-primary mb-10 cursor-pointer hover:gap-3 transition-all font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.div>
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="overflow-hidden"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary">About Alyasmin</span>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight mt-4">
              A Family Table on <em className="text-primary not-italic">the Swahili Coast</em>
            </h1>
          </motion.div>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-amber-500 rounded my-8"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 text-xl text-muted-foreground leading-relaxed font-light"
          >
            <motion.p variants={fadeUpVariant}>
              Alyasmin Swahili Dishes was founded with one simple belief: that food cooked with love and tradition feeds more than just the body, it feeds the soul. Located in Ukunda, Kwale County, just a short distance from the world-famous Diani Beach, we serve the coastal community and thousands of visitors every year.
            </motion.p>
            <motion.p variants={fadeUpVariant}>
              Our kitchen is rooted in authentic Swahili cooking, the vibrant culinary tradition of Kenya's Indian Ocean coast, shaped by centuries of African, Arab, Indian and Portuguese influences. Every dish we serve carries that layered history, from our slow-cooked biryanis to our coconut-spiced stews and freshly grilled seafood.
            </motion.p>
            <motion.p variants={fadeUpVariant}>
              We are a family-friendly restaurant. Whether you're a couple on a beach holiday, a local family gathering for Sunday lunch, a group of friends exploring the coast, or a corporate team needing catering, Alyasmin is your home at the table.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="p-8 border-l-4 border-amber-600 bg-secondary/30 mt-12 relative rounded-r-lg">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10" />
              <p className="text-2xl font-bold italic text-foreground mb-3">"Tuko hapa kwa ajili yenu, wageni wetu ni baraka yetu. Alyasmin ni zaidi ya mkahawa; ni mahali pa kukutana, kula pamoja, na kushiriki furaha ya pwani yetu."</p>
              <p className="text-base text-muted-foreground uppercase tracking-widest font-semibold">We are here for you, our guests are our blessing. Alyasmin is more than a restaurant; it is a place to gather, eat together, and share the joy of our coast.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-secondary/20">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary">What We Stand For</span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4">Built on <em className="text-primary not-italic">Real Values</em></h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-amber-500 rounded mx-auto mt-8"></div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div variants={fadeUpVariant} key={idx} className="bg-background border-t-4 border-primary p-10 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="mx-auto w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        <div className="container relative z-10 space-y-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Visit Us in Ukunda
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl opacity-90 max-w-2xl mx-auto font-light"
          >
            We're open every day. Come as you are.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <Link href="/menu">
              <button className="px-10 py-4 rounded-xl font-bold bg-primary-foreground text-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-lg border-none shadow-xl">
                See Our Menu
              </button>
            </Link>
            <a href="tel:+254720448662" className="px-10 py-4 rounded-xl font-bold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 text-lg">
              Make a Reservation
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
