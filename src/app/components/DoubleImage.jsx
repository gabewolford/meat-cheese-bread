import Image from "next/image";

export default function DoubleImage({ photo1, altText1, photo2, altText2 }) {
  return (
    <section className="grid grid-cols-4">
      <div className="col-span-2 flex justify-center items-center border-t-2 border-black">
        <Image
          src={photo1}
          alt={altText1}
          className="h-full w-full object-cover"
          placeholder="blur"
        />
      </div>
      <div className="col-span-2 flex justify-center items-center border-l-2 border-t-2 border-black">
        <Image
          src={photo2}
          alt={altText2}
          className="h-full w-full object-cover"
          placeholder="blur"
        />
      </div>
    </section>
  );
}
