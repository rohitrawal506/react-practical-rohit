import React from 'react';

interface EpisodeModalProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    episode: { name: string; episode: string; air_date: string }

}

const EpisodeModal = ({ setModalOpen, episode }: EpisodeModalProps) => {
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
                <div className="relative bg-white p-8 rounded lg:w-2/6 sm:w-4/5">
                    <h1 className="text-2xl font-bold mb-4">Episode Details</h1>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Name</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-gray-600">{episode?.name}</p>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Episode</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-gray-600">{episode?.episode}</p>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Air Date</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-gray-600">{episode?.air_date}</p>
                        </div>
                    </div>
                    <button
                        onClick={closeModal}
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EpisodeModal;
