import PhotoRightCTA from "./components/PhotoRightCTA";
import PhotoLeftCTA from "./components/PhotoLeftCTA";
import DoubleImage from "./components/DoubleImage";
import TripleImage from "./components/TripleImage";
import QuadrupleImage from "./components/QuadrupleImage";
import red from "../../public/images/red.png";
import yellow from "../../public/images/yellow.png";
import brown from "../../public/images/brown.png";
import green from "../../public/images/green.png";

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
      <TripleImage
        photo1={red}
        altText1="red placeholder"
        photo2={yellow}
        altText2="yellow placeholder"
        photo3={brown}
        altText3="brown placeholder"
      />

      <PhotoRightCTA
        heading="Are you hungry yet?"
        linkTo="/menu"
        buttonText="Explore the menu"
        hoverColor="red"
      />

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
