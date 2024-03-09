import React from "react";

function Pagination({ charactersPerPage, totalCharacters, paginate,currentPage }) {
   // Calculate the total number of pages
  const totalPages = Math.ceil(totalCharacters / charactersPerPage);
  // Number of pages to show in the pagination control
  const pagesToShow = 5;

  // Function to calculate the range of pages to display
  const calculateRange = () => {
    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

   // Array containing the range of pages to display
  const pageNumbers = calculateRange();

  return (
    <>
    {pageNumbers.length > 1 &&
    (<div className="flex absolute w-full mx-auto bottom-2 items-center justify-around  px-4 py-3 sm:px-6">
      <div className="flex flex-2 justify-between bg-gray-100">
         {/* Previous button */}
        <button  onClick={() => {
          paginate(currentPage - 1);
        }} className="relative inline-flex border items-center rounded-md  border-gray-400 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" disabled={currentPage === 1 ?true: false}>
          Previous
        </button>
         {/* Display page numbers */}
         {pageNumbers.length > 1 && (
            <div>
             <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => {
                  paginate(number);
                }}
                className={`${
                  number === currentPage
                    ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border rounded border-gray-400"
                    : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border rounded border-gray-400"
                }`}
              >
                {number}
              </button>
            ))}
          </nav>
        </div>
      )}
       {/* Next button */}
         <button  onClick={() => {
          paginate(currentPage + 1);
            }} className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" disabled={currentPage === totalPages ? true: false}>
                 Next
        </button>
      </div>
    </div>)}
    </>
   
   );
}

export default Pagination;
