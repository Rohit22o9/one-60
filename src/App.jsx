import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CoffeeSection from './components/CoffeeSection';
import MenuSection from './components/MenuSection';
import CateringSection from './components/CateringSection';
import KitchenBookingSection from './components/KitchenBookingSection';
import ReservationSection from './components/ReservationSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import LocationHoursSection from './components/LocationHoursSection';
import Footer from './components/Footer';

import DishModal from './components/DishModal';
import CartDrawer from './components/CartDrawer';
import CateringModal from './components/CateringModal';
import KitchenModal from './components/KitchenModal';
import ReservationModal from './components/ReservationModal';

export default function App() {
  // Cart State
  const [cartItems, setCartItems] = useState([
    {
      id: "m6",
      name: "San Daniele Prosciutto & Fior Di Latte Panini",
      price: 18.50,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80",
      selectedAddons: []
    },
    {
      id: "m11",
      name: "Specialty Flat White (Grinders Reserve)",
      price: 5.20,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80",
      selectedAddons: [{ name: "Oat Milk (Oatly Barista)", price: 0.80 }],
      calculatedPrice: 6.00
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modals State
  const [selectedDish, setSelectedDish] = useState(null);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [isCateringModalOpen, setIsCateringModalOpen] = useState(false);
  const [cateringInitialPackage, setCateringInitialPackage] = useState(null);
  const [isKitchenModalOpen, setIsKitchenModalOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (dish) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + (dish.quantity || 1) }
            : item
        );
      }
      return [...prev, { ...dish, quantity: dish.quantity || 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenCateringWithPackage = (pkg) => {
    setCateringInitialPackage(pkg);
    setIsCateringModalOpen(true);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1B18] font-sans flex flex-col selection:bg-[#C26D43] selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationModalOpen(true)}
        onOpenCatering={() => {
          setCateringInitialPackage(null);
          setIsCateringModalOpen(true);
        }}
        onOpenKitchen={() => setIsKitchenModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenReservation={() => setIsReservationModalOpen(true)}
          onOpenCatering={() => {
            setCateringInitialPackage(null);
            setIsCateringModalOpen(true);
          }}
          onOpenKitchen={() => setIsKitchenModalOpen(true)}
        />

        {/* 2. About & Ethos Section */}
        <AboutSection
          onOpenKitchen={() => setIsKitchenModalOpen(true)}
          onOpenCatering={() => {
            setCateringInitialPackage(null);
            setIsCateringModalOpen(true);
          }}
        />

        {/* 3. Specialty Coffee Showcase (Inspired by La Veen & Copia) */}
        <CoffeeSection 
          onSelectCoffee={() => {
            const coffeeItem = {
              id: "m11",
              name: "Specialty Flat White / Latte",
              category: "coffee",
              price: 5.20,
              dietary: ["GF"],
              description: "Crafted with Grinders Reserve single origin espresso and silky microfoam milk.",
              image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
            };
            setSelectedDish(coffeeItem);
          }}
        />

        {/* 4. Interactive All-Day Menu (Inspired by Higher Ground & Copia) */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onSelectDish={(dish) => setSelectedDish(dish)}
        />

        {/* 5. Corporate & Office Catering (Inspired by Basilica Perth & Copia) */}
        <CateringSection
          onOpenCateringWithPackage={handleOpenCateringWithPackage}
        />

        {/* 6. Commercial Kitchen & Venue Hire (Synergy with The Daily Drop) */}
        <KitchenBookingSection
          onOpenKitchen={() => setIsKitchenModalOpen(true)}
        />

        {/* 7. Table Reservation Experience (Like Higher Ground / Resy) */}
        <ReservationSection />

        {/* 8. Atmosphere & Visual Gallery (The Grounds of Alexandria style) */}
        <GallerySection />

        {/* 9. Reviews & Praise */}
        <TestimonialsSection />

        {/* 10. Location, Trading Hours & Transit */}
        <LocationHoursSection />
      </main>

      {/* Footer & VIP Club */}
      <Footer
        onOpenReservation={() => setIsReservationModalOpen(true)}
        onOpenCatering={() => {
          setCateringInitialPackage(null);
          setIsCateringModalOpen(true);
        }}
        onOpenKitchen={() => setIsKitchenModalOpen(true)}
      />

      {/* Floating Action Button (Mobile & Quick Access) */}
      <aside aria-label="Floating quick actions" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <button
          onClick={() => setIsReservationModalOpen(true)}
          className="hidden sm:flex items-center gap-2 px-5 py-3 rounded-full bg-[#181513] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider shadow-2xl hover:bg-[#C26D43] transition-all duration-300 border border-stone-700/50"
        >
          <span>Book a Table</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative p-3.5 rounded-full bg-[#C26D43] text-white shadow-2xl hover:bg-[#a65832] transition-transform hover:scale-105"
          title="Takeaway Bag"
          aria-label="Takeaway Bag"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {totalCartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#181513] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow">
              {totalCartCount}
            </span>
          )}
        </button>
      </aside>

      {/* Modal Dialogs */}
      <DishModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <CateringModal
        isOpen={isCateringModalOpen}
        onClose={() => {
          setIsCateringModalOpen(false);
          setCateringInitialPackage(null);
        }}
        initialPackage={cateringInitialPackage}
      />

      <KitchenModal
        isOpen={isKitchenModalOpen}
        onClose={() => setIsKitchenModalOpen(false)}
      />

      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />

    </div>
  );
}
