"use client";

import { useEffect } from "react";
import PrimaryButton from "./components/PrimaryButton";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col gap-6 p-3 md:p-12 text-center justify-center items-center">
      <h1 className="text-3xl lg:text-5xl">
        This page does not exist or cannot be found.
      </h1>
      <PrimaryButton linkTo="/" buttonText="Go home" hoverColor="brown" />
    </section>
  );
}
