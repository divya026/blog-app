import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ClientProviders from './ClientProviders'; // ✅ Import new client-only wrapper

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders> {/* ✅ All client context logic is now isolated here */}
          <div className="container">
            <div className="wrapper">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
