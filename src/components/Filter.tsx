import React, { useState, useEffect } from "react";
import { searchCharacters } from "../services/api";

interface FilterProps {
  characters: any[]; // Adjust the type accordingly
  setCharacters: React.Dispatch<React.SetStateAction<any[]>>; // Adjust the type accordingly
  setTotalReacords: React.Dispatch<React.SetStateAction<number>>;
}

const Filter: React.FC<FilterProps> = ({ characters, setCharacters, setTotalReacords }) => {
  // State variable to store the filter value
  const [filter, setFilter] = useState("");

  // Function to handle changes in the search input
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setFilter(value);
  };

  // useEffect hook to trigger a delayed search request when the filter changes
  useEffect(() => {
    // Use setTimeout to introduce a delay before making the search request
    const getData = setTimeout(() => {
      // Fetch data based on the search filter using the searchCharacters function
      searchCharacters(filter).then((data) => {
        // Handle errors and update the state with the search results
        if (data.error) {
          setCharacters([]);
          setTotalReacords(0);
        } else {
          setCharacters(data.results);
          setTotalReacords(data.info.count);
        }
      });
    }, 500);

    // Cleanup function to clear the timeout when the component unmounts or filter changes
    return () => clearTimeout(getData);
  }, [filter, setTotalReacords, setCharacters]);

  return (
    <>
      <form className="max-w-md mx-auto my-5">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-1000 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          {/* Search input field */}
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-1000 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Character"
            value={filter}
            onChange={handleFilter}
            required
          />
        </div>
      </form>
    </>
  );
};

export default Filter;
