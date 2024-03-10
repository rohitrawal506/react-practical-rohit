import React, { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard.tsx";
import Pagination from "../components/Pagination.tsx";
import Filter from "../components/Filter.tsx";
import { getCharacters } from "../services/api";

const CharactersPage = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(20);
  const [totalReacords, setTotalReacords] = useState(0);

  useEffect(() => {
    // Fetch data from the charcter API
    getCharacters(currentPage)
      .then((data) => {
        setCharacters(data.results);
        setTotalReacords(data.info.count);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

  // Function to handle pagination by updating the currentPage state
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="bg-white"></div>
      <div
        className={`mx-auto max-w-2xl px-4 relative  py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px- 8 ${characters?.length === 0 ? "h-lvh" : ""
          }`}
      >
        <div className="mx-auto flex">
          <h1 className="text-3xl font-bold text-gray-900 mx-auto font-mono">
            Discover Your Favorite Characters
          </h1>
        </div>

        <Filter
          characters={characters}
          setCharacters={setCharacters}
          setTotalReacords={setTotalReacords}
        />

        {characters?.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {characters?.map((character) => (
              <CharacterCard key={character?.id} character={character} />
            ))}
          </div>
        ) : (
          <p className="lg:w-2/6 text-3xl font-bold text-gray-900 mx-auto font-mono text-center bg-gray-50">No Character Found</p>
        )}

        <Pagination
          charactersPerPage={charactersPerPage}
          totalCharacters={totalReacords}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default CharactersPage;
