'use client';

import Login from '@/components/admin-panel/Login';
import { useAppLector } from '@/redux/hooks';
import { useSession } from 'next-auth/react';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isLoading = useAppLector((store) => store.LoadingReducer);
  const { data: session } = useSession();

  if (!session?.user) {
    return <Login />;
  }

  return <div>layout</div>;
};

export default Layout;
