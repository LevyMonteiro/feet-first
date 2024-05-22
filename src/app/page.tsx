'use client';
import Banner from '@/components/font-end/Banner';
import Cart from '@/components/font-end/Cart';
import Feature from '@/components/font-end/Feature';
import Hero from '@/components/font-end/Hero';
import Navbar from '@/components/font-end/Navbar';
import TrendingProducts from '@/components/font-end/TrendingProducts';
import { useState } from 'react';

export default function Home() {
  const [showCart, setShowCart] = useState(false);

  return (
    <main>
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Hero />
      <Feature />
      <TrendingProducts />
      <Banner />
    </main>
  );
}
