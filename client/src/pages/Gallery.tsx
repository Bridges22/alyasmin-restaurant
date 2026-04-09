import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { motion, Variants } from "framer-motion";
import SEO from "@/components/SEO";

/**
 * Gallery Page - Food and restaurant ambiance photos
 */
export default function Gallery() {
  const galleryImages = [
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663333072259/59pcTgQtqakmcKawFWBMNB/hero-food-dish-N4jj2aZh7sMKBDKuuUoSvG.webp",
      title: "Chicken Tikka & Chips",
      description: "Our signature spiced chicken with golden chips",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663333072259/59pcTgQtqakmcKawFWBMNB/restaurant-ambiance-mmhy8cewss7ZFG9wV6qufG.webp",
      title: "Outdoor Seating",
      description: "Beautiful outdoor dining area with ocean view",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663333072259/59pcTgQtqakmcKawFWBMNB/swahili-spices-hero-NhAcBPba7QRz7UpmydhNQf.webp",
      title: "Authentic Spices",
      description: "Traditional Swahili spices and ingredients",
    },
  ];

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <PageTransition>
      <SEO 
        title="Gallery | Alyasmin Swahili Dishes" 
        description="View photos of our beautiful authentic Swahili cuisine and vibrant family-friendly outdoor dining ambiance in Ukunda."
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
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6 leading-tight">
              A Feast for<br/>the Eyes
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl text-muted-foreground max-w-3xl"
          >
            Explore the beauty of Alyasmin Swahili Dishes through our collection of food and ambiance photos
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-32">
        <div className="container">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {galleryImages.map((image, idx) => (
              <motion.div variants={fadeUpVariant} key={idx} className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-xl h-96">
                <div className="absolute inset-0 bg-secondary overflow-hidden w-full h-full">
                  {/* Mask Reveal specific to Gallery Items */}
                  <motion.div 
                    initial={{ right: 0 }}
                    whileInView={{ right: "100%" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.77, 0, 0.175, 1] }} 
                    className="absolute inset-0 bg-primary z-10"
                  />
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-30">
                    <h3 className="text-2xl font-bold text-white mb-2 shadow-sm">
                      {image.title}
                    </h3>
                    <p className="text-white/90 font-medium">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-secondary/10">
        <div className="container max-w-4xl text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl font-bold text-primary mb-12"
          >
            Experience Alyasmin
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 text-xl text-muted-foreground leading-relaxed"
          >
            <motion.p variants={fadeUpVariant}>
              Our gallery showcases the vibrant colors, fresh ingredients, and warm atmosphere that define the Alyasmin experience. From beautifully plated dishes to our inviting outdoor seating area, every image tells the story of authentic Swahili hospitality.
            </motion.p>
            <motion.p variants={fadeUpVariant}>
              Whether you are a food enthusiast, a traveler seeking authentic experiences, or a local looking for your new favorite restaurant, these images capture the essence of what makes Alyasmin special.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container text-center space-y-10 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Ready to Visit?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl opacity-90 max-w-2xl mx-auto font-light"
          >
            Come experience the authentic flavors and warm hospitality of Alyasmin Swahili Dishes
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <Link href="/contact">
              <button className="px-10 py-4 rounded-xl font-bold bg-primary-foreground text-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-lg border-none shadow-xl">
                Get Directions
              </button>
            </Link>
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
