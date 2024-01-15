import PhotoRightCTA from "../components/PhotoRightCTA";
import { supplyMonoUltralight } from "../styles/fonts";
import JohnLogo from "../components/Logos/JohnLogo";
import DoubleImage from "../components/DoubleImage";
import red from "../../../public/images/red.png";
import yellow from "../../../public/images/yellow.png";

export const metadata = {
  metadataBase: new URL("https://meatcheesebread.com"),
  alternates: {
    canonical: "/about",
  },
  title: "About Our Restaurant | Meat Cheese Bread",
  description:
    "Located in southeast Portland, Oregon, Meat Cheese Bread is a sandwich shop that uses fresh, local products of superior quality in a clean and vibrant space. Open daily.",
  keywords:
    "Portland restaurant, Portland Oregon restaurant, Portland sandwich shop, Portland sandwiches, Meat Cheese Bread, sandwich shop, catering, Portland catering, Portland Oregon catering, Portland lunch, Portland breakfast",
  openGraph: {
    title: "About Our Restaurant | Meat Cheese Bread",
    description:
      "Located in southeast Portland, Oregon, Meat Cheese Bread is a sandwich shop that uses fresh, local products of superior quality in a clean and vibrant space. Open daily.",
    siteName: "Meat Cheese Bread",
    type: "website",
    locale: "en_US",
    url: "https://meatcheesebread.com/about",
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

export default function AboutPage() {
  return (
    <>
      <section className="flex flex-col w-full h-fit">
        <div className="flex flex-col text-center p-6 md:p-16 gap-8">
          <h2 className="text-3xl">About Us</h2>
          <div
            className={`${supplyMonoUltralight.className} flex flex-col lg:flex-row items-center text-left gap-6 w-full`}
          >
            <div className="flex flex-col gap-8 w-full lg:w-1/2 lg:p-12 lg:text-lg">
              <p>
                Located in the Buckman neighborhood of southeast Portland, Meat
                Cheese Bread is a sandwich shop that uses fresh, local products
                of superior quality in a clean and vibrant space. In our open
                kitchen we focus on fresh, high-quality ingredients and intense
                flavors.
              </p>
              <p>
                Using the products of local farmers and ranchers, combined with
                hand-made bread in our creative recipes, our goal is to raise
                the standard of the sandwich in the Northwest while contributing
                to our local community.
              </p>
            </div>
            <div className="flex flex-col w-full max-h-[500px] lg:w-1/2 justify-center items-center">
              <JohnLogo fillColorHash="#000000" />
            </div>
          </div>
        </div>
      </section>

      <DoubleImage
        photo1={red}
        altText1="placeholder"
        photo2={yellow}
        altText2="placeholder"
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
