import PhotoRightCTA from "./components/PhotoRightCTA";
import PhotoLeftCTA from "./components/PhotoLeftCTA";
import DoubleImage from "./components/DoubleImage";
import QuadrupleImage from "./components/QuadrupleImage";
import red from "../../public/images/red.png";
import yellow from "../../public/images/yellow.png";
import brown from "../../public/images/brown.png";
import green from "../../public/images/green.png";
import heroImage from "../../public/images/hero-image.png";
import Image from "next/image";
import KissingSandwichLogo from "./components/Logos/KissingSandwichLogo";

export const metadata = {
  metadataBase: new URL("https://meatcheesebread.com"),
  alternates: {
    canonical: "/",
  },
  title: "Meat Cheese Bread, a Portland, Oregon Restaurant | 503-234-1700",
  description:
    "Meat Cheese Bread, located in close-in southeast Portland, is a sandwich shop that uses fresh, local products of superior quality in a clean and vibrant space.",
  keywords:
    "Portland restaurant, Portland Oregon restaurant, Portland sandwich shop, Portland sandwiches, Meat Cheese Bread, sandwich shop, catering, Portland catering, Portland Oregon catering, Portland lunch, Portland breakfast",
  openGraph: {
    title: "Meat Cheese Bread, a Portland, Oregon Restaurant | 503-234-1700",
    description:
      "Meat Cheese Bread, located in close-in southeast Portland, is a sandwich shop that uses fresh, local products of superior quality in a clean and vibrant space.",
    siteName: "Meat Cheese Bread",
    type: "website",
    locale: "en_US",
    url: "https://meatcheesebread.com",
    images: [
      {
        url: "https://meat-cheese-bread.vercel.app/images/og-image.png",
        alt: "Meat Cheese Bread",
      },
    ],
  },
  images: [
    {
      url: "https://meat-cheese-bread.vercel.app/images/og-image.png",
      alt: "Meat Cheese Bread",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <section className="grid grid-cols-5">
        <div className="col-span-5 md:col-span-3 flex justify-center items-center p-4 md:p-8 md:border-r-2 border-black">
          <h2 className="h-[350px] flex items-center">Hero Text Goes Here.</h2>
        </div>
        <div className="col-span-5 md:col-span-2 flex justify-center items-center  p-4 md:p-8">
          <KissingSandwichLogo fillColorHash="#000000" />
        </div>
      </section>

      <DoubleImage
        photo1={red}
        altText1="red placeholder"
        photo2={yellow}
        altText2="yellow placeholder"
      />

      <PhotoLeftCTA
        heading="Catering an event?"
        linkTo="/catering"
        buttonText="View catering menu"
        hoverColor="yellow"
      />

      <QuadrupleImage
        photo1={red}
        altText1="red placeholder"
        photo2={yellow}
        altText2="yellow placeholder"
        photo3={brown}
        altText3="brown placeholder"
        photo4={green}
        altText4="green placeholder"
      />

      <PhotoRightCTA
        heading="Are you hungry yet?"
        linkTo="/menu"
        buttonText="Explore the menu"
        hoverColor="red"
      />
    </>
  );
}
