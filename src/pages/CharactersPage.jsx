import React, { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import { getCharacters } from "../services/api";

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(20);
  const [totalReacords, setTotalReacords] = useState(0);
  useEffect(() => {
    // Fetch data from the API
    getCharacters(currentPage)
      .then((data) => {          
          setCharacters(data.results);
          setTotalReacords(data.info.count);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

  // const handlePageChange = (pageNumber) => {
  //   console.log("Current page:", pageNumber);
  //   // Perform actions based on the current page number
  // };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="bg-white"></div>
      <div className={`mx-auto max-w-2xl px-4 relative  py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px- 8 ${characters?.length === 0 ? 'h-lvh':''}`}>
        <div className="mx-auto flex">
      <h1 className="text-3xl font-bold text-gray-900 mx-auto font-mono">Discover Your Favorite Characters</h1>
        </div>
        <Filter characters={characters} setCharacters={setCharacters}  setTotalReacords={setTotalReacords} />
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {characters.length > 0
            ? characters?.map((character) => (
                <CharacterCard key={character?.id} character={character} />
              ))
            : "NO Character Found"}
        </div>
        <Pagination
          charactersPerPage={charactersPerPage}
          totalCharacters={totalReacords}
          currentPage={currentPage}
          paginate={paginate}
        />
      
      </div>
    </>
  );
}

export default CharactersPage;
