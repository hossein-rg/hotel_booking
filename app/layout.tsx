import './_styles/global.scss';
import Logo from "./_components/Logo";
import Navigation from "@/app/_components/Navigation";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    template: '%s The Wild Oasis',
    default: 'Welcome The Wild Oasis'
  },
  description: 'Luxurious cabin hotel'
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main className='min-h-screen'>
          {children}
        </main>
        <footer>
          Copyright by The Wild Oasis
        </footer>
      </body>
    </html>
  );
}
