import PhotoRightCTA from "../components/PhotoRightCTA";
import PageHeading from "../components/PageHeading";
import { supplyMonoBold, supplyMonoUltralight } from "../styles/fonts";
import KissingSandwichLogo from "../components/Logos/KissingSandwichLogo";
import Link from "next/link";
import PrimaryButton from "../components/PrimaryButton";

export const metadata = {
  metadataBase: new URL("https://meatcheesebread.com"),
  alternates: {
    canonical: "/catering",
  },
  title: "Catering | Meat Cheese Bread",
  description:
    "Meat Cheese Bread offers catering for you or your group, with a wide range of breakfast and lunch items, salads, drinks, and side dishes.",
  keywords:
    "Portland restaurant, Portland Oregon restaurant, Portland sandwich shop, Portland sandwiches, Meat Cheese Bread, sandwich shop, catering, Portland catering, Portland Oregon catering, Portland lunch, Portland breakfast",
  openGraph: {
    title: "Catering | Meat Cheese Bread",
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
        <div className="flex flex-col text-center p-6 md:p-16 gap-8">
          <PageHeading headingText="Catering" />
          <div
            className={`${supplyMonoUltralight.className} flex flex-col lg:flex-row items-center text-left gap-6 lg:gap-0 w-full`}
          >
            <div className="flex flex-col gap-8 w-full lg:w-1/2 lg:p-12 lg:text-lg">
              <p>
                Have a lot of mouths to feed? We offer catering services for any
                occasion for you, your team, or your workplace.
              </p>
              <p>
                Please take a look at our{" "}
                <span>
                  <Link
                    href="/menu"
                    className={`${supplyMonoBold.className} uppercase hover:text-yellow`}
                  >
                    Current Menu
                  </Link>
                </span>{" "}
                and give us a call when you're ready to order or if you have any
                questions.
              </p>
              <div className="flex flex-row gap-4 items-center mx-auto lg:mx-0">
                <PrimaryButton
                  linkTo="/menu"
                  buttonText="View menu"
                  hoverColor="red"
                />
                <PrimaryButton
                  linkTo="tel:+15032341700"
                  buttonText="Order now"
                  hoverColor="brown"
                />
              </div>
            </div>

            <div className="flex flex-col w-full max-h-[500px] lg:w-1/2 justify-center items-center">
              <KissingSandwichLogo fillColorHash="#000000" />
            </div>
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
