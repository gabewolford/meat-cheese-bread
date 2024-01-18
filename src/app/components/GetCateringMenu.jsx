"use client";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { GetCateringMenuData } from "../lib/data";
import {
  supplyMonoUltralight,
  supplyMonoRegular,
  supplyMonoBold,
} from "../styles/fonts";
import PageHeading from "./PageHeading";

export default function GetCateringMenu() {
  const [menuData, setMenuData] = useState([]);
  const [latestUpdate, setLatestUpdate] = useState(null);
  const [breakfastItems, setBreakfastItems] = useState([]);
  const [coldSandwichesItems, setColdSandwichesItems] = useState([]);
  const [hotSandwichesItems, setHotSandwichesItems] = useState([]);
  const [saladItems, setSaladItems] = useState([]);
  const [sideItems, setSideItems] = useState([]);
  const [sweetItems, setSweetItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const setItemsByCategory = (category, items) => {
    switch (category) {
      case "Breakfast":
        setBreakfastItems(items);
        break;
      case "Cold Sandwiches":
        setColdSandwichesItems(items);
        break;
      case "Hot Sandwiches":
        setHotSandwichesItems(items);
        break;
      case "Salads":
        setSaladItems(items);
        break;
      case "Sides":
        setSideItems(items);
        break;
      case "Sweets":
        setSweetItems(items);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetCateringMenuData();
        setMenuData(data);
        setIsLoading(false);

        const mostRecentUpdate = data.reduce((maxDate, item) => {
          const updatedAtDate = new Date(item._updatedAt);
          return updatedAtDate > maxDate ? updatedAtDate : maxDate;
        }, new Date(0));

        setLatestUpdate(mostRecentUpdate);

        // Extract items for each category
        data.forEach((categoryData) => {
          const { category, items } = categoryData;
          setItemsByCategory(category, items);
        });
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <SkeletonTheme baseColor="#D2AC83" highlightColor="#BB9974">
      <PageHeading headingText="Catering Menu" />
      <p className={`${supplyMonoBold.className} uppercase text-sm text-green`}>
        {isLoading ? (
          <Skeleton width={200} />
        ) : (
          `-- updated ${latestUpdate.toLocaleDateString()} --`
        )}
      </p>

      <div className="flex flex-col text-left">
        {/* Render breakfast items */}
        <h3 className="text-2xl lg:text-3xl text-green mb-4">Breakfast</h3>
        <div>
          {isLoading ? (
            // Render Skeleton components while loading
            <div className="flex flex-col mb-12">
              <Skeleton count={6} className="mb-3.5" />
            </div>
          ) : (
            // Render actual content when not loading
            <ul className="flex flex-col gap-1 mb-12">
              {breakfastItems.map((item, index) => (
                <li
                  key={index}
                  className={`${supplyMonoRegular.className} uppercase mb-2`}
                >
                  {item.name} -{" "}
                  <span
                    className={`${supplyMonoUltralight.className} lowercase`}
                  >
                    {item.description}{" "}
                  </span>
                  <span className={`${supplyMonoRegular.className} uppercase`}>
                    ☞ ${item.price}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Render cold sandwich items */}
        <h3 className="text-2xl lg:text-3xl text-green mb-4">
          Cold Sandwiches
        </h3>
        <div>
          {isLoading ? (
            // Render Skeleton components while loading
            <div className="flex flex-col mb-12">
              <Skeleton count={4} className="mb-3.5" />
            </div>
          ) : (
            // Render actual content when not loading
            <ul className="flex flex-col gap-1 mb-12">
              {coldSandwichesItems.map((item, index) => (
                <li
                  key={index}
                  className={`${supplyMonoRegular.className} uppercase mb-2`}
                >
                  {item.name} -{" "}
                  <span
                    className={`${supplyMonoUltralight.className} lowercase`}
                  >
                    {item.description}{" "}
                  </span>
                  <span className={`${supplyMonoRegular.className} uppercase`}>
                    ☞ ${item.price}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Render hot sandwich items */}
        <h3 className="text-2xl lg:text-3xl text-green mb-4">Hot Sandwiches</h3>
        <div>
          {isLoading ? (
            // Render Skeleton components while loading
            <div className="flex flex-col mb-12">
              <Skeleton count={4} className="mb-3.5" />
            </div>
          ) : (
            // Render actual content when not loading
            <ul className="flex flex-col gap-1 mb-12">
              {hotSandwichesItems.map((item, index) => (
                <li
                  key={index}
                  className={`${supplyMonoRegular.className} uppercase mb-2`}
                >
                  {item.name} -{" "}
                  <span
                    className={`${supplyMonoUltralight.className} lowercase`}
                  >
                    {item.description}{" "}
                  </span>
                  <span className={`${supplyMonoRegular.className} uppercase`}>
                    ☞ ${item.price}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Render salad items */}
        <h3 className="text-2xl lg:text-3xl text-green mb-4">Salads</h3>
        <div>
          {isLoading ? (
            // Render Skeleton components while loading
            <div className="flex flex-col mb-12">
              <Skeleton count={4} className="mb-3.5" />
            </div>
          ) : (
            // Render actual content when not loading
            <ul className="flex flex-col gap-1 mb-12">
              {saladItems.map((item, index) => (
                <li
                  key={index}
                  className={`${supplyMonoRegular.className} uppercase mb-2`}
                >
                  {item.name} -{" "}
                  <span
                    className={`${supplyMonoUltralight.className} lowercase`}
                  >
                    {item.description}{" "}
                  </span>
                  <span className={`${supplyMonoRegular.className} uppercase`}>
                    ☞ ${item.price}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-col w-full lg:w-1/2">
            <h3 className="text-2xl lg:text-3xl text-green mb-4">Sides</h3>
            <div>
              {isLoading ? (
                // Render Skeleton components while loading
                <div className="flex flex-col mb-12">
                  <Skeleton count={6} width={250} className="mb-3.5" />
                </div>
              ) : (
                // Render actual content when not loading
                <ul className="flex flex-col gap-1 mb-12">
                  {sideItems.map((item, index) => (
                    <li
                      key={index}
                      className={`${supplyMonoRegular.className} uppercase mb-2`}
                    >
                      {item.name}{" "}
                      <span
                        className={`${supplyMonoRegular.className} uppercase`}
                      >
                        ☞ ${item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-1/2">
            <h3 className="text-2xl lg:text-3xl text-green mb-4">Sweets</h3>
            <div>
              {isLoading ? (
                // Render Skeleton components while loading
                <div className="flex flex-col mb-12">
                  <Skeleton count={3} width={250} className="mb-3.5" />
                </div>
              ) : (
                // Render actual content when not loading
                <ul className="flex flex-col gap-1 mb-12">
                  {sweetItems.map((item, index) => (
                    <li
                      key={index}
                      className={`${supplyMonoRegular.className} uppercase mb-2`}
                    >
                      {item.name}{" "}
                      <span
                        className={`${supplyMonoRegular.className} uppercase`}
                      >
                        ☞ ${item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}
