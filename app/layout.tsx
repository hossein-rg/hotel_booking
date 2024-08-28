import type { Metadata } from "next";
import './_styles/global.scss';
import Logo from "./_components/Logo";
import Navigation from "@/app/_components/Navigation";
export const metadata: Metadata = {
  title: "The Wild Oasis"
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
        <main>
          {children}
        </main>
        <footer>
          Copyright by The Wild Oasis
        </footer>
      </body>
    </html>
  );
}
