'use client';
import Cart from '@/components/font-end/Cart';
import Feature from '@/components/font-end/Feature';
import Hero from '@/components/font-end/Hero';
import Navbar from '@/components/font-end/Navbar';
import { useState } from 'react';

export default function Home() {
  const [showCart, setShowCart] = useState(false);

  return (
    <main>
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Hero />
      <Feature />
    </main>
  );
}
