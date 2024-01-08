import Link from "next/link";
import { supplySansBold, supplyMonoRegular } from "../styles/fonts";

export default function TheHeader() {
  const navItems = ["menu", "catering", "about", "location", "gallery"];

  return (
    <header className="flex flex-col border-2 border-black mx-6 mt-6">
      <section className="flex flex-col lg:gap-4 lg:p-6">
        <p className={`${supplyMonoRegular.className} text-center uppercase`}>
          Sunday, January 7th, 2024
        </p>
        <Link href="/">
          <h1 className={`${supplySansBold.className} text-center lg:text-8xl`}>
            Meat Cheese Bread
          </h1>
        </Link>

        <div className={`${supplyMonoRegular.className} flex flex-row`}>
          <p className="w-1/3 uppercase">7am - 3pm Daily</p>
          <p className="w-1/3 flex justify-center uppercase">
            A Portland, Oregon Restaurant
          </p>
          <p className="w-1/3 flex justify-end">503-234-1700</p>
        </div>
      </section>
      <section
        className={`${supplyMonoRegular.className} flex border-t-2 border-black`}
      >
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
    </header>
  );
}
