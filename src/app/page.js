import PhotoRightCTA from "./components/PhotoRightCTA";
import PhotoLeftCTA from "./components/PhotoLeftCTA";
import DoubleImage from "./components/DoubleImage";
import QuadrupleImage from "./components/QuadrupleImage";
import KissingSandwichLogo from "./components/Logos/KissingSandwichLogo";
import { headlineOutline, headlineShadow } from "./styles/fonts";
import PrimaryButton from "./components/PrimaryButton";

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
        <div className="col-span-5 md:col-span-3 flex flex-col gap-4 justify-center p-8 lg:p-16 border-b-2 md:border-b-0 md:border-r-2 border-black">
          <h2
            className={`${headlineOutline.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}
            style={{ lineHeight: "140%" }}
          >
            Slinging fancy sandwiches on Stark St since{" "}
            <span className={`${headlineShadow.className}`}>&nbsp;2001</span>
          </h2>
          <PrimaryButton
            linkTo="/menu"
            hoverColor="red"
            buttonText="View our menu"
          />
        </div>
        <div className="col-span-5 md:col-span-2 flex justify-center items-center  p-4 md:p-8">
          <KissingSandwichLogo fillColorHash="#000000" />
        </div>
      </section>

      {/* <DoubleImage
        photo1={red}
        altText1="red placeholder"
        photo2={yellow}
        altText2="yellow placeholder"
      /> */}

      {/* <QuadrupleImage
        photo1={red}
        altText1="red placeholder"
        photo2={yellow}
        altText2="yellow placeholder"
        photo3={brown}
        altText3="brown placeholder"
        photo4={green}
        altText4="green placeholder"
      /> */}

      <PhotoLeftCTA
        heading="Catering an event?"
        linkTo="/catering"
        buttonText="View catering menu"
        hoverColor="yellow"
      />
    </>
  );
}
