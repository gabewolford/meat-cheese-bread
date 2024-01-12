import Link from "next/link";

export default function NavLinks() {
  return (
    <nav className="grid grid-cols-2 md:flex md:flex-row w-full text-center">
      <Link
        href="/menu"
        className="col-span-2 md:w-1/5 py-3 md:py-6 text-sm md:text-base uppercase h-full border-b-2 md:border-b-0 md:border-r-2 border-black hover:bg-red hover:text-white transition-colors duration-500"
      >
        Our Menu
      </Link>
      <Link
        href="/catering"
        className="col-span-1 md:w-1/5 py-3 md:py-6 text-sm md:text-base uppercase h-full border-b-2 md:border-b-0 border-r-2 border-black hover:bg-yellow hover:text-white transition-colors duration-500"
      >
        Catering
      </Link>
      <Link
        href="/about"
        className="col-span-1 md:w-1/5 py-3 md:py-6 text-sm md:text-base uppercase h-full border-b-2 md:border-b-0 md:border-r-2 border-black hover:bg-green hover:text-white transition-colors duration-500"
      >
        About
      </Link>
      <Link
        href="/location"
        className="col-span-1 md:w-1/5 py-3 md:py-6 text-sm md:text-base uppercase h-full border-r-2 border-black hover:bg-brown hover:text-white transition-colors duration-500"
      >
        Location
      </Link>
      <Link
        href="/gallery"
        className="col-span-1 md:w-1/5 py-3 md:py-6 text-sm md:text-base uppercase h-full hover:bg-red hover:text-white transition-colors duration-500"
      >
        Gallery
      </Link>
    </nav>
  );
}
