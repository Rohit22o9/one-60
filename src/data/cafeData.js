export const CAFE_INFO = {
  name: "Cafe One 60",
  shortName: "ONE60",
  tagline: "Where Good Vibes Brew",
  secondaryTagline: "Savor the Flavor, Share the Love",
  address: "160 Murray Street Mall, Perth WA 6000",
  phone: "+61 (08) 9221 1600",
  email: "info@one60cafe.com.au",
  cateringEmail: "catering@one60cafe.com.au",
  kitchenHireEmail: "kitchen@one60cafe.com.au",
  founders: "Shabnam & Shaun",
  hours: [
    { days: "Monday – Thursday", time: "7:30 AM – 5:00 PM" },
    { days: "Friday", time: "7:30 AM – 6:00 PM", note: "Extended CBD Hours" },
    { days: "Saturday", time: "7:30 AM – 5:00 PM" },
    { days: "Sunday", time: "8:30 AM – 5:00 PM" },
  ],
  features: [
    "Australian Roasted Specialty Coffee (Melbourne Roasted, 100% Perth Warmth)",
    "Book Café — A Warm Cultural Corner for Book Lovers",
    "Sibling Duo Founders Shabnam & Shaun",
    "Gourmet Paninis, Artisan Focaccias & French Crêpes",
    "CBD Corporate Office Catering & Boardroom Platters",
    "Licensed Commercial Kitchen Facility & Hire (with The Daily Drop)"
  ]
};

export const MENU_CATEGORIES = [
  { id: "all", label: "Full Menu" },
  { id: "breakfast", label: "Breakfast & Brunch" },
  { id: "lunch", label: "Focaccias, Paninis & Wraps" },
  { id: "salads", label: "Garden Fresh Salad Bowls" },
  { id: "sweets", label: "Muffins, Scrolls & Crêpes" },
  { id: "coffee", label: "Specialty Coffee & Brews" },
];

export const DIETARY_FILTERS = [
  { id: "all", label: "All Dietaries" },
  { id: "GF", label: "Gluten-Free (GF)" },
  { id: "V", label: "Vegetarian (V)" },
  { id: "VG", label: "Vegan (VG)" },
  { id: "DF", label: "Dairy-Free (DF)" },
];

export const MENU_ITEMS = [
  {
    id: "m1",
    name: "One 60 Signature Eggs Benedict",
    category: "breakfast",
    price: 24.50,
    dietary: ["GF Available"],
    description: "Poached free-range eggs, cider-braised pork belly or Tasmanian smoked salmon, house yuzu-infused hollandaise, toasted brioche with fresh microgreens.",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "12-15 min"
  },
  {
    id: "m2",
    name: "Perth Truffle Smashed Avocado",
    category: "breakfast",
    price: 22.00,
    dietary: ["V", "DF Available", "GF Available"],
    description: "Crushed Hass avocado on toasted Margaret River sourdough, Danish whipped feta, heirloom cherry tomatoes, dukkah crunch, pomegranate pearls, cold-pressed truffle oil.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "10 min"
  },
  {
    id: "m3",
    name: "Sunkissed Turkey & Pesto Focaccia",
    category: "lunch",
    price: 18.50,
    dietary: [],
    description: "Roasted tender turkey breast, house basil walnut pesto, sundried tomatoes, melted Swiss cheese, fresh baby spinach on artisan herb focaccia.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "8 min"
  },
  {
    id: "m4",
    name: "San Daniele Prosciutto & Fior Di Latte Panini",
    category: "lunch",
    price: 18.50,
    dietary: [],
    description: "Aged Italian prosciutto, fresh buffalo fior di latte mozzarella, vine-ripened tomatoes, wild rocket, basil pesto on pressed rosemary focaccia.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "8 min"
  },
  {
    id: "m5",
    name: "Creamy Mushroom & Goat's Curd Sourdough",
    category: "lunch",
    price: 19.50,
    dietary: ["V", "GF Available"],
    description: "Pan-roasted field and enoki mushrooms in garlic-thyme white wine reduction, whipped goat's curd, truffle essence on rustic sourdough.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    popular: false,
    prepTime: "10 min"
  },
  {
    id: "m6",
    name: "Strawberry, Kale & Feta Salad",
    category: "salads",
    price: 19.00,
    dietary: ["V", "GF"],
    description: "Fresh baby spinach, shredded kale, sweet Western Australian strawberries, crumbed Greek feta, roasted candied walnuts, poppyseed citrus dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "8 min"
  },
  {
    id: "m7",
    name: "Halloumi Zen Harvest Bowl",
    category: "salads",
    price: 20.50,
    dietary: ["V", "GF"],
    description: "Grilled Cypriot halloumi, crisp Chinese cabbage, crunchy bean sprouts, edamame, roasted sweet pumpkin, toasted sesame ginger vinaigrette.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    popular: false,
    prepTime: "10 min"
  },
  {
    id: "m8",
    name: "Classic Chicken Caesar Salad Bowl",
    category: "salads",
    price: 21.00,
    dietary: ["GF Available"],
    description: "Herb-poached chicken breast, crisp baby cos lettuce, shaved Grana Padano, crispy double-smoked bacon lardons, baby capers, herb croutons, soft boiled egg.",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "8 min"
  },
  {
    id: "m9",
    name: "Traditional French Lemon & Berry Crêpe",
    category: "sweets",
    price: 16.50,
    dietary: ["V"],
    description: "Delicate Parisian style crêpe folded with fresh lemon curd, mixed berry compote, vanilla bean double cream, dusted with powdered sugar.",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "10 min"
  },
  {
    id: "m10",
    name: "House Baked Jumbo Muffins & Pastries",
    category: "sweets",
    price: 7.50,
    dietary: ["V"],
    description: "Freshly baked daily: Blueberry Crumble, Double Chocolate Hazelnut, Raspberry White Chocolate, or Apple & Cinnamon.",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "2 min"
  },
  {
    id: "m11",
    name: "Hazelnut & Raisin Cinnamon Scroll",
    category: "sweets",
    price: 8.50,
    dietary: ["V"],
    description: "Artisan rolled laminated brioche scroll infused with Ceylon cinnamon, plump sultanas, crushed hazelnuts, and vanilla bean glaze.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    popular: false,
    prepTime: "2 min"
  },
  {
    id: "m12",
    name: "Specialty Flat White / Latte / Cappuccino",
    category: "coffee",
    price: 5.20,
    dietary: ["V", "VG Available", "GF"],
    description: "Melbourne-roasted Australian beans extracted by Shaun & Shabnam's barista team. Silky microfoam with local WA dairy or Oatly / Bonsoy.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "4 min"
  },
  {
    id: "m13",
    name: "Single Origin Cold Drip (8-Hour Extraction)",
    category: "coffee",
    price: 6.50,
    dietary: ["VG", "GF", "DF"],
    description: "Slow-extracted over 8 hours using Ethiopian Yirgacheffe washed beans. Notes of bergamot, candied stone fruit, and dark cocoa.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "3 min"
  }
];

export const CATERING_PACKAGES = [
  {
    id: "cat-morning",
    name: "Breakfast & Morning Pastry Platter",
    pricePerPerson: 19.50,
    minPeople: 8,
    badge: "Most Popular for CBD Meetings",
    description: "Straight from One60's catering menu: Fresh croissants, breakfast toasties, and house pastries.",
    items: [
      "Mini Ham & Cheese Croissants (Cheese & Tomato V opt)",
      "Bacon & Egg Breakfast Brioche Rolls with house relish",
      "Assorted Fresh Muffins (Blueberry, Double Choc, Apple Cinnamon)",
      "Artisan Raisin & Hazelnut Scrolls & House Banana Bread",
      "Thermos of Australian roasted batch brew coffee & organic teas"
    ],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cat-sandwich",
    name: "Artisan Focaccia & Panini Platter",
    pricePerPerson: 22.00,
    minPeople: 10,
    badge: "CBD Working Lunch Favorite",
    description: "Generous gourmet platters served on rustic wooden presentation boards, wrapped individually or cocktail-cut.",
    items: [
      "Sunkissed Turkey, Swiss cheese & pesto focaccia",
      "Creamy Mushroom & Truffle Sourdough Toasties (V)",
      "Chicken Avocado & Cajun spiced chicken wraps",
      "San Daniele prosciutto, fior di latte & rocket panini",
      "Gourmet kettle crisps & house pickled cornichons"
    ],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cat-plant",
    name: "Plant-Powered & Dietary Mixed Platter",
    pricePerPerson: 21.50,
    minPeople: 8,
    badge: "100% Vegetarian / Vegan Friendly",
    description: "Delightful meat-free selections prepared with dedicated utensils to prevent cross-contamination.",
    items: [
      "Grilled Cypriot Halloumi & Roasted Pepper Panini (V)",
      "Pesto, Vine Tomato & Fior di Latte Sourdough (V)",
      "Crispy Falafel, Harissa & Hummus flatbread wraps (VG)",
      "Creamy Garlic Mushroom sourdough bites (V)",
      "Fresh seasonal fruit skewers with mint drizzle (VG, GF)"
    ],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cat-grazing",
    name: "Sweet Slice & Afternoon Tea Board",
    pricePerPerson: 16.50,
    minPeople: 10,
    badge: "Afternoon Teas & Celebrations",
    description: "A decadent dessert board featuring One60's signature house slices, brownies, and pastries.",
    items: [
      "Signature Caramel Slice with Belgian chocolate ganache",
      "Fudgy Chocolate Raspberry Brownie bites (GF)",
      "Traditional Carrot Cake with cream cheese frosting",
      "Apple, Cinnamon & Berry Crumble slice",
      "Flourless Orange & Almond cake bites (GF, DF)"
    ],
    image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=800&q=80"
  }
];

export const BOOK_CAFE_INFO = {
  title: "The Book Café at One60",
  subtitle: "A Warm Corner for Book Lovers",
  description: "Inside the cozy and welcoming space of Café ONE60, discover a unique cultural corner where books and coffee come together in perfect harmony. Browse hand-curated novels, design monographs, and Western Australian literature while enjoying your favorite brew.",
  quote: "Take a book, leave a book, or stay awhile and read with a warm flat white.",
  image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
};

export const KITCHEN_FEATURES = [
  {
    title: "Full Commercial Kitchen Specs",
    desc: "Equipped with combi-steam ovens, 6-burner gas cooktops, deep fryers, planetary mixers, salamander grill, and high-capacity stainless prep counters.",
    icon: "Utensils"
  },
  {
    title: "Cold Storage & Dry Pantry",
    desc: "Spacious walk-in coolroom, dedicated freezer space, and secure lockable dry pantry storage for recurring shifts.",
    icon: "Warehouse"
  },
  {
    title: "Specialty Barista Lab & Front-of-House",
    desc: "Commercial 3-group espresso setup, grinders, and fully licensed dining area for tasting sessions, coffee training, and pop-up dinners.",
    icon: "Coffee"
  },
  {
    title: "HACCP & Perth City Council Certified",
    desc: "Fully registered, inspected, and food safety compliant commercial kitchen right in Perth CBD (160 Murray St Mall).",
    icon: "ShieldCheck"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Shabnam greets everyone with such genuine warmth every single morning. You truly feel like family the moment you walk through the doors of One 60.",
    author: "Jessica M.",
    role: "Senior Partner, St Georges Terrace Legal",
    rating: 5,
    source: "Regular Customer"
  },
  {
    quote: "We ordered the Breakfast and Focaccia catering platters for our executive partner meeting. Basilica-level presentation and delicious fresh ingredients delivered right on time.",
    author: "David K.",
    role: "Operations Director, Resources WA",
    rating: 5,
    source: "Corporate Catering Client"
  },
  {
    quote: "Shaun and Shabnam have built something special here. The Book Café corner paired with their Melbourne-roasted flat white makes One60 the best sanctuary in Murray St Mall.",
    author: "Chloe & Liam R.",
    role: "Perth Food & Lifestyle Guides",
    rating: 5,
    source: "Food Guide Review"
  }
];

export const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    caption: "Sunlit Morning Atmosphere at 160 Murray St",
    category: "ambience"
  },
  {
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
    caption: "Barista Crafted Flat White by Shaun & Shabnam",
    category: "coffee"
  },
  {
    url: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=1000&q=80",
    caption: "Signature Yuzu Eggs Benedict",
    category: "food"
  },
  {
    url: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
    caption: "Freshly Pressed Artisan Focaccias",
    category: "food"
  },
  {
    url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
    caption: "The Book Café — Cultural Corner",
    category: "ambience"
  },
  {
    url: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1000&q=80",
    caption: "CBD Corporate Boardroom Catering Platters",
    category: "catering"
  }
];
