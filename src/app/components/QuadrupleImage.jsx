import red from "../../../public/images/red.png";
import yellow from "../../../public/images/yellow.png";
import brown from "../../../public/images/brown.png";
import green from "../../../public/images/green.png";
import Image from "next/image";

export default function QuadrupleImage({
  photo1,
  altText1,
  photo2,
  altText2,
  photo3,
  altText3,
  photo4,
  altText4,
}) {
  return (
    <section className="grid grid-cols-8 border-t-2 border-black">
      <div className="col-span-4 lg:col-span-2 border-b-2 border-black lg:border-b-0 flex justify-center items-center">
        <Image
          src={photo1}
          alt={altText1}
          className="h-full w-full object-cover"
          placeholder="blur"
        />
      </div>
      <div className="col-span-4 lg:col-span-2 flex justify-center items-center border-l-2 border-b-2 border-black lg:border-b-0">
        <Image
          src={photo2}
          alt={altText2}
          className="h-full w-full object-cover"
          placeholder="blur"
        />
      </div>
      <div className="col-span-4 lg:col-span-2 flex justify-center items-center lg:border-l-2 border-black">
        <Image
          src={photo3}
          alt={altText3}
          className="h-full w-full object-cover"
          placeholder="blur"
        />
      </div>
      <div className="col-span-4 lg:col-span-2 flex justify-center items-center border-l-2 border-black">
        <Image
          src={photo4}
          alt={altText4}
          className="h-full w-full object-cover"
          placeholder="blur"
        />
      </div>
    </section>
  );
}
