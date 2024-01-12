import { supplyMonoRegular, supplyMonoUltralight } from "../styles/fonts";
import NavLinks from "./NavLinks";

export default function TheFooter() {
  return (
    <footer className="border-black w-full mb-4 md:mb-6">
      <div className="mx-4 md:mx-6 border-black border-t-2 border-x-2">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:justify-around md:gap-4 lg:gap-0 uppercase text-sm md:text-base">
          <div className="col-span-1 md:col-span-1 lg:col-span-1 h-full p-4 md:p-6">
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
              <h6 className={`${supplyMonoRegular.className}`}>Call Us</h6>
            </div>
            <a
              href="tel:+15032341700"
              className={`${supplyMonoUltralight.className} hover:underline hover:underline-offset-4`}
            >
              503-234-1700
            </a>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1 h-full p-4 lg:p-6">
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
              <h6 className={`${supplyMonoRegular.className}`}>Email Us </h6>
            </div>
            <a
              href="mailto:meatcheesebread@gmail.com"
              target="_blank"
              className={`${supplyMonoUltralight.className} hover:underline hover:underline-offset-4`}
            >
              meatcheesebread@gmail.com
            </a>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1 h-full p-4 lg:p-6">
            <div className="flex flex-row items-center gap-2 mb-1">
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
              <h6 className={`${supplyMonoRegular.className}`}>Visit Us</h6>
            </div>

            <a
              href="https://www.google.com/maps/dir//Meat+Cheese+Bread,+1406+SE+Stark+St,+Portland,+OR+97214/@45.5191639,-122.6539747,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x5495a0a39d7abf35:0xacb41a5f7075cc7f!2m2!1d-122.6513944!2d45.5191639!3e0?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:underline-offset-4"
            >
              <div className="flex flex-col">
                <p className={`${supplyMonoUltralight.className}`}>
                  1406 SE Stark Street
                </p>
                <p className={`${supplyMonoUltralight.className}`}>
                  Portland, OR 97214
                </p>
              </div>
            </a>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1 h-full p-4 lg:p-6">
            <div className="flex flex-row items-center gap-2 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
                  fill="black"
                />
              </svg>
              <h6 className={`${supplyMonoRegular.className}`}>Follow Us</h6>
            </div>

            <div className="flex flex-col">
              <a
                href="https://www.instagram.com/meatcheesebreadportland"
                target="_blank"
                rel="noopener noreferrer"
                className={`${supplyMonoUltralight.className} hover:underline hover:underline-offset-4`}
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/meatcheesebread"
                target="_blank"
                rel="noopener noreferrer"
                className={`${supplyMonoUltralight.className} hover:underline hover:underline-offset-4`}
              >
                Facebook
              </a>
            </div>
          </div>
        </section>

        <section
          className={`${supplyMonoRegular.className} flex border-y-2 border-black`}
        >
          <NavLinks />
        </section>
        <section
          className={`${supplyMonoRegular.className} flex border-b-2 border-black w-full text-center`}
        >
          <div className={`text-xs w-full py-4 uppercase h-full`}>
            © 2024 Meat Cheese Bread. All Rights Reserved.
          </div>
        </section>
      </div>
    </footer>
  );
}
