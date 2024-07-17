"use client";

import { usePathname } from 'next/navigation';
import Footer from './Footer';

const FooterWrap = () => {
  const pathname = usePathname();

  const ShowFooter = pathname !== '/' && pathname !== '/contact';

  return (
    <>
      {ShowFooter && <Footer />}
    </>
  );
};

export default FooterWrap;
