import '../app/globals.css';
import Navbar from '../components/Navbar';
import FooterWrapper from '../components/FooterWrap';
import '../styles/Navbar.module.css';

export const metadata = {
  title: 'Shilpa Architects',
  description: 'Shilpa Architects Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <FooterWrapper /> {}
      </body>
    </html>
  );
}

