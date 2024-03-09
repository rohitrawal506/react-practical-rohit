import React from "react";

function CharacterInformation({character}) {

    return(
        <div className="h-full max-h-full xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6 bg-gray-50  p-4">
        <div className="border-b border-gray-200 pb-6">
          <h1  className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2 font-mono" >
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
      </div>
    )
}

export default CharacterInformation;