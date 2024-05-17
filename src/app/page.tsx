'use client';
import Navbar from '@/components/font-end/Navbar';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [showCart, setShowCart] = useState(false);

  return (
    <main>
      <Navbar setShowCart={setShowCart} />
    </main>
  );
}
