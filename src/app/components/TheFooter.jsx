import Link from "next/link";
import { supplyMonoRegular, supplyMonoUltralight } from "../styles/fonts";

export default function TheFooter() {
  const navItems = ["menu", "catering", "about", "location", "gallery"];

  return (
    <footer className="absolute bottom-0 border-black w-full mb-6">
      <div className="mx-6 border-black border-t-2 border-x-2">
        <section className="flex flex-row w-full uppercase">
          <div className="flex flex-row w-full">
            <div className="flex flex-row w-3/5 p-6 border-r-2 border-black">
              <div className="flex flex-col gap-6 w-full">
                <div>
                  <h4
                    className={`${supplyMonoRegular.className} mb-1 font-medium uppercase`}
                  >
                    Call Us
                  </h4>
                  <div className="flex flex-row gap-2">
                    <p className={`${supplyMonoUltralight.className}`}>
                      503-234-1700
                    </p>
                  </div>
                </div>
                <div>
                  <h4
                    className={`${supplyMonoRegular.className} mb-1 font-medium uppercase`}
                  >
                    Email Us
                  </h4>
                  <div className="flex flex-row gap-2">
                    <p
                      className={`${supplyMonoUltralight.className} uppercase`}
                    >
                      meatcheesebread@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <h4
                  className={`${supplyMonoRegular.className} mb-1 font-medium uppercase`}
                >
                  Follow Us
                </h4>
                <div
                  className={`${supplyMonoUltralight.className} flex flex-row gap-2`}
                >
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/meatcheesebreadportland/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2V2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7V7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                        fill="black"
                      />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/meatcheesebread/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2.04004C6.5 2.04004 2 6.53004 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85004C10.44 7.34004 11.93 5.96004 14.22 5.96004C15.31 5.96004 16.45 6.15004 16.45 6.15004V8.62004H15.19C13.95 8.62004 13.56 9.39004 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3856 19.6099 18.5701C21.1576 16.7546 22.0053 14.4457 22 12.06C22 6.53004 17.5 2.04004 12 2.04004Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-2/5 p-6">
              <div>
                <h4
                  className={`${supplyMonoRegular.className} mb-1 font-medium uppercase`}
                >
                  Address
                </h4>
                <p className={`${supplyMonoUltralight.className}`}>
                  1406 SE Stark St
                </p>
                <p className={`${supplyMonoUltralight.className}`}>
                  Portland, OR 97214
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/uLNXfLDBb6p8QKPz5"
                target="_blank"
                className={`${supplyMonoRegular.className} mb-1 font-medium uppercase hover:underline hover:decoration-dashed hover:decoration-2 hover:underline-offset-4`}
              >
                GOOGLE MAPS
              </a>
            </div>
          </div>
        </section>
        <section
          className={`${supplyMonoRegular.className} flex border-y-2 border-black`}
        >
          <nav className="flex w-full text-center">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={`/${item}`}
                className={`w-1/5 py-6 uppercase h-full ${
                  index < 4 ? "border-r-2 border-black" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>
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
