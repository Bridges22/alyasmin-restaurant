import { Link } from "wouter";
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { motion, Variants } from "framer-motion";
import SEO from "@/components/SEO";

/**
 * Contact Page - Location, contact form, business hours, and Google Maps
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a success message
    alert(
      "Thank you for your message! We will get back to you soon.\n\nOr contact us directly at 0720 448662"
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <PageTransition>
      <SEO 
        title="Contact Us | Al Yasmin Swahili Dishes" 
        description="Get in touch with Al Yasmin Swahili Dishes for reservations, catering inquiries, or takeaway orders in Ukunda."
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
              Get in Touch
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl text-muted-foreground max-w-3xl"
          >
            Get in touch with Al Yasmin Swahili Dishes for reservations, inquiries, or catering requests
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24">
        <div className="container">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {/* Same info cards but with refined hover states */}
            {[
              { icon: Phone, title: "Phone", content: "0720 448662", href: "tel:+254720448662", hoverClass: "group-hover:rotate-12" },
              { icon: Mail, title: "WhatsApp", content: "Message Us", href: "https://wa.me/254720448662", hoverClass: "group-hover:-rotate-12" },
              { icon: MapPin, title: "Location", content: "Ukunda, Kwale County", hoverClass: "group-hover:-translate-y-2" },
              { icon: Clock, title: "Hours", content: "Open Daily", hoverClass: "group-hover:rotate-[360deg] duration-1000" }
            ].map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div variants={fadeUpVariant} key={idx} className="menu-card text-center group hover:scale-[1.03] hover:shadow-xl transition-all duration-500 bg-background py-10">
                  <div className="p-5 rounded-full bg-primary/10 w-fit mx-auto group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(212,132,92,0.4)] transition-all duration-500 mb-6 text-primary">
                    <Icon className={`w-10 h-10 transition-transform ${info.hoverClass}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                  {info.href ? (
                    <a href={info.href} target={info.title === "WhatsApp" ? "_blank" : undefined} rel="noopener noreferrer" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-lg text-muted-foreground">{info.content}</p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12">
        <div className="container">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-white relative group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.244302621459!2d39.5694!3d-4.298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18404a3e6e8e8edb%3A0x6a0c0a5d4a1b0b0a!2sUkunda%2C%20Kenya!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "brightness(0.95)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Yasmin Swahili Dishes Location in Ukunda"
            ></iframe>
            {/* Map Overlay to prevent unwanted scrolling while zooming unless clicked */}
            <div className="absolute inset-0 bg-transparent pointer-events-none group-hover:pointer-events-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Business Hours */}
      <section className="py-24 bg-secondary/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
            >
              <h2 className="text-4xl font-bold text-primary mb-10">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="cta-button w-full text-center shadow-xl border-none text-lg py-4 rounded-xl"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Business Info */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12"
            >
              <motion.div variants={fadeUpVariant}>
                <h2 className="text-3xl font-bold text-primary mb-8">Business Hours</h2>
                <div className="space-y-4 text-lg text-muted-foreground p-8 bg-background rounded-2xl shadow-sm border border-border/50">
                  <div className="flex justify-between hover:text-primary transition-colors cursor-default">
                    <span>Monday - Sunday</span>
                    <span className="font-bold text-foreground">Open Daily</span>
                  </div>
                  <div className="flex justify-between hover:text-primary transition-colors cursor-default">
                    <span>Breakfast</span>
                    <span className="font-bold text-foreground">7:00 AM - 11:00 AM</span>
                  </div>
                  <div className="flex justify-between hover:text-primary transition-colors cursor-default">
                    <span>Lunch</span>
                    <span className="font-bold text-foreground">12:00 PM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between hover:text-primary transition-colors cursor-default">
                    <span>Dinner</span>
                    <span className="font-bold text-foreground">6:00 PM - 10:00 PM</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="bg-primary/5 border border-primary/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Quick Direct Contact
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  For immediate assistance, event catering, or takeaway orders
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+254720448662"
                    className="flex-1 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-center hover:-translate-y-1 hover:shadow-lg transition-all text-lg"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/254720448662"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 rounded-xl border-2 border-primary text-primary font-bold text-center hover:bg-primary/10 hover:-translate-y-1 transition-all text-lg"
                  >
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container text-center space-y-10 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            We Look Forward to Serving You
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl opacity-90 max-w-2xl mx-auto font-light"
          >
            Whether you are planning a casual meal, a special celebration, or a group gathering
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
                View Menu
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
