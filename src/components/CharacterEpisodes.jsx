import React from "react";
import { Link } from "react-router-dom";

function CharacterEpisode({character}) {

    return(
        <div className="grid lg:grid-cols-4 gap-4 md:sm:grid-cols-3 sm:grid-cols-2 bg-gray-200">
        {character &&
          character?.episode?.map((item, index) => {
            return (
              <Link
                // to={`/episode/${index+1}`}
                className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none"
              key={index}>
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
              </Link>
            );
          })}
      </div>
    )
}

export default CharacterEpisode;