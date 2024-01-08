import Link from "next/link";

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
                  <h4 className="mb-1 font-medium uppercase">Call Us</h4>
                  <div className="flex flex-row gap-2">
                    <p>503-234-1700</p>
                  </div>
                </div>
                <div>
                  <h4 className="mb-1 font-medium uppercase">Email Us</h4>
                  <div className="flex flex-row gap-2">
                    <p className="uppercase">meatcheesebread@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <h4 className="mb-1 font-medium uppercase">Follow Us</h4>
                <div className="flex flex-row gap-2">
                  <p>icon</p>
                  <p>icon</p>
                  <p>icon</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-2/5 p-6">
              <div>
                <h4 className="mb-1 font-medium uppercase">Address</h4>
                <p>1406 SE Stark St</p>
                <p>Portland, OR 97214</p>
              </div>
              <a
                href="https://maps.app.goo.gl/uLNXfLDBb6p8QKPz5"
                target="_blank"
                className="mb-1 font-medium uppercase hover:underline hover:decoration-dashed hover:decoration-2 hover:underline-offset-4"
              >
                GOOGLE MAPS
              </a>
            </div>
          </div>
        </section>
        <section className="flex border-y-2 border-black">
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
      </div>
    </footer>
  );
}
