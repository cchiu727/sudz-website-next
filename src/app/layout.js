import { Rubik } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/navbar/Navbar';
// import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const rubik = Rubik({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Sudz Laundry House',
  description: 'Premiere 5 Star Laundry Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik.className}>
      <body>
        <div className="flex-layout">
          <Navbar />
          {/* <Header /> */}
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
