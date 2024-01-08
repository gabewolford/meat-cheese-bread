import Link from "next/link";

export default function TheFooter() {
  const navItems = ["menu", "catering", "about", "location", "gallery"];

  return (
    <footer className="flex border-t-2 border-black">
      <section className="flex flex-row w-full">
        <nav className="flex w-full text-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={`/${item}`}
              className={`w-1/5 py-6 uppercase h-full ${
                index < 4 ? "border-r-2 border-black" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>
      </section>
    </footer>
  );
}
