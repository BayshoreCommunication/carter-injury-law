"use client";

import Link from "next/link";
import React from "react";

const Pagination = ({ pagination }) => {
  const { currentPage, totalPages, hasNextPage, hasPrevPage } = pagination;

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center gap-2 mt-14 flex-wrap">
      {/* Previous Button */}
      {hasPrevPage ? (
        <Link
          href={`/blog?page=${currentPage - 1}`}
          className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition"
        >
          Previous
        </Link>
      ) : (
        <button
          disabled
          className="px-4 py-2 bg-gray-200 text-gray-400 rounded cursor-not-allowed"
        >
          Previous
        </button>
      )}

      {/* First Page */}
      {pageNumbers[0] > 1 && (
        <>
          <Link
            href={`/blog?page=1`}
            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition"
          >
            1
          </Link>
          {pageNumbers[0] > 2 && (
            <span className="px-2 text-gray-500">...</span>
          )}
        </>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <Link
          key={page}
          href={`/blog?page=${page}`}
          className={`px-4 py-2 rounded transition ${
            currentPage === page
              ? "bg-[#EC1D21] text-white font-semibold"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Last Page */}
      {pageNumbers[pageNumbers.length - 1] < totalPages && (
        <>
          {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
            <span className="px-2 text-gray-500">...</span>
          )}
          <Link
            href={`/blog?page=${totalPages}`}
            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition"
          >
            {totalPages}
          </Link>
        </>
      )}

      {/* Next Button */}
      {hasNextPage ? (
        <Link
          href={`/blog?page=${currentPage + 1}`}
          className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition"
        >
          Next
        </Link>
      ) : (
        <button
          disabled
          className="px-4 py-2 bg-gray-200 text-gray-400 rounded cursor-not-allowed"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
