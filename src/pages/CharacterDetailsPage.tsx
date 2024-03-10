import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../services/api";
import CharacterInformation from "../components/CharacterInformation.tsx";
import CharacterEpisode from "../components/CharacterEpisodes.tsx";


const CharacterDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<any>({});

  useEffect(() => {
    // Fetch data for the specific character by ID
    getCharacterById(id)
      .then((data) => setCharacter(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-1/4 lg:w-2/5 w-80 lg:block hidden">
          <img
            className="w-full drop-shadow-xl"
            src={character?.image}
            alt={character?.name}
          />
        </div>
        <div className="lg:hidden">
          <img
            className="w-full drop-shadow-xl"
            src={character?.image}
            alt={character?.name}
          />
        </div>
        <CharacterInformation character={character} />
      </div>
      <hr className="border-black-200" />
      <CharacterEpisode character={character} />
    </>
  );
};

export default CharacterDetailsPage;
