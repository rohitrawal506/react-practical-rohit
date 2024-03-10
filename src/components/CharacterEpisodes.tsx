import React, { useState } from 'react';
import EpisodeModal from './EpisodeModal.tsx';
import { getEpisodeById } from '../services/api';

interface CharacterEpisodeProps {
  character: { episode: { name: string; episode: string; air_date: string }[] };
}

const CharacterEpisode = ({ character }: CharacterEpisodeProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [episode, setEpisode] = useState<any>({});

  const openModal = (episodeId: number) => {
    // Fetch data based on the episodeId
    getEpisodeById(episodeId)
      .then((data) => {
        if (data.error) {
          setEpisode({});
        } else {
          setEpisode(data);
        }
      }).catch((error) => console.error(error));

    setModalOpen(true);
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

      {modalOpen && <EpisodeModal setModalOpen={setModalOpen} episode={episode} />}
    </div>
  );
};

export default CharacterEpisode;
