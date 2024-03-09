import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacterById } from "../services/api";

function CharacterDetailsPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    // Fetch data for the specific character by ID
    getCharacterById(id)
      .then((data) => setCharacter(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 lg:block hidden">
          <img
            className="w-full"
            src={character?.image}
            alt={character?.name}
          />
        </div>
        <div className="lg:hidden">
          <img
            className="w-full"
            src={character?.image}
            alt={character?.name}
          />
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6 bg-gray-50 p-4">
          <div className="border-b border-gray-200 pb-6">
            <h1
              className="lg:text-2xl text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
            >
              Character Information
            </h1>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Name</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600">
                {character?.name}
              </p>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Status</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600">
                {character?.status}
              </p>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Origin</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600">
                {character?.origin?.name}
              </p>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Type</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600">
                {character?.type}
              </p>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Location</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600">
                {character?.location?.name}
              </p>
            </div>
          </div>
          {/* <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Colours</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600">
                Smoke Blue with red accents
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <hr className="border-black-200" />
      <div className="grid grid-cols-4 gap-4">
        {character &&
          character?.episode?.map((item, index) => {
            return (
              <Link
                to={`/episode/${index+1}`}
                class="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none"
              >
                <img
                  class="mr-3 dark:hidden"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg1.svg"
                  alt="location"
                />
                <img
                  class="mr-3 hidden dark:block"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg1dark.svg"
                  alt="location"
                />
                Episode {index + 1}
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default CharacterDetailsPage;