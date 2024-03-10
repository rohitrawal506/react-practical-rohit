import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../services/api";
import CharacterInformation from "../components/CharacterInformation.tsx";
import CharacterEpisode from "../components/CharacterEpisodes.tsx";

interface CharacterDetailsPageProps {}

const CharacterDetailsPage: React.FC<CharacterDetailsPageProps> = () => {
  // Extracting the character ID from the URL parameters
  const { id } = useParams<{ id: string }>();
  // State variable to store the details of the selected character
  const [character, setCharacter] = useState<any>({});

  useEffect(() => {
    // Fetch data for the specific character by ID
    getCharacterById(id)
      .then((data) => setCharacter(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <>
      {/* Display the character image in a larger view for larger screens */}
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        {/* Display character image for larger screens */}
        <div className="xl:w-1/4 lg:w-2/5 w-80 lg:block hidden">
          <img
            className="w-full drop-shadow-xl"
            src={character?.image}
            alt={character?.name}
          />
        </div>
        {/* Display character image for smaller screens */}
        <div className="lg:hidden">
          <img
            className="w-full drop-shadow-xl"
            src={character?.image}
            alt={character?.name}
          />
        </div>
        {/* Render the character information section */}
        <CharacterInformation character={character} />
      </div>
      <hr className="border-black-200" />
      {/* Render the character episodes section */}
      <CharacterEpisode character={character} />
    </>
  );
};

export default CharacterDetailsPage;
