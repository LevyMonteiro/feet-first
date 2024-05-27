'use client';
import Banner from '@/components/font-end/Banner';
import Cart from '@/components/font-end/Cart';
import Feature from '@/components/font-end/Feature';
import Footer from '@/components/font-end/Footer';
import Hero from '@/components/font-end/Hero';
import Navbar from '@/components/font-end/Navbar';
import TrendingProducts from '@/components/font-end/TrendingProducts';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [showCart, setShowCart] = useState(false);

  return (
    <main>
      <Navbar setShowCart={setShowCart} />
      <AnimatePresence mode='wait'>
        {showCart && <Cart setShowCart={setShowCart} />}
      </AnimatePresence>
      <Hero />
      <Feature />
      <TrendingProducts />
      <Banner />
      <Footer />
    </main>
  );
}
