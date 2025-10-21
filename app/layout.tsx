import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
// import Navbar from '@/components/shared/navbar';
// import Footer from '@/components/shared/navbar/footer';
// import WhatsAppButton from '@/components/shared/whatsapp-button';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Society Of St. Vincent de Paul - STAP Legon Conference',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className={`antialiased`}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
        {/* <WhatsAppButton /> */}
      </body>
    </html>
  );
}
