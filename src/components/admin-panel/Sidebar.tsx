'use client';

import { MdDashboard, MdManageAccounts } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { IoAnalytics, IoSettings } from 'react-icons/io5';
import { RiShoppingCartLine } from 'react-icons/ri';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';

const meunus = [
  {
    title: 'Dashboard',
    icon: <MdDashboard />,
    href: '/admin/dashboard',
  },
  {
    title: 'Products',
    icon: <RiShoppingCartLine />,
    href: '/admin/products',
  },
  {
    title: 'Accounts',
    icon: <MdManageAccounts />,
    href: '#',
  },
  {
    title: 'Transactions',
    icon: <GrTransaction />,
    href: '#',
  },
  {
    title: 'Analytics',
    icon: <IoAnalytics />,
    href: '#',
  },
  {
    title: 'Setting',
    icon: <IoSettings />,
    href: '#',
  },
];

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className='bg-white w-[300px] min-h-screen p-4 shrink-0'>
      <Logo />

      <ul className='space-y-4 mt-6'>
        {meunus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.href}
            className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-white ${
              pathName === menu.href ? 'bg-pink text-white' : 'bg-gray-200'
            }`}
          ></Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
