import Link from "next/link";
import Image from "next/image";
import headerLogo from "../../../public/images/meat-cheese-bread-header-logo.svg";
import { supplyMonoRegular } from "../styles/fonts";
import CurrentDate from "./CurrentDate";

export default function TheHeader() {
  return (
    <header className="flex flex-col border-2 border-black mx-4 mt-4 md:mx-6 md:mt-6">
      <section className="flex flex-col gap-2 lg:gap-6 p-4 lg:p-6">
        <p
          className={`${supplyMonoRegular.className} text-xs lg:text-base text-center uppercase`}
        >
          <CurrentDate />
        </p>
        <Link href="/" className="flex justify-center">
          <h1 className="hidden">Meat Cheese Bread</h1>
          <Image
            src={headerLogo}
            alt="Meat Cheese Bread"
            className="w-full md:w-5/6 mb-1.5"
            priority={true}
          />
        </Link>

        <div
          className={`${supplyMonoRegular.className} grid grid-cols-2 gap-2 md:gap-0 md:flex md:flex-row`}
        >
          <p className="order-2 col-span-1 md:order-1 md:w-1/3 uppercase text-xs lg:text-base">
            7am - 3pm Daily
          </p>
          <h2 className="order-1 mb-2 md:mb-0 col-span-2 md:order-2 md:w-1/3 flex justify-center uppercase text-xs lg:text-base">
            A Portland, Oregon Restaurant
          </h2>
          <a
            href="tel:+15032341700"
            className="order-3 col-span-1 md:order-3 md:w-1/3 flex justify-end text-xs lg:text-base"
          >
            503-234-1700
          </a>
        </div>
      </section>

      <section
        className={`${supplyMonoRegular.className} flex border-t-2 border-black`}
      >
        <nav className="grid grid-cols-2 md:flex md:flex-row w-full text-center">
          <Link
            href="/menu"
            className="col-span-2 md:w-1/5 py-3 md:py-6 text-sm md:text-base uppercase h-full border-b-2 md:border-b-0 md:border-r-2 border-black"
          >
            Menu
          </Link>
          <Link
            href="/catering"
            className="col-span-1 md:w-1/5 py-3 md:py-6 text-sm md:text-base uppercase h-full border-b-2 md:border-b-0 border-r-2 border-black"
          >
            Catering
          </Link>
          <Link
            href="/about"
            className="col-span-1 md:w-1/5 py-3 md:py-6 text-sm md:text-base uppercase h-full border-b-2 md:border-b-0 md:border-r-2 border-black"
          >
            About
          </Link>
          <Link
            href="/location"
            className="col-span-1 md:w-1/5 py-3 md:py-6 text-sm md:text-base uppercase h-full border-r-2 border-black"
          >
            Location
          </Link>
          <Link
            href="/gallery"
            className="col-span-1 md:w-1/5 py-3 md:py-6 text-sm md:text-base uppercase h-full"
          >
            Gallery
          </Link>
        </nav>
      </section>
    </header>
  );
}
