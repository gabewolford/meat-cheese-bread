"use client";

import { useEffect, useState } from "react";

export default function CurrentDate() {
  const [currentDate, setCurrentDate] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        };
        const today = new Date().toLocaleDateString(undefined, options);
        setCurrentDate(today);
      } catch (error) {
        console.error("Error fetching date:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Update date every minute
    const intervalId = setInterval(fetchData, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) {
    return "Loading date..."; // You can return a loading state or placeholder here
  }

  return currentDate;
}
