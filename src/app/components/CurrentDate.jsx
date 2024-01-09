"use client";

import { useEffect, useState } from "react";

export default function CurrentDate() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      };
      const today = new Date().toLocaleDateString(undefined, options);
      setCurrentDate(today);
    };

    // Initial update
    updateDate();

    // Update date every minute
    const intervalId = setInterval(updateDate, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return currentDate;
}
