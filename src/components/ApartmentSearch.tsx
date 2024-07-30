"use client";

import { useState, useEffect } from "react";
import { Apartment } from "@/types";
import useDebounce from "./Debounce";
import ApartmentLink from "./ApartmentLink";

export default function ApartmentSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [invalidSearchAttempted, setInvalidSearchAttempted] = useState(false);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const handleSearch = async () => {
    if (debouncedSearchQuery.length < 3) {
      setInvalidSearchAttempted(debouncedSearchQuery.length > 0);
      setApartments([]);
      return;
    }

    setInvalidSearchAttempted(false);
    setHasSearched(true);
    setIsFetching(true);

    try {
      const response = await fetch(
        `/api/apartments/search?q=${debouncedSearchQuery}`
      );
      const data = await response.json();
      setApartments(data);
    } catch (error) {
      console.error("Error fetching apartments:", error);
      setApartments([]);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (debouncedSearchQuery) {
      handleSearch();
    } else {
      setApartments([]);
    }
  }, [debouncedSearchQuery]);

  return (
    <div>
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search apartments by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-600 bg-stone-100 text-gray-800 p-3 rounded w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-center w-full">
        {searchQuery &&
        hasSearched &&
        apartments.length === 0 &&
        !isFetching ? (
          <div className="flex justify-center items-center w-full h-32">
            <span className="text-center text-gray-500">No results found</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {apartments.map((apartment: Apartment) => (
              <ApartmentLink key={apartment.id} apartmentId={apartment.id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center transition-transform transform hover:scale-105">
                  <div className="p-4 w-full">
                    <h2 className="text-xl text-gray-800 font-semibold mb-2">
                      {apartment.name}
                    </h2>
                    <p className="text-gray-600 mb-2">
                      {apartment.description}
                    </p>
                    <p className="text-gray-700 font-semibold">
                      {apartment.city}, {apartment.state}
                    </p>
                  </div>
                </div>
              </ApartmentLink>
            ))}
          </div>
        )}
      </div>
      {isFetching && (
        <div className="text-center text-gray-500">Loading...</div>
      )}
      {invalidSearchAttempted && (
        <div className="text-center text-red-500">
          Search query must be at least 3 characters long.
        </div>
      )}
    </div>
  );
}
