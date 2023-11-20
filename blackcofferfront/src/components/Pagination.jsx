import React, { useState } from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const [showAllPages, setShowAllPages] = useState(false);

  const toggleShowAllPages = () => {
    setShowAllPages(!showAllPages);
  };

  return (
    <nav className="flex justify-center mt-6">
      <ul className="inline-flex space-x-2">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => {
          if (!showAllPages && pageNumber > 10 && pageNumber !== totalPages) {
            if (pageNumber === 11) {
              return (
                <li
                  key={pageNumber}
                  className="px-2 py-1 rounded-md cursor-pointer bg-gray-200"
                  onClick={toggleShowAllPages}
                >
                  ...
                </li>
              );
            }
            return null;
          }
          return (
            <li
              key={pageNumber}
              className={`px-2 py-1 rounded-md cursor-pointer ${
                pageNumber === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;