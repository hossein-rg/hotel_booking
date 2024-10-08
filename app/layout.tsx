import './_styles/global.scss';
import { Josefin_Sans } from 'next/font/google';
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
})
import type { Metadata } from "next";
import Header from './_components/Header';
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
      <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>
        <Header />
        <div className='flex-1 px-8 py-12 grid'>
          <main className='max-w-7xl mx-auto w-full'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
