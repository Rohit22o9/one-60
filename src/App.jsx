import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CoffeeSection from './components/CoffeeSection';
import MenuSection from './components/MenuSection';
import CateringSection from './components/CateringSection';
import BookCafeSection from './components/BookCafeSection';
import KitchenBookingSection from './components/KitchenBookingSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import LocationHoursSection from './components/LocationHoursSection';
import Footer from './components/Footer';

import DishModal from './components/DishModal';
import CartDrawer from './components/CartDrawer';
import CateringModal from './components/CateringModal';
import KitchenModal from './components/KitchenModal';

import { takeawayCup, cabinetFocaccias } from './assets/photos';

export default function App() {
  // Cart State
  const [cartItems, setCartItems] = useState([
    {
      id: "m3",
      name: "Sunkissed Turkey & Pesto Focaccia",
      price: 18.50,
      quantity: 1,
      image: cabinetFocaccias,
      selectedAddons: []
    },
    {
      id: "m12",
      name: "Specialty Flat White (ONE60 House Roast)",
      price: 5.20,
      quantity: 2,
      image: takeawayCup,
      selectedAddons: [{ name: "MilkLab Oat Milk", price: 0.80 }],
      calculatedPrice: 6.00
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modals State
  const [selectedDish, setSelectedDish] = useState(null);
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1B18] font-sans flex flex-col selection:bg-[#404D3C] selection:text-white">
      
      {/* Top Navbar with Official ONE60 Logo */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCatering={() => {
          setCateringInitialPackage(null);
          setIsCateringModalOpen(true);
        }}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenCatering={() => {
            setCateringInitialPackage(null);
            setIsCateringModalOpen(true);
          }}
          onOpenKitchen={() => setIsKitchenModalOpen(true)}
        />

        {/* 2. Our Story (Shabnam & Shaun Siblings, Persian Hospitality & Colombian Mural Roots) */}
        <AboutSection
          onOpenKitchen={() => setIsKitchenModalOpen(true)}
          onOpenCatering={() => {
            setCateringInitialPackage(null);
            setIsCateringModalOpen(true);
          }}
        />

        {/* 3. Specialty Coffee (Colombian Wall Mural, 3 Bean Profiles: Hot, Iced, Cold Drip) */}
        <CoffeeSection 
          onSelectCoffee={() => {
            const coffeeItem = {
              id: "m12",
              name: "ONE60 Specialty Flat White",
              category: "coffee",
              price: 5.20,
              dietary: ["GF"],
              description: "Colombian & South American roast extracted by Shaun & Shabnam's team.",
              image: takeawayCup
            };
            setSelectedDish(coffeeItem);
          }}
        />

        {/* 4. Interactive All-Day Menu (Real Cabinet Photos & Prices) */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onSelectDish={(dish) => setSelectedDish(dish)}
        />

        {/* 5. Corporate & Office Catering (Dual Multi-Item Calculator, 3 Days Notice, 7 Days Delivery) */}
        <CateringSection
          onOpenCateringWithPackage={handleOpenCateringWithPackage}
        />

        {/* 6. The Book Café Cultural Corner (Curated by Amir, Persian & International Titles, in front of coffee bar) */}
        <BookCafeSection />

        {/* 7. Commercial Kitchen & Venue Hire (Synergy with The Daily Drop) */}
        <KitchenBookingSection
          onOpenKitchen={() => setIsKitchenModalOpen(true)}
        />

        {/* 8. Visual Gallery & Atmosphere */}
        <GallerySection />

        {/* 9. Reviews & Community Praise (Google Reviews) */}
        <TestimonialsSection />

        {/* 10. Location, Trading Hours & Transit */}
        <LocationHoursSection />
      </main>

      {/* Footer & VIP Club */}
      <Footer
        onOpenCatering={() => {
          setCateringInitialPackage(null);
          setIsCateringModalOpen(true);
        }}
        onOpenKitchen={() => setIsKitchenModalOpen(true)}
      />

      {/* Floating Action Button (Cart Only — Table Booking REMOVED) */}
      <aside aria-label="Takeaway quick bag" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative p-4 rounded-full bg-[#404D3C] text-white shadow-2xl hover:bg-[#2f392c] transition-all hover:scale-105 cursor-pointer"
          title="Takeaway Bag"
          aria-label="Takeaway Bag"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {totalCartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-400 text-stone-900 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow">
              {totalCartCount}
            </span>
          )}
        </button>
      </aside>

      {/* Modals */}
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

    </div>
  );
}
