import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className="min-h-screen bg-midnight text-sand">
    <Navbar />
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 lg:px-6 lg:py-14">
      {children}
    </main>
    <Footer />
  </div>
);
