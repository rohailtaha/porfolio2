'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { CloseIcon, HamburgerIcon } from './icons';
import MobileMenu from './MobileMenu';

const borderClasses = ['shadow-sm', 'border-b'];

function Header() {
  const scroll = useRef(0);
  const headerElement = useRef<null | HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!headerElement.current) {
        headerElement.current = document.getElementById('header');
      }
      const header = headerElement.current;
      scroll.current = window.scrollY;
      if (scroll.current === 0) {
        header?.classList.remove(...borderClasses);
      } else {
        header?.classList.add(...borderClasses);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className="fixed w-full py-6 bg-white z-[1] responsive-pad"
    >
      <div className="mx-auto font-medium flex-cb max-content-w text-text-primary">
        <div className="w-full flex-c sm:justify-between md:justify-start gap-x-24">
          <Link href="/" className="text-lg font-bold text-primary">
            Rohail Taha
          </Link>
          <nav className="items-center hidden gap-x-8 sm:flex">
            <Link href="/work">Work</Link>
            <Link href="/#about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <button
          type="button"
          className="sm:hidden"
          aria-label="Toggle Mobile Navigation"
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
        >
          {!isMobileMenuOpen ? <HamburgerIcon /> : <CloseIcon />}
        </button>
        {isMobileMenuOpen && <MobileMenu />}
      </div>
    </header>
  );
}

export default Header;
