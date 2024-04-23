import GetCurrentMenu from "../components/GetCurrentMenu";
import KissingSandwichLogo from "../components/Logos/KissingSandwichLogo";
import PhotoRightCTA from "../components/PhotoRightCTA";

export const metadata = {
  metadataBase: new URL("https://meatcheesebread.com"),
  alternates: {
    canonical: "/menu",
  },
  title: "Our Menu | Meat Cheese Bread",
  description:
    "Meat Cheese Bread in Portland, Oregon, offers a daily menu of tasty breakfast and lunch items, drinks, salads, and side dishes.",
  keywords:
    "Portland restaurant, Portland Oregon restaurant, Portland sandwich shop, Portland sandwiches, Meat Cheese Bread, sandwich shop, catering, Portland catering, Portland Oregon catering, Portland lunch, Portland breakfast",
  openGraph: {
    title: "Our Menu | Meat Cheese Bread",
    description:
      "Meat Cheese Bread, located in close-in southeast Portland, is a sandwich shop that uses fresh, local products of superior quality in a clean and vibrant space.",
    siteName: "Meat Cheese Bread",
    type: "website",
    locale: "en_US",
    url: "https://meatcheesebread.com/menu",
    images: [
      {
        url: "https://meatcheesebread.com/images/og-image.png",
        alt: "Meat Cheese Bread",
      },
    ],
  },
  images: [
    {
      url: "https://meatcheesebread.com/images/og-image.png",
      alt: "Meat Cheese Bread",
    },
  ],
};

export default function MenuPage() {
  return (
    <>
      <section className="flex flex-col w-full h-fit">
        <div className="flex flex-col text-center p-6 md:p-16 pb-4 md:pb-4 gap-4 relative">
          <GetCurrentMenu />
          <div className="hidden xl:flex absolute md:top-16 md:right-16 -z-50 w-1/4">
            <KissingSandwichLogo fillColorHash="#000000" />
          </div>
        </div>
      </section>

      <PhotoRightCTA
        heading="Ready to order?"
        linkTo="tel:+15032341700"
        buttonText="Give us a call"
        hoverColor="green"
      />
    </>
  );
}
