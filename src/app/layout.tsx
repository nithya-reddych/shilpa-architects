import '../app/globals.css';
import Navbar from '../components/Navbar';
import '../styles/Navbar.module.css'

export const metadata = {
  title: 'Shilpa Architects',
  description: 'Shilpa Architects Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
