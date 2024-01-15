import PhotoRightCTA from "../components/PhotoRightCTA";
import {
  supplyMonoUltralight,
  supplyMonoRegular,
  supplySansRegular,
  supplySansMedium,
} from "../styles/fonts";
import DoubleImage from "../components/DoubleImage";
import red from "../../../public/images/red.png";
import yellow from "../../../public/images/yellow.png";

export const metadata = {
  metadataBase: new URL("https://meatcheesebread.com"),
  alternates: {
    canonical: "/location",
  },
  title: "Our Location | Meat Cheese Bread",
  description:
    "Meat Cheese Bread is located at 1406 SE Stark in Portland, Oregon. Phone us at 503-234-1700.",
  keywords:
    "Portland restaurant, Portland Oregon restaurant, Portland sandwich shop, Portland sandwiches, Meat Cheese Bread, sandwich shop, catering, Portland catering, Portland Oregon catering, Portland lunch, Portland breakfast",
  openGraph: {
    title: "About Our Restaurant | Meat Cheese Bread",
    description:
      "Meat Cheese Bread is located at 1406 SE Stark in Portland, Oregon. Phone us at 503-234-1700.",
    siteName: "Meat Cheese Bread",
    type: "website",
    locale: "en_US",
    url: "https://meatcheesebread.com/location",
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

export default function LocationPage() {
  return (
    <>
      <section className="flex flex-col w-full h-fit">
        <div className="flex flex-col text-center p-6 md:p-16 gap-8">
          <h2 className="text-3xl">Our Location</h2>
          <div
            className={`flex flex-col lg:flex-row items-center text-left gap-6 w-full`}
          >
            <div className="flex flex-col w-full lg:h-[450px] lg:w-1/2 lg:px-12 justify-around gap-6 lg:gap-0">
              <div className="flex flex-col gap-2 text-xl">
                <div className="flex flex-row items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5ZM12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2V2ZM12 4C10.6739 4 9.40215 4.52678 8.46447 5.46447C7.52678 6.40215 7 7.67392 7 9C7 10 7 12 12 18.71C17 12 17 10 17 9C17 7.67392 16.4732 6.40215 15.5355 5.46447C14.5979 4.52678 13.3261 4 12 4V4Z"
                      fill="black"
                    />
                  </svg>
                  <h6
                    className={`${supplyMonoRegular.className} uppercase text-base`}
                  >
                    Visit Us
                  </h6>
                </div>

                <div
                  className={`flex flex-col text-3xl md:text-4xl xl:text-5xl gap-1 ${supplySansMedium.className} uppercase`}
                >
                  <p>1406 SE Stark St</p>
                  <p>Portland, OR 97214</p>
                </div>

                <a
                  href="https://www.google.com/maps/dir//Meat+Cheese+Bread,+1406+SE+Stark+St,+Portland,+OR+97214/@45.5191639,-122.6539747,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x5495a0a39d7abf35:0xacb41a5f7075cc7f!2m2!1d-122.6513944!2d45.5191639!3e0?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${supplyMonoRegular.className} bg-black min-w-fit max-w-fit p-4 hover:bg-green hover:scale-105 transition-color duration-500 text-white uppercase`}
                >
                  Get Directions
                </a>
              </div>

              <div className="flex flex-col gap-6 text-lg">
                <div className="h-full">
                  <div className="flex flex-row items-center gap-2 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.2652 15.5 20.5196 15.6054 20.7071 15.7929C20.8946 15.9804 21 16.2348 21 16.5V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21C15.4913 21 11.1673 19.2089 7.97918 16.0208C4.79107 12.8327 3 8.50868 3 4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H7.5C7.76522 3 8.01957 3.10536 8.20711 3.29289C8.39464 3.48043 8.5 3.73478 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                        fill="black"
                      />
                    </svg>
                    <h6 className={`${supplyMonoRegular.className} uppercase`}>
                      Call Us
                    </h6>
                  </div>
                  <a
                    href="tel:+15032341700"
                    className={`${supplyMonoUltralight.className} hover:underline hover:underline-offset-4`}
                  >
                    503-234-1700
                  </a>
                </div>
                <div className="h-full">
                  <div className="flex flex-row items-center gap-2 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                        fill="black"
                      />
                    </svg>
                    <h6 className={`${supplyMonoRegular.className} uppercase`}>
                      Email Us{" "}
                    </h6>
                  </div>
                  <a
                    href="mailto:meatcheesebread@gmail.com"
                    target="_blank"
                    className={`${supplyMonoUltralight.className} uppercase hover:underline hover:underline-offset-4`}
                  >
                    meatcheesebread@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full h-[450px] lg:w-1/2 justify-center items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5486451054326!2d-122.65397468868652!3d45.51916387095428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0a39d7abf35%3A0xacb41a5f7075cc7f!2sMeat%20Cheese%20Bread!5e0!3m2!1sen!2sus!4v1705278197919!5m2!1sen!2sus"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
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
