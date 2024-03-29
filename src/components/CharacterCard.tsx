import React from 'react';
import { useNavigate } from 'react-router-dom';


interface CharacterCardProps {
  character: {
    id: number;
    name: string;
    image: string;
    type: string;
    episode: string[];
    location: {
      name: string;
    };
  };
}
const CharacterCard = ({ character }: CharacterCardProps) => {
  // Access the router for navigation
  var router = useNavigate();

  // Function to handle navigation to the detailed character page
  const handleDetailRoute = () => router(`/character/${character.id}`);

  return (
    <>
      <div className="group border border-gray-400 rounded-lg bg-gray-100" onClick={handleDetailRoute}>
        <div className="aspect-h-1 aspect-w-1 rounded-t-lg w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src={character.image} alt={character.name} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <div className='mt-4 px-2 pb-2'>
          <h3 className="text-2xl font-bold text-gray-700">{character.name}</h3>
          <p className="text-lg font-medium text-gray-900">Type: {character.type}</p>
          <p className="text-lg font-medium text-gray-900">Total Episodes: {character.episode.length}</p>
          <p className="text-lg font-medium text-gray-900 truncate">Location: {character.location.name}</p>
        </div>
      </div>
    </>
  );
}

export default CharacterCard;
