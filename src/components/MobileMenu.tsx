import Link from 'next/link';

export default function MobileMenu() {
  return (
    <div className="absolute top-[100%] sm:hidden responsive-pad pb-6 shadow-md left-0 right-0 bg-white">
      <nav className="grid divide-y">
        <Link className="py-4" href="/work">
          Work
        </Link>
        <Link className="py-4" href="/#about">
          About
        </Link>
        <Link className="py-4" href="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}
