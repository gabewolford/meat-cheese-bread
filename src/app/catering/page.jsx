import GetCateringMenu from "../components/GetCateringMenu";
import KissingSandwichLogo from "../components/Logos/KissingSandwichLogo";
import PhotoRightCTA from "../components/PhotoRightCTA";

export const metadata = {
  metadataBase: new URL("https://meatcheesebread.com"),
  alternates: {
    canonical: "/catering",
  },
  title: "Our Catering Menu | Meat Cheese Bread",
  description:
    "Meat Cheese Bread offers catering for you or your group, with a wide range of breakfast and lunch items, salads, drinks, and side dishes.",
  keywords:
    "Portland restaurant, Portland Oregon restaurant, Portland sandwich shop, Portland sandwiches, Meat Cheese Bread, sandwich shop, catering, Portland catering, Portland Oregon catering, Portland lunch, Portland breakfast",
  openGraph: {
    title: "Our Catering Menu | Meat Cheese Bread",
    description:
      "Meat Cheese Bread offers catering for you or your group, with a wide range of breakfast and lunch items, salads, drinks, and side dishes.",
    siteName: "Meat Cheese Bread",
    type: "website",
    locale: "en_US",
    url: "https://meatcheesebread.com/catering",
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

export default function CateringPage() {
  return (
    <>
      <section className="flex flex-col w-full h-fit">
        <div className="flex flex-col text-center p-6 md:p-16 pb-4 md:pb-4 gap-4 relative">
          <GetCateringMenu />
          <div className="hidden md:flex absolute md:top-16 md:right-16 -z-50 w-1/4">
            <KissingSandwichLogo fillColorHash="#D3D3D3" />
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
