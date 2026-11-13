export const CAFE_INFO = {
  name: "Cafe One 60",
  tagline: "Specialty Coffee, Artisan Brunch & Corporate Catering",
  address: "160 Murray Street Mall, Perth WA 6000",
  phone: "+61 (08) 9221 1600",
  email: "hello@one60cafe.com.au",
  cateringEmail: "catering@one60cafe.com.au",
  kitchenHireEmail: "kitchen@one60cafe.com.au",
  hours: [
    { days: "Monday – Thursday", time: "7:30 AM – 5:00 PM" },
    { days: "Friday", time: "7:30 AM – 6:00 PM", note: "Extended CBD Hours" },
    { days: "Saturday", time: "7:30 AM – 5:00 PM" },
    { days: "Sunday", time: "8:30 AM – 5:00 PM" },
  ],
  features: [
    "Locally Roasted Specialty Beans (Grinders Partner)",
    "Perth CBD Central Location (Murray St Mall)",
    "All-Day Breakfast & House-Made Crêpes",
    "Gourmet Paninis & Corporate Lunch Platters",
    "Licensed Commercial Kitchen Facility & Hire",
  ]
};

export const MENU_CATEGORIES = [
  { id: "all", label: "Full Menu" },
  { id: "breakfast", label: "All-Day Breakfast & Brunch" },
  { id: "lunch", label: "Paninis & Lunch" },
  { id: "crepes", label: "Artisan Crêpes & Sweets" },
  { id: "coffee", label: "Specialty Coffee & Brews" },
  { id: "beverages", label: "Cold Drinks & Juices" },
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
    description: "Poached free-range WA eggs, tender cider-braised pork belly or Tasmanian smoked salmon, house yuzu-infused hollandaise, toasted artisan brioche with fresh microgreens.",
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
    name: "Wild Mushroom & Truffle Bruschetta",
    category: "breakfast",
    price: 23.50,
    dietary: ["V", "GF Available"],
    description: "Pan-seared field & enoki mushrooms, garlic thyme butter, whipped local goat's curd, soft poached egg, white truffle drizzle on grilled artisanal sourdough.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    popular: false,
    prepTime: "12 min"
  },
  {
    id: "m4",
    name: "The Murray Street Mall Big Breakfast",
    category: "breakfast",
    price: 27.00,
    dietary: ["GF Available"],
    description: "Two free-range eggs your way, smoked streaky bacon, artisanal pork & fennel chipolatas, slow-roasted Roma tomato, grilled halloumi, potato rosti, house relish, rustic sourdough.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "15 min"
  },
  {
    id: "m5",
    name: "Amazonian Acai Super Bowl",
    category: "breakfast",
    price: 19.50,
    dietary: ["VG", "V", "GF", "DF"],
    description: "Organic blended acai, house-baked macadamia granola, fresh strawberries, blueberries, banana, chia seeds, shredded coconut, raw WA wildflower honeycomb drizzle.",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
    popular: false,
    prepTime: "8 min"
  },
  {
    id: "m6",
    name: "San Daniele Prosciutto & Fior Di Latte Panini",
    category: "lunch",
    price: 18.50,
    dietary: [],
    description: "Aged Italian prosciutto, fresh buffalo fior di latte mozzarella, vine-ripened tomatoes, wild baby rocket, house basil pesto, pressed on artisan rosemary focaccia.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "8 min"
  },
  {
    id: "m7",
    name: "Truffle Chicken & Avocado Toasted Focaccia",
    category: "lunch",
    price: 19.00,
    dietary: ["GF Available"],
    description: "Herb-poached free-range chicken breast, mashed avocado, Swiss Gruyère cheese, baby spinach, black truffle aioli, toasted golden on artisan sourdough loaf.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "10 min"
  },
  {
    id: "m8",
    name: "Spiced Pumpkin, Halloumi & Harissa Wrap",
    category: "lunch",
    price: 17.50,
    dietary: ["V", "VG Available"],
    description: "Roasted honey butternut pumpkin, grilled Cypriot halloumi, roasted red peppers, baby spinach, house harissa hummus wrapped in toasted flatbread.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    popular: false,
    prepTime: "8 min"
  },
  {
    id: "m9",
    name: "Traditional French Lemon & Berry Crêpe",
    category: "crepes",
    price: 16.50,
    dietary: ["V"],
    description: "Delicate Parisian style crêpe folded with fresh lemon curd, mixed berry compote, vanilla bean double cream, dusted with powdered sugar.",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "10 min"
  },
  {
    id: "m10",
    name: "Belgian Chocolate & Hazelnut Crêpe",
    category: "crepes",
    price: 18.00,
    dietary: ["V"],
    description: "Warm crêpe filled with rich melted Callebaut Belgian chocolate, roasted toasted hazelnuts, sliced bananas, served with gourmet vanilla gelato.",
    image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "10 min"
  },
  {
    id: "m11",
    name: "Specialty Flat White / Latte / Cappuccino",
    category: "coffee",
    price: 5.20,
    dietary: ["V", "VG Available", "GF"],
    description: "Crafted with Grinders Reserve single origin espresso and silky microfoam milk. Alternative milks: Oatly, Bonsoy, Almond, Coconut available.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "4 min"
  },
  {
    id: "m12",
    name: "Single Origin Cold Drip & Batch Brew",
    category: "coffee",
    price: 6.50,
    dietary: ["VG", "GF", "DF"],
    description: "Slow-extracted over 8 hours using Ethiopian Yirgacheffe washed beans. Notes of bergamot, candied stone fruit, and dark cocoa.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    popular: true,
    prepTime: "3 min"
  },
  {
    id: "m13",
    name: "Ceremonial Uji Matcha Latte",
    category: "coffee",
    price: 6.50,
    dietary: ["V", "VG Available", "GF"],
    description: "Whisked Kyoto ceremonial grade green tea matcha, organic vanilla, steamed oat milk, light dusting of matcha dust.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    popular: false,
    prepTime: "5 min"
  },
  {
    id: "m14",
    name: "Cold-Pressed Perth Sunrise Juice",
    category: "beverages",
    price: 8.50,
    dietary: ["VG", "GF", "DF"],
    description: "Locally sourced Valencia oranges, crisp pink lady apples, fresh carrot, ginger kick, and turmeric extract.",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80",
    popular: false,
    prepTime: "3 min"
  }
];

export const CATERING_PACKAGES = [
  {
    id: "cat-morning",
    name: "Executive Morning Tea Box",
    pricePerPerson: 19.50,
    minPeople: 8,
    badge: "Most Popular for CBD Meetings",
    description: "The ideal start to breakfast meetings, training days, and boardroom discussions across Perth CBD.",
    items: [
      "Mini French butter croissants & almond croissants",
      "House-baked blueberry & dark chocolate muffins",
      "Individual chia & coconut pudding pots with mango puree (GF, VG)",
      "Seasonal Western Australian fresh fruit skewers",
      "Thermos of Grinders batch brew specialty coffee & tea selection"
    ],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cat-sandwich",
    name: "Artisan Sandwich & Panini Boardroom Platter",
    pricePerPerson: 22.00,
    minPeople: 10,
    badge: "CBD Working Lunch Favorite",
    description: "Generous gourmet platters served on rustic wooden presentation boards, wrapped individually or cut into cocktail portions.",
    items: [
      "San Daniele prosciutto, fior di latte & pesto focaccia",
      "Truffle poached chicken, Gruyère & avocado sourdough",
      "Roasted Mediterranean veggie, halloumi & harissa wrap (V)",
      "Smoked Tasmanian salmon, dill cream cheese & caper rye",
      "Gourmet kettle crisps & house pickled cornichons"
    ],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cat-grazing",
    name: "Margaret River Deluxe Grazing Table",
    pricePerPerson: 28.50,
    minPeople: 15,
    badge: "Client Entertaining & Sundowners",
    description: "A lavish showcase of Western Australian artisan charcuterie, award-winning cheeses, and fresh seasonal accompaniments.",
    items: [
      "Margaret River aged cheddar, creamy double brie & Gorgonzola",
      "Italian prosciutto, artisanal salami & mild mortadella",
      "Kalamata olives, stuffed bell peppers & house tomato relish",
      "Dried apricots, fresh figs, grapes & honey-roasted nuts",
      "Artisanal lavosh, sourdough crisps, and seeded crackers"
    ],
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cat-individual",
    name: "Individual Dietary Bento Lunch Boxes",
    pricePerPerson: 21.00,
    minPeople: 6,
    badge: "100% Dietary Compliant",
    description: "Custom-labeled individual eco-boxes designed for seamless corporate lunch distribution with zero cross-contamination.",
    items: [
      "Choice of Gourmet Protein or Vegan Harvest Bowl",
      "Fresh garden greens with balsamic vinaigrette",
      "Artisan dessert bite (GF brownie / vegan raw treat)",
      "Freshly bottled cold-pressed juice or sparkling water",
      "Complete bamboo cutlery & napkin set included"
    ],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  }
];

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
    quote: "Cafe One 60 is my daily sanctuary in the CBD. The Grinders flat white is consistently smooth, and the truffle chicken panini is the best lunch in the Murray St Mall.",
    author: "Jessica M.",
    role: "Senior Partner, St Georges Terrace Legal",
    rating: 5,
    source: "Google Reviews"
  },
  {
    quote: "We ordered the Executive Morning Tea and Grazing Platter for our executive board meeting. The presentation was outstanding and Basilica-level quality, delivered right on time to our office.",
    author: "David K.",
    role: "Operations Director, Resources WA",
    rating: 5,
    source: "Corporate Catering Client"
  },
  {
    quote: "Shaun and Shabnam bring such warmth to Perth CBD. The Parisian style crêpes and all-day breakfast rival Higher Ground Melbourne. An absolute gem.",
    author: "Chloe & Liam R.",
    role: "Food & Travel Bloggers Perth",
    rating: 5,
    source: "Food Guide Review"
  }
];

export const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    caption: "Sunlit Morning Atmosphere",
    category: "ambience"
  },
  {
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
    caption: "Barista Crafted Latte Art",
    category: "coffee"
  },
  {
    url: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=1000&q=80",
    caption: "Signature Yuzu Eggs Benedict",
    category: "food"
  },
  {
    url: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
    caption: "Freshly Pressed Artisan Paninis",
    category: "food"
  },
  {
    url: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1000&q=80",
    caption: "Corporate Boardroom Catering",
    category: "catering"
  },
  {
    url: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=80",
    caption: "Murray Street Mall Promenade Dining",
    category: "ambience"
  }
];

