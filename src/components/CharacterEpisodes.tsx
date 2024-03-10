import React, { useState } from 'react';
import EpisodeModal from './EpisodeModal.tsx';

interface CharacterEpisodeProps {
  character: { episode: { name: string; episode: string; air_date: string }[] };
}

const CharacterEpisode: React.FC<CharacterEpisodeProps> = ({ character }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [episodeId, setEpisodeId] = useState<number>(1);

  const openModal = (id: number) => {
    setModalOpen(true);
    setEpisodeId(id);
  };

  return (
    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 bg-gray-200">
      {character &&
        character?.episode?.map((item, index) => {
          return (
            <button
              onClick={() => openModal(index + 1)}
              className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 drop-shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none"
              key={index}
            >
              {/* Episode icon */}
              <img
                className="mr-3 dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg1.svg"
                alt="location"
              />
              <img
                className="mr-3 hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg1dark.svg"
                alt="location"
              />
              Episode {index + 1}
            </button>
          );
        })}

      {/* Render the EpisodeModal component when modalOpen is true */}
      {modalOpen && <EpisodeModal setModalOpen={setModalOpen} episodeId={episodeId} />}
    </div>
  );
};

export default CharacterEpisode;
