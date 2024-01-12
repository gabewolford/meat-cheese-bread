import PrimaryButton from "./PrimaryButton";
import logo from "../../../public/images/meat-cheese-bread-logo.png";
import { supplySansMedium } from "../styles/fonts";
import Image from "next/image";

export default function PhotoLeftCTA({
  heading,
  linkTo,
  buttonText,
  hoverColor,
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-6">
      <div className="order-1 md:order-2 col-span-1 md:col-span-4 py-12 px-4 md:px-6 md:border-l-2 border-t-2 border-black flex flex-col justify-center items-center gap-4 md:gap-6">
        <h5 className={`${supplySansMedium.className} text-3xl lg:text-4xl`}>
          {heading}
        </h5>
        <PrimaryButton
          linkTo={linkTo}
          buttonText={buttonText}
          hoverColor={hoverColor}
        />
      </div>
      <div className="order-2 md:order-1 col-span-1 md:col-span-2 flex justify-center items-center border-t-2 border-black p-4 md:p-6">
        <Image src={logo} alt="Meat Cheese Bread" />
      </div>
    </section>
  );
}
