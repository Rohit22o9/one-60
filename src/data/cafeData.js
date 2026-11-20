import {
  takeawayCup,
  cateringQuad,
  cateringSliders,
  cateringWraps,
  cateringFocaccia,
  cateringPastry,
  coffeeBarista,
  icedCoffee,
  dishEggsBenedict,
  dishSmashedAvo,
  dishHalloumi,
  dishSpread,
  cabinetFocaccias,
  cabinetSweets,
  bookCafeNook
} from '../assets/photos';

export const CAFE_INFO = {
  name: "Cafe One 60",
  shortName: "ONE60",
  tagline: "Where Good Vibes Brew",
  secondaryTagline: "Savor the Flavor, Share the Love",
  address: "160 Murray Street Mall, Perth WA 6000",
  phone: "+61 (08) 9221 1600",
  mobilePhone: "0400 160 160",
  email: "info@one60cafe.com.au",
  cateringEmail: "catering@one60cafe.com.au",
  kitchenHireEmail: "kitchen@one60cafe.com.au",
  founders: "Shabnam & Shaun",
  hours: [
    { days: "Monday – Thursday", time: "7:30 AM – 5:00 PM" },
    { days: "Friday", time: "7:30 AM – 6:00 PM", note: "Extended CBD Hours" },
    { days: "Saturday", time: "7:30 AM – 5:00 PM" },
    { days: "Sunday", time: "8:30 AM – 5:00 PM", note: "Open 7 Days & Catering Every Day" },
  ],
  features: [
    "Colombian Coffee Heritage & Feature Wall Story (Blossom to Roast)",
    "Specialty Beans for Hot Coffee, Iced Coffee & Cold Brew",
    "Sibling Duo Founders Shabnam & Shaun (Persian & International Warmth)",
    "The Book Café — Curated by Amir (Persian, Bilingual & International)",
    "CBD Corporate Office Catering (Delivered 7 Days with 3 Days Notice)",
    "Licensed Commercial Kitchen Facility & Hire (with The Daily Drop)"
  ]
};

export const MENU_CATEGORIES = [
  { id: "all", label: "Full Menu" },
  { id: "coffee", label: "Specialty Coffee & Brews" },
  { id: "breakfast", label: "Breakfast & Brunch" },
  { id: "lunch", label: "Focaccias, Paninis & Wraps" },
  { id: "sweets", label: "Muffins, Pastries & Sweets" },
  { id: "salads", label: "Fresh Garden Bowls" },
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
    description: "Poached free-range eggs, cider-braised pork belly or Tasmanian smoked salmon, house yuzu hollandaise, toasted brioche with microgreens.",
    image: dishEggsBenedict,
    popular: true,
    prepTime: "12-15 min"
  },
  {
    id: "m2",
    name: "Perth Smashed Avocado & Feta",
    category: "breakfast",
    price: 22.00,
    dietary: ["V", "DF Available", "GF Available"],
    description: "Crushed Hass avocado on toasted Margaret River sourdough, Danish whipped feta, heirloom cherry tomatoes, dukkah crunch, pomegranate pearls.",
    image: dishSmashedAvo,
    popular: true,
    prepTime: "10 min"
  },
  {
    id: "m_halloumi",
    name: "Grilled Halloumi & Poached Eggs Sourdough",
    category: "breakfast",
    price: 23.00,
    dietary: ["V", "GF Available"],
    description: "Golden grilled halloumi steaks, wilted baby spinach, two soft poached eggs, house tomato relish and balsamic drizzle on artisan sourdough.",
    image: dishHalloumi,
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
    image: cabinetFocaccias,
    popular: true,
    prepTime: "5-8 min"
  },
  {
    id: "m4",
    name: "San Daniele Prosciutto & Fior Di Latte Panini",
    category: "lunch",
    price: 18.50,
    dietary: [],
    description: "Aged Italian prosciutto, fresh buffalo fior di latte mozzarella, vine-ripened tomatoes, wild rocket, basil pesto on pressed rosemary focaccia.",
    image: cabinetFocaccias,
    popular: true,
    prepTime: "5-8 min"
  },
  {
    id: "m_wraps",
    name: "ONE60 Gourmet Wraps (Cajun Chicken / Tuna & Egg / Avo)",
    category: "lunch",
    price: 17.90,
    dietary: ["DF Available"],
    description: "Freshly prepared every morning in our cabinet: Cajun spiced grilled chicken, Chicken Avocado, or Tuna & boiled egg with garden greens.",
    image: cateringWraps,
    popular: true,
    prepTime: "Ready to Grab"
  },
  {
    id: "m_bacon_roll",
    name: "CBD Bacon & Double Egg Brioche Roll",
    category: "breakfast",
    price: 16.90,
    dietary: [],
    description: "Double smoked bacon, two fried free-range eggs, melted cheddar, house tomato bourbon relish on a toasted brioche bun.",
    image: dishSpread,
    popular: true,
    prepTime: "6-8 min"
  },
  {
    id: "m10",
    name: "House Baked Jumbo Muffins (Assorted)",
    category: "sweets",
    price: 5.50,
    dietary: ["V"],
    description: "Freshly baked in-house daily: Blueberry Crumble, Double Chocolate Hazelnut, Apple Cinnamon, and Raspberry White Chocolate.",
    image: cabinetSweets,
    popular: true,
    prepTime: "Ready to Grab"
  },
  {
    id: "m_apple_pastry",
    name: "Apple, Raisin & Vanilla Custard Pastry Slice",
    category: "sweets",
    price: 6.80,
    dietary: ["V"],
    description: "Flaky European puff pastry layered with spiced caramelized apples, plump sultanas, and rich velvety vanilla bean custard.",
    image: cateringPastry,
    popular: false,
    prepTime: "Ready to Grab"
  },
  {
    id: "m12",
    name: "House Flat White / Latte / Cappuccino (Hot Coffee Blend)",
    category: "coffee",
    price: 5.20,
    dietary: ["V", "VG Available", "GF"],
    description: "Our signature Colombian & South American roast: Rich dark chocolate, roasted hazelnut, caramel fudge crema. Steamed with local WA dairy or MilkLab oat, almond & soy.",
    image: takeawayCup,
    popular: true,
    prepTime: "3-4 min"
  },
  {
    id: "m_iced",
    name: "Signature Iced Coffee & Cold Brew with Citrus Garnish",
    category: "coffee",
    price: 6.80,
    dietary: ["VG", "GF", "DF"],
    description: "Brewed specifically with our single-origin bright roast bean. Crisp notes of bergamot, peach, and cocoa, served over crystal ice with fresh orange peel.",
    image: icedCoffee,
    popular: true,
    prepTime: "2-3 min"
  }
];

// REAL CATERING PLATTERS FOR THE MULTI-ITEM CALCULATOR
export const CATERING_PLATTERS = [
  {
    id: "plat-focaccia",
    name: "Gourmet Artisan Focaccia & Panini Platter",
    unitPrice: 110.00,
    servingsPerPlatter: 6, // Feeds approx 6 people
    servesText: "Feeds 5–7 guests (cocktail cut into 12 generous portions)",
    description: "Handmade focaccias: Turkey Pesto, Prosciutto Fior Di Latte, Grilled Veggie & Halloumi, and Salami Provolone.",
    image: cateringFocaccia,
    category: "lunch"
  },
  {
    id: "plat-sliders",
    name: "Signature Mini Brioche & Charcoal Slider Box",
    unitPrice: 125.00,
    servingsPerPlatter: 8,
    servesText: "Feeds 6–8 guests (16 handcrafted sliders)",
    description: "Deluxe bite-sized sliders on golden brioche and activated charcoal buns: Angus beef, pulled chicken, and halloumi.",
    image: cateringSliders,
    category: "lunch"
  },
  {
    id: "plat-wraps",
    name: "ONE60 Fresh Wrap Pinwheel Platter",
    unitPrice: 95.00,
    servingsPerPlatter: 6,
    servesText: "Feeds 5–7 guests (16 pinwheel portions)",
    description: "Soft tortilla wraps: Cajun spiced chicken, Chicken Avocado, and Tuna with boiled egg & crispy baby greens.",
    image: cateringWraps,
    category: "lunch"
  },
  {
    id: "plat-fruit",
    name: "Seasonal Rainbow Fruit & Berry Platter",
    unitPrice: 75.00,
    servingsPerPlatter: 8,
    servesText: "Feeds 8–10 guests (GF, VG)",
    description: "Vibrant freshly sliced WA seasonal fruits: rockmelon, watermelon, pineapple, kiwi, grapes, and fresh berries with mint.",
    image: cateringQuad,
    category: "breakfast"
  },
  {
    id: "plat-pastry",
    name: "Artisan Sweet Pastry & Slice Dessert Box",
    unitPrice: 85.00,
    servingsPerPlatter: 8,
    servesText: "Feeds 8–10 guests (20 sweet bites)",
    description: "Apple raisin custard pastries, house baked muffin cuts, chocolate walnut brownies, and signature caramel slice fingers.",
    image: cateringPastry,
    category: "sweets"
  },
  {
    id: "plat-coffee-thermos",
    name: "Specialty Batch Brew Coffee Airpot (2.5L)",
    unitPrice: 45.00,
    servingsPerPlatter: 10,
    servesText: "Serves 10–12 cups of hot specialty coffee",
    description: "Thermal pump airpot of Colombian house blend filter coffee with eco cups, lids, sugar, and milk flasks (dairy & oat).",
    image: takeawayCup,
    category: "beverage"
  }
];

export const CATERING_PACKAGES = [
  {
    id: "cat-morning",
    name: "Breakfast & Morning Pastry Platter",
    pricePerPerson: 19.50,
    minPeople: 8,
    badge: "Most Popular for CBD Meetings",
    description: "Fresh croissants, breakfast toasties, mini muffins, and seasonal fruit cuts delivered warm.",
    items: [
      "Mini Ham & Cheese Croissants (Cheese & Tomato V opt)",
      "Bacon & Egg Breakfast Brioche Rolls with house relish",
      "Assorted Fresh Muffins (Blueberry, Double Choc, Apple Cinnamon)",
      "Artisan Raisin & Hazelnut Scrolls & House Banana Bread",
      "Airpot of Colombian roast batch brew coffee & organic teas"
    ],
    image: cateringQuad
  },
  {
    id: "cat-sandwich",
    name: "Artisan Focaccia & Slider Boardroom Feast",
    pricePerPerson: 22.00,
    minPeople: 10,
    badge: "CBD Working Lunch Favorite",
    description: "A combination of our gourmet artisan focaccias, mini brioche sliders, and fresh wrap pinwheels.",
    items: [
      "Sunkissed Turkey, Swiss cheese & pesto focaccia cuts",
      "Mini Angus beef & pulled chicken brioche sliders",
      "Chicken Avocado & Cajun spiced chicken wraps",
      "San Daniele prosciutto, fior di latte & rocket panini",
      "Gourmet kettle crisps & house pickled cornichons"
    ],
    image: cateringSliders
  },
  {
    id: "cat-plant",
    name: "Plant-Powered & Vegetarian Platter",
    pricePerPerson: 21.50,
    minPeople: 8,
    badge: "100% Vegetarian / Vegan Friendly",
    description: "Delightful meat-free selections prepared with dedicated utensils to prevent cross-contamination.",
    items: [
      "Grilled Cypriot Halloumi & Roasted Pepper Panini (V)",
      "Pesto, Vine Tomato & Fior di Latte Sourdough (V)",
      "Crispy Falafel, Harissa & Hummus flatbread wraps (VG)",
      "Seasonal rainbow fruit platter with mint garnish (VG, GF)",
      "Apple, Raisin & Custard pastry slice cuts (V)"
    ],
    image: cateringQuad
  },
  {
    id: "cat-grazing",
    name: "Sweet Slice & Afternoon Tea Box",
    pricePerPerson: 16.50,
    minPeople: 10,
    badge: "Afternoon Teas & Celebrations",
    description: "A decadent dessert board featuring One60's signature house slices, brownies, and pastries.",
    items: [
      "Flaky Apple Raisin & Custard European Pastry Bites",
      "Fudgy Chocolate Raspberry Brownie bites (GF)",
      "Traditional Carrot Cake with cream cheese frosting",
      "House baked muffin quarters (Blueberry & Choc)",
      "Flourless Orange & Almond cake bites (GF, DF)"
    ],
    image: cateringPastry
  }
];

export const BOOK_CAFE_INFO = {
  title: "The Book Café at One60",
  curator: "Curated with Passion by Amir",
  location: "Dedicated Corner Right in Front of the Coffee Machine",
  description: "Inside the warm, botanical atmosphere of ONE60, discover a cultural sanctuary where literature meets specialty coffee. Curated by Shabnam's husband Amir, our collection spans Persian classics, bilingual translations, contemporary international fiction, and philosophy.",
  quote: "Take a book, trade a book, or stay awhile with a velvety flat white.",
  image: bookCafeNook,
  featuredBooks: [
    { title: "Rumi: The Book of Love", author: "Coleman Barks Translation", tag: "Persian & Bilingual Poetry" },
    { title: "The Blind Owl (Bof-e Koor)", author: "Sadegh Hedayat", tag: "Modern International Classic" },
    { title: "Cloudstreet", author: "Tim Winton", tag: "Western Australian Literature" },
    { title: "The World Atlas of Coffee", author: "James Hoffmann", tag: "Coffee Culture & Terroir" }
  ]
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
    quote: "Shabnam greets everyone with such genuine warmth every single morning. The coffee is unmatched in the CBD, and the Colombian wall mural adds such a peaceful green vibe.",
    author: "Jessica M.",
    role: "Senior Partner, St Georges Terrace Legal",
    rating: 5,
    source: "Google Verified Review"
  },
  {
    quote: "We ordered catering platters for 35 people for our boardroom workshop. The mini sliders and fresh wrap boxes were exceptional. Arrived right on time and beautifully presented.",
    author: "David K.",
    role: "Operations Director, Resources WA",
    rating: 5,
    source: "Google Verified Review"
  },
  {
    quote: "Shaun and Shabnam have created something special. The Book Café corner right in front of the coffee machine is a brilliant touch. Outstanding flat white and friendly service.",
    author: "Chloe & Liam R.",
    role: "Perth CBD Regulars",
    rating: 5,
    source: "Google Verified Review"
  }
];

export const GALLERY_IMAGES = [
  {
    url: dishSpread,
    caption: "Freshly Prepared Artisan Food at 160 Murray St",
    category: "food"
  },
  {
    url: coffeeBarista,
    caption: "Barista Extraction on our Commercial Espresso Bar",
    category: "coffee"
  },
  {
    url: cateringQuad,
    caption: "Corporate Catering Platters Ready for Delivery",
    category: "catering"
  },
  {
    url: dishEggsBenedict,
    caption: "Signature Poached Eggs & Yuzu Hollandaise",
    category: "food"
  },
  {
    url: icedCoffee,
    caption: "Single Origin Iced Coffee with Orange Garnish",
    category: "coffee"
  },
  {
    url: bookCafeNook,
    caption: "The Book Café Corner in front of the coffee bar",
    category: "ambience"
  }
];
