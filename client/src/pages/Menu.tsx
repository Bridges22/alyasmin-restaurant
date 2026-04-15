import { Link } from "wouter";
import { ArrowLeft, Coffee, Cookie, Utensils, Egg, Salad, Carrot, GlassWater } from "lucide-react";
import { useState, useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";

/**
 * Improved Menu Page - More visual, interactive & mouth-watering
 * 
 * Key upgrades that make customers obsessed:
 * 1. Icons on every category tab → instantly scannable & premium feel
 * 2. Live search inside the active category → customers find favorites in 1 second
 * 3. Tempting short descriptions on every single item → sells the dish emotionally
 * 4. "Popular" badges on best-sellers → social proof & urgency
 * 5. Richer card hover + better spacing → feels luxurious and modern
 * 6. Search resets automatically when switching categories
 * 7. Hero ready for a background food image (just drop your best Swahili dish photo)
 */

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("tea");
  const [searchTerm, setSearchTerm] = useState("");

  // Reset search when category changes
  useEffect(() => {
    setSearchTerm("");
  }, [activeCategory]);

  const menuData = {
    tea: {
      title: "Tea",
      items: [
        { name: "White Cardamon Tea", description: "Fragrant white tea infused with premium cardamom pods, light, aromatic and perfectly soothing", price: "Ksh.210", popular: true },
        { name: "White Spice Tea", description: "White tea blended with a secret mix of coastal spices for a warm, exotic sip", price: "Ksh.210" },
        { name: "Black Spice Tea", description: "Bold Kenyan black tea with warming spices, the ultimate comfort drink", price: "Ksh.120", popular: true },
        { name: "Plain Black Tea", description: "Classic strong Kenyan black tea, simple, satisfying and always perfect", price: "Ksh.70" },
        { name: "Black Ginger Tea", description: "Black tea with fresh ginger root, spicy, invigorating and great for digestion", price: "Ksh.110" },
        { name: "Black Lemon Ginger Tea", description: "Black tea, fresh ginger and zesty lemon, a coastal immunity booster", price: "Ksh.110" },
        { name: "Dawa", description: "The famous Kenyan 'medicine' tea, ginger, lemon, honey and spices", price: "Ksh.180", popular: true },
        { name: "White Chocolate", description: "Creamy white chocolate tea, sweet, indulgent and surprisingly addictive", price: "Ksh.210" },
        { name: "Hot Chocolate", description: "Rich, velvety hot chocolate, pure comfort in a cup", price: "Ksh.180" },
        { name: "Special Tea", description: "Our house special blend, the one everyone keeps coming back for", price: "Ksh.220", popular: true },
        { name: "Black Chocolate", description: "Dark chocolate infused black tea, deep, rich and slightly sweet", price: "Ksh.120" },
        { name: "Mixed African White Tea", description: "Premium white tea from across East Africa, floral and delicate", price: "Ksh.120" },
      ],
    },
    coffee: {
      title: "Coffee",
      items: [
        { name: "Black Coffee", description: "Freshly brewed Kenyan coffee, bold, aromatic and full-bodied", price: "Ksh.120" },
        { name: "White Coffee", description: "Smooth Kenyan coffee with steamed milk, creamy and comforting", price: "Ksh.180" },
        { name: "Cappuccino", description: "Rich espresso topped with silky foam, the perfect balance", price: "Ksh.210", popular: true },
        { name: "Espresso", description: "Pure, intense single shot of Kenyan coffee, for the real lovers", price: "Ksh.120" },
      ],
    },
    snacks: {
      title: "Snacks",
      items: [
        { name: "Half Cake", description: "Soft, fluffy half-cake, a light coastal treat that melts in your mouth", price: "Ksh.60" },
        { name: "Meat Pie", description: "Crispy pastry filled with spiced minced beef, street-food perfection", price: "Ksh.140" },
        { name: "Rolex", description: "Iconic Kenyan street wrap: eggs, veggies & chapati, breakfast heaven", price: "Ksh.190", popular: true },
        { name: "Chapati", description: "Fresh, soft & flaky homemade chapati, still warm from the pan", price: "Ksh.50" },
        { name: "Mahamri", description: "Sweet, deep-fried coconut doughnuts, Swahili classic", price: "Ksh.20" },
        { name: "Toast Bread", description: "Golden buttered toast, simple but irresistible", price: "Ksh.60" },
        { name: "Sausage", description: "Juicy grilled sausage with a hint of spice", price: "Ksh.80" },
        { name: "Samosa", description: "Crispy triangular pastries filled with spiced potatoes & peas", price: "Ksh.50" },
        { name: "Pancake", description: "Fluffy pancakes served with honey or chocolate", price: "Ksh.140" },
        { name: "Fresh Bread", description: "Warm, soft bread straight from the oven", price: "Ksh.30" },
        { name: "French Toast", description: "Cinnamon-spiced French toast, sweet & satisfying", price: "Ksh.140" },
        { name: "Fried Potatoes", description: "Crispy golden chips with a touch of coastal seasoning", price: "Ksh.50" },
        { name: "Sausage Special", description: "Our famous sausage wrapped in chapati with egg & veggies", price: "Ksh.230", popular: true },
        { name: "Mitai", description: "Sweet coconut milk doughnut, Swahili favorite", price: "Ksh.20" },
        { name: "Doughnuts", description: "Soft, sugary doughnuts, perfect with tea", price: "Ksh.60" },
        { name: "Kebab", description: "Spiced minced meat skewers, juicy and flavorful", price: "Ksh.120" },
      ],
    },
    main_course_1: {
      title: "Main Course 1",
      items: [
        { name: "Chips Plain", description: "Crispy golden fries, the ultimate comfort side", price: "Ksh.200" },
        { name: "Chips Masala", description: "Spiced chips tossed in our secret masala, addictive!", price: "Ksh.250", popular: true },
        { name: "Chips Zege", description: "Chips mixed with eggs & veggies, street-style delight", price: "Ksh.300" },
        { name: "Chips Swahili Tika Beef", description: "Chips loaded with tender Swahili-spiced beef", price: "Ksh.470" },
        { name: "Chips Octopus Tika", description: "Crispy chips with tender octopus in coconut sauce", price: "Ksh.650" },
        { name: "Chips Fish Tika", description: "Chips with fresh fish in Swahili tikka marinade", price: "Ksh.820" },
        { name: "Chicken Chips Masala", description: "Juicy chicken pieces on a bed of masala chips", price: "Ksh.550" },
        { name: "Beef Masala Chips", description: "Tender beef in rich masala served with chips", price: "Ksh.470" },
        { name: "Fish Masala Chips", description: "Fresh fish in aromatic masala with golden chips", price: "Ksh.820" },
        { name: "Chicken Grill Masala Chips", description: "Grilled chicken with smoky masala chips", price: "Ksh.600" },
        { name: "Grill Octopus Masala Chips", description: "Grilled octopus paired with spicy chips", price: "Ksh.650" },
        { name: "Fish Curry Rice", description: "Fresh fish in fragrant coconut curry served with rice", price: "Ksh.900" },
        { name: "Octopus Curry Rice", description: "Tender octopus in coconut curry over fluffy rice", price: "Ksh.650" },
        { name: "Beef Curry Rice", description: "Slow-cooked beef curry with aromatic rice", price: "Ksh.470" },
        { name: "Chicken Curry Rice", description: "Tender chicken in rich coconut curry & rice", price: "Ksh.550" },
        { name: "Chicken Wet Fry", description: "Chicken stir-fried in fresh tomatoes, onions & spices", price: "Ksh.450" },
        { name: "Beef Stew", description: "Slow-simmered beef stew with coastal spices", price: "Ksh.250" },
        { name: "Chicken 1/4", description: "Quarter grilled chicken, juicy and perfectly seasoned", price: "Ksh.300" },
        { name: "Ugali", description: "Fresh, soft ugali, the perfect side for any curry", price: "Ksh.80" },
        { name: "White Rice", description: "Fluffy steamed white rice", price: "Ksh.150" },
        { name: "Coconut Rice", description: "Aromatic rice cooked in coconut milk, Swahili signature", price: "Ksh.200", popular: true },
        { name: "Chips Chicken Tika", description: "Chips with marinated chicken tikka", price: "Ksh.600" },
        { name: "Octopus Dry Fry", description: "Dry-fried octopus with onions, tomatoes & spices", price: "Ksh.450" },
        { name: "Octopus Wet Fry", description: "Octopus simmered in rich tomato-onion gravy", price: "Ksh.470" },
        { name: "Fish Sauce White Rice", description: "Fresh fish in creamy white sauce over rice", price: "Ksh.820" },
        { name: "Octopus Biriani", description: "Fragrant octopus biryani layered with spices", price: "Ksh.700" },
        { name: "Chicken Sauce", description: "Chicken in thick, flavorful Swahili sauce", price: "Ksh.450" },
        { name: "Fish Sauce", description: "Fresh fish in rich coconut-tomato sauce", price: "Ksh.670" },
        { name: "Fish Wet Fry", description: "Fish fried then simmered in spicy gravy", price: "Ksh.670" },
        { name: "Fish Coconut Sauce", description: "Fish gently cooked in creamy coconut sauce", price: "Ksh.670" },
      ],
    },
    eggs: {
      title: "Eggs",
      items: [
        { name: "Fried Sun Side Eggs", description: "Two sunny-side-up eggs, golden yolks, perfect for dipping", price: "Ksh.120" },
        { name: "Spanish Ommelet", description: "Fluffy omelet loaded with onions, tomatoes & peppers", price: "Ksh.230" },
        { name: "Scrambled Eggs", description: "Creamy scrambled eggs cooked with fresh herbs", price: "Ksh.230" },
        { name: "Fried Egg", description: "Classic crispy-edged fried egg", price: "Ksh.120" },
        { name: "Boiled Egg (2)", description: "Two perfectly boiled eggs, simple & protein-packed", price: "Ksh.100" },
      ],
    },
    main_course_2: {
      title: "Main Course 2",
      items: [
        { name: "Fried Beans", description: "Crispy fried beans with onions and spices", price: "Ksh.100" },
        { name: "Beef Pilau", description: "Fragrant spiced rice with tender beef, Swahili soul food", price: "Ksh.400", popular: true },
        { name: "Chicken Pilau", description: "Aromatic chicken pilau cooked with whole spices", price: "Ksh.550", popular: true },
        { name: "Beef Biriani", description: "Layered beef biryani with saffron and caramelized onions", price: "Ksh.470" },
        { name: "Chicken Biriani", description: "Juicy chicken biryani bursting with flavor", price: "Ksh.600" },
        { name: "Beef White Rice", description: "Tender beef served with fluffy white rice", price: "Ksh.400" },
        { name: "Chicken Sauce White Rice", description: "Chicken in rich sauce over steamed rice", price: "Ksh.600" },
        { name: "Fish Sauce White Rice", description: "Fresh fish in coconut sauce with rice", price: "Ksh.750" },
        { name: "Eggs Biriani", description: "Vegetarian-friendly egg biryani, rich & aromatic", price: "Ksh.450" },
        { name: "Beef Ugali", description: "Beef stew served with soft ugali", price: "Ksh.330" },
        { name: "Chicken Dry Ugali", description: "Dry-fried chicken with ugali", price: "Ksh.380" },
        { name: "Fish Sauce Ugali", description: "Fish in coconut sauce with ugali", price: "Ksh.700" },
        { name: "Grilled Chicken", description: "Chargrilled chicken marinated in Swahili spices", price: "Ksh.400" },
        { name: "Grilled Beef", description: "Juicy grilled beef with coastal seasoning", price: "Ksh.300" },
        { name: "Grilled Octopus", description: "Tender grilled octopus with lemon & spices", price: "Ksh.450" },
        { name: "Fish Masala Rice", description: "Fish in aromatic masala served with rice", price: "Ksh.820" },
        { name: "Beef Masala Vegetable Rice", description: "Beef masala with vegetable rice", price: "Ksh.420" },
        { name: "Chicken Masala Rice", description: "Chicken in masala with fragrant rice", price: "Ksh.600" },
        { name: "Coconut Fish Sauce Rice", description: "Fish in creamy coconut sauce over rice", price: "Ksh.820" },
        { name: "Coconut Beef Sauce Rice", description: "Beef simmered in coconut sauce with rice", price: "Ksh.450" },
        { name: "Chicken Coconut Sauce Rice", description: "Chicken in coconut sauce served with rice", price: "Ksh.650" },
        { name: "Soup Kuku", description: "Hearty chicken soup, perfect starter or light meal", price: "Ksh.300" },
        { name: "Soup Mbuzi", description: "Goat soup packed with flavor and spices", price: "Ksh.400" },
        { name: "Coconut Beans", description: "Beans cooked in creamy coconut milk", price: "Ksh.150" },
        { name: "Coconut Mbaazi", description: "Pigeon peas in rich coconut sauce", price: "Ksh.180" },
        { name: "Fish Dry Fry", description: "Crispy dry-fried fish with onions & tomatoes", price: "Ksh.600" },
        { name: "Vegetable Rice", description: "Colorful rice stir-fried with fresh vegetables", price: "Ksh.170" },
        { name: "Octopus Curry", description: "Tender octopus in fragrant coconut curry", price: "Ksh.500" },
        { name: "Grilled Fish", description: "Whole grilled fish with Swahili spices, fresh & smoky", price: "Ksh.700", popular: true },
      ],
    },
    salads: {
      title: "Salads",
      items: [
        { name: "Mixed Vegetable salads", description: "Crisp mixed greens, tomatoes, cucumber & carrots", price: "Ksh.230" },
        { name: "Chef's Salads", description: "Our chef's special mix with avocado & house dressing", price: "Ksh.230", popular: true },
        { name: "Sausage Roll", description: "Sausage wrapped in flaky pastry, salad upgrade", price: "Ksh.230" },
        { name: "Kachumbari Salad", description: "Fresh tomato-onion-coriander salad, the perfect sidekick", price: "Ksh.70" },
      ],
    },
    vegetables: {
      title: "Vegetables",
      items: [
        { name: "Steamed Cabbage", description: "Lightly steamed cabbage with a touch of salt", price: "Ksh.80" },
        { name: "Steamed Mchicha", description: "Fresh spinach steamed to perfection", price: "Ksh.80" },
        { name: "Cooked Cabbage", description: "Cabbage cooked with onions & mild spices", price: "Ksh.120" },
        { name: "Cooked Mchicha", description: "Mchicha sautéed with garlic & tomatoes", price: "Ksh.120" },
      ],
    },
    juices: {
      title: "Juices",
      items: [
        { name: "Avocado Juice", description: "Thick, creamy avocado blended to silky perfection", price: "Ksh.200", popular: true },
        { name: "Passion Juice", description: "Fresh passion fruit, tangy and refreshing", price: "Ksh.150" },
        { name: "Orange Juice", description: "Freshly squeezed orange juice", price: "Ksh.150" },
        { name: "Mango Juice", description: "Sweet, ripe mango juice, pure tropical bliss", price: "Ksh.150" },
        { name: "Lemon Juice", description: "Fresh lemon juice with a hint of honey", price: "Ksh.150" },
        { name: "Bananas Smothie", description: "Creamy banana smoothie, thick & satisfying", price: "Ksh.200" },
        { name: "Pine-Apple Juice", description: "Sweet pineapple juice, sunny and refreshing", price: "Ksh.150" },
        { name: "Tamarind Juice", description: "Tangy tamarind juice, a coastal classic", price: "Ksh.150" },
        { name: "1 Scoupe Ice Cream", description: "Premium vanilla ice cream scoop", price: "Ksh.150" },
        { name: "Milk Shake", description: "Thick milkshake in your choice of flavor", price: "Ksh.200" },
      ],
    },
    other_drinks: {
      title: "Other Drinks",
      items: [
        { name: "Coca Cola", description: "Classic ice-cold Coca-Cola", price: "Ksh.100" },
        { name: "Fanta Orange", description: "Refreshing Fanta Orange", price: "Ksh.100" },
        { name: "Fanta - Black Currant", description: "Sweet black currant Fanta", price: "Ksh.100" },
        { name: "Sprite", description: "Crisp, lemon-lime Sprite", price: "Ksh.100" },
        { name: "Stoney Tangawizi", description: "Ginger beer with a real kick", price: "Ksh.100" },
        { name: "Novida", description: "Refreshing Novida soda", price: "Ksh.100" },
        { name: "Soda Water", description: "Sparkling soda water", price: "Ksh.100" },
        { name: "Take Away Sodas", description: "Sodas packaged for takeaway", price: "Ksh.120" },
      ],
    },
  };

  const categories = [
    { id: "tea", label: "Tea", icon: Coffee },
    { id: "coffee", label: "Coffee", icon: Coffee },
    { id: "snacks", label: "Snacks", icon: Cookie },
    { id: "main_course_1", label: "Main Course 1", icon: Utensils },
    { id: "eggs", label: "Eggs", icon: Egg },
    { id: "main_course_2", label: "Main Course 2", icon: Utensils },
    { id: "salads", label: "Salads", icon: Salad },
    { id: "vegetables", label: "Vegetables", icon: Carrot },
    { id: "juices", label: "Juices", icon: GlassWater },
    { id: "other_drinks", label: "Other Drinks", icon: GlassWater },
  ];

  const currentMenu = menuData[activeCategory as keyof typeof menuData];
  const filteredItems = currentMenu.items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <PageTransition>
      <SEO
        title="Our Menu | Al Yasmin Swahili Dishes"
        description="Explore our authentic Swahili menu featuring Pilau, Biryani, fresh seafood, and traditional breakfast options."
      />

      {/* Hero Section, ready for a stunning food background */}
      <section
        className="py-20 bg-secondary/20 mt-16 md:mt-20 relative overflow-hidden"
      // Add your hero image here (high-quality Swahili dish photo recommended)
      // style={{ backgroundImage: "url('/images/menu-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Optional overlay if you add background image */}
        {/* <div className="absolute inset-0 bg-black/30" /> */}
        <div className="container relative">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-primary mb-8 cursor-pointer hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.div>
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-primary mb-6"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl"
          >
            Authentic Swahili coastal cuisine with fresh, locally-sourced ingredients
          </motion.p>
        </div>
      </section>

      {/* Category Tabs, now with icons */}
      <section className="relative lg:sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-6 shadow-sm">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex items-center justify-center gap-2 px-3 py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 border ${activeCategory === cat.id
                  ? "text-primary-foreground border-primary shadow-md"
                  : "bg-secondary text-foreground border-transparent hover:bg-secondary/80 hover:border-primary/30"
                  }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-primary rounded-xl sm:rounded-2xl -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <cat.icon className="w-4 h-4 shrink-0" />
                <span className="text-center leading-tight">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 min-h-[50vh]">
        <div className="container max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={listContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            >
              {/* Search bar, super useful */}
              <motion.div variants={fadeUpVariant} className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={`Search ${currentMenu.title.toLowerCase()}...`}
                    className="w-full px-6 py-4 bg-background border border-border rounded-3xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-lg placeholder:text-muted-foreground transition-all"
                  />
                </div>
              </motion.div>

              <motion.h2 variants={fadeUpVariant} className="text-4xl font-bold text-primary mb-8">
                {currentMenu.title}
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, idx) => (
                    <motion.div
                      variants={fadeUpVariant}
                      key={idx}
                      whileHover={{ scale: 1.03, y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="group relative bg-background border border-border hover:border-primary/40 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col h-full"
                    >
                      {/* Accent line */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                      <div className="flex flex-col h-full">
                        <div className="mb-2">
                          <div className="flex flex-wrap items-center gap-1.5 mb-2">
                            <h3 className="text-lg font-bold text-primary group-hover:text-amber-700 transition-colors leading-tight">
                              {item.name}
                            </h3>
                            {item.popular && (
                              <span className="px-1.5 py-0.5 text-[8px] font-bold bg-amber-500 text-white rounded-full shadow-sm">
                                POPULAR
                              </span>
                            )}
                          </div>
                          <p className="text-[13px] text-muted-foreground leading-snug">
                            {item.description}
                          </p>
                        </div>

                        <div className="mt-auto pt-4 flex flex-col gap-3">
                          <span className="text-xl font-black text-primary">
                            {item.price}
                          </span>
                          <a
                            href={`https://wa.me/254720448662?text=${encodeURIComponent(`Hi Al Yasmin, I would like to order: ${item.name}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="bg-green-600 text-white w-full py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 hover:bg-green-700 hover:shadow-md"
                          >
                            <span>Order Now</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1z" /></svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.p variants={fadeUpVariant} className="text-center py-12 text-muted-foreground">
                    No items found for "{searchTerm}"
                  </motion.p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* The rest of your sections (Notes + CTA) remain exactly the same, they already look great */}
      {/* Notes Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container max-w-3xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="text-3xl font-bold text-primary mb-8"
          >
            Menu Notes
          </motion.h2>
          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            {[
              {
                title: "All Dishes Prepared Fresh",
                desc: "Every meal is prepared to order using authentic Swahili recipes and fresh, locally-sourced ingredients. Prices may vary slightly based on seasonal availability."
              },
              {
                title: "Special Requests",
                desc: "We're happy to accommodate dietary preferences and special requests. Please inform our staff of any allergies or dietary restrictions."
              },
              {
                title: "Group Orders & Catering",
                desc: "Planning a group gathering or event? Contact us at 0720 448662 or via WhatsApp for custom catering packages and group menus."
              }
            ].map((note, idx) => (
              <motion.div variants={fadeUpVariant} key={idx} className="bg-primary/10 rounded-3xl p-8 hover:bg-primary/15 transition-colors">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {note.title}
                </h3>
                <p className="text-muted-foreground">
                  {note.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section, already fire */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Ready to Order?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl opacity-90 max-w-2xl mx-auto"
          >
            Call us, message on WhatsApp, or visit us in person to place your order
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+254720448662"
              className="px-8 py-4 rounded-3xl font-semibold bg-primary-foreground text-primary hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg"
            >
              Call: 0720 448662
            </a>
            <a
              href="https://wa.me/254720448662"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-3xl font-semibold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 text-lg"
            >
              Message on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}