"use client";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { GetMenuData } from "../lib/data";
import {
  supplyMonoUltralight,
  supplyMonoRegular,
  headlineShadow,
} from "../styles/fonts";
import PageHeading from "./PageHeading";

export default function GetCurrentMenu() {
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
        const data = await GetMenuData();
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <SkeletonTheme baseColor="#DAB68F" highlightColor="#344B2D">
      <PageHeading headingText="Current Menu" />

      <div>
        <p className={`${supplyMonoRegular.className} text-sm uppercase`}>
          {isLoading ? (
            <Skeleton width={200} />
          ) : (
            `-- updated ${latestUpdate.toLocaleDateString()} --`
          )}
        </p>
      </div>

      <button
        onClick={handlePrint}
        className={`${supplyMonoRegular.className} bg-green hover:bg-[#46613d] text-white uppercase px-4 py-2 rounded w-fit mx-auto flex flex-row gap-4 transition-colors duration-300`}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 3H6V7H18V3ZM19 12C18.7348 12 18.4804 11.8946 18.2929 11.7071C18.1054 11.5196 18 11.2652 18 11C18 10.7348 18.1054 10.4804 18.2929 10.2929C18.4804 10.1054 18.7348 10 19 10C19.2652 10 19.5196 10.1054 19.7071 10.2929C19.8946 10.4804 20 10.7348 20 11C20 11.2652 19.8946 11.5196 19.7071 11.7071C19.5196 11.8946 19.2652 12 19 12ZM16 19H8V14H16V19ZM19 8H5C4.20435 8 3.44129 8.31607 2.87868 8.87868C2.31607 9.44129 2 10.2044 2 11V17H6V21H18V17H22V11C22 10.2044 21.6839 9.44129 21.1213 8.87868C20.5587 8.31607 19.7956 8 19 8Z"
              fill="white"
            />
          </svg>
        </span>
        Print Menu
      </button>

      <div className="flex flex-col text-left">
        {/* Render breakfast items */}
        <h3 className={`${headlineShadow.className} text-2xl text-green mb-4`}>
          Breakfast
        </h3>
        {isLoading ? (
          <div className="flex flex-col mb-12">
            <Skeleton count={6} className="mb-3.5" />
          </div>
        ) : (
          <ul className="flex flex-col mb-12">
            {breakfastItems.map((item, index) => (
              <li
                key={index}
                className={`${supplyMonoRegular.className} uppercase mb-2`}
              >
                {item.name}{" "}
                <span className={`${supplyMonoUltralight.className} lowercase`}>
                  {item.description ? `- ${item.description} ` : ""}
                </span>
                {item.price && (
                  <span className={`${supplyMonoRegular.className} uppercase`}>
                    ☞ ${item.price}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* Render cold sandwich items */}
        <h3 className={`${headlineShadow.className} text-2xl text-green mb-4 `}>
          Cold Sandwiches
        </h3>
        <div>
          {isLoading ? (
            <div className="flex flex-col mb-12">
              <Skeleton count={4} className="mb-3.5" />
            </div>
          ) : (
            <ul className="flex flex-col gap-1 mb-12">
              {coldSandwichesItems.map((item, index) => (
                <li
                  key={index}
                  className={`${supplyMonoRegular.className} uppercase mb-2`}
                >
                  {item.name}{" "}
                  <span
                    className={`${supplyMonoUltralight.className} lowercase`}
                  >
                    {item.description ? `- ${item.description} ` : ""}
                  </span>
                  {item.price && (
                    <span
                      className={`${supplyMonoRegular.className} uppercase`}
                    >
                      ☞ ${item.price}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Render hot sandwich items */}
        <h3 className={`${headlineShadow.className} text-2xl text-green mb-4 `}>
          Hot Sandwiches
        </h3>
        <div>
          {isLoading ? (
            <div className="flex flex-col mb-12">
              <Skeleton count={4} className="mb-3.5" />
            </div>
          ) : (
            <ul className="flex flex-col gap-1 mb-12">
              {hotSandwichesItems.map((item, index) => (
                <li
                  key={index}
                  className={`${supplyMonoRegular.className} uppercase mb-2`}
                >
                  {item.name}{" "}
                  <span
                    className={`${supplyMonoUltralight.className} lowercase`}
                  >
                    {item.description ? `- ${item.description} ` : ""}
                  </span>
                  {item.price && (
                    <span
                      className={`${supplyMonoRegular.className} uppercase`}
                    >
                      ☞ ${item.price}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Render salad items */}
        <h3 className={`${headlineShadow.className} text-2xl text-green mb-4 `}>
          Salads
        </h3>
        <div>
          {isLoading ? (
            <div className="flex flex-col mb-12">
              <Skeleton count={4} className="mb-3.5" />
            </div>
          ) : (
            <ul className="flex flex-col gap-1 mb-12">
              {saladItems.map((item, index) => (
                <li
                  key={index}
                  className={`${supplyMonoRegular.className} uppercase mb-2`}
                >
                  {item.name}{" "}
                  <span
                    className={`${supplyMonoUltralight.className} lowercase`}
                  >
                    {item.description ? `- ${item.description} ` : ""}
                  </span>
                  {item.price && (
                    <span
                      className={`${supplyMonoRegular.className} uppercase`}
                    >
                      ☞ ${item.price}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-col w-full lg:w-1/2">
            <h3
              className={`${headlineShadow.className} text-2xl text-green mb-4 `}
            >
              Sides
            </h3>
            <div>
              {isLoading ? (
                <div className="flex flex-col mb-12">
                  <Skeleton count={6} width={250} className="mb-3.5" />
                </div>
              ) : (
                <ul className="flex flex-col gap-1 mb-12">
                  {sideItems.map((item, index) => (
                    <li
                      key={index}
                      className={`${supplyMonoRegular.className} uppercase mb-2`}
                    >
                      {item.name}{" "}
                      <span
                        className={`${supplyMonoUltralight.className} lowercase`}
                      >
                        {item.description ? `- ${item.description} ` : ""}
                      </span>
                      {item.price && (
                        <span
                          className={`${supplyMonoRegular.className} uppercase`}
                        >
                          ☞ ${item.price}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-1/2">
            <h3
              className={`${headlineShadow.className} text-2xl text-green mb-4 `}
            >
              Sweets
            </h3>
            <div>
              {isLoading ? (
                <div className="flex flex-col mb-12">
                  <Skeleton count={3} width={250} className="mb-3.5" />
                </div>
              ) : (
                <ul className="flex flex-col gap-1 mb-12">
                  {sweetItems.map((item, index) => (
                    <li
                      key={index}
                      className={`${supplyMonoRegular.className} uppercase mb-2`}
                    >
                      {item.name}{" "}
                      <span
                        className={`${supplyMonoUltralight.className} lowercase`}
                      >
                        {item.description ? `- ${item.description} ` : ""}
                      </span>
                      {item.price && (
                        <span
                          className={`${supplyMonoRegular.className} uppercase`}
                        >
                          ☞ ${item.price}
                        </span>
                      )}
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
