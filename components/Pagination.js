import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount <= 1) return null;

  const visiblePageCount = 3; // Adjust this number to change the number of visible pages in the middle
  const halfVisiblePages = Math.floor(visiblePageCount / 2);

  let startPage, endPage;
  if (pagesCount <= visiblePageCount) {
    startPage = 1;
    endPage = pagesCount;
  } else if (currentPage <= halfVisiblePages) {
    startPage = 1;
    endPage = visiblePageCount;
  } else if (currentPage + halfVisiblePages >= pagesCount) {
    startPage = pagesCount - visiblePageCount + 1;
    endPage = pagesCount;
  } else {
    startPage = currentPage - halfVisiblePages;
    endPage = currentPage + halfVisiblePages;
  }

  const pages = [];

  if (currentPage > 1) {
    pages.push(
      <ScrollLink
        className="hover:text-gray-800 px-2 xl:px-0 dark:hover:text-gray-200 flex justify-center md:justify-start my-2 xl:my-0"
        onClick={() => onPageChange(currentPage - 1)}
        to="problem_statement1"
        smooth={true}
        duration={500}
        key="prev"
      >
        Previous
      </ScrollLink>
    );
  }

  if (startPage > 1) {
    pages.push(
      <ScrollLink
        className="border px-2 rounded-md hover:bg-gray-300 border-black dark:border-white dark:hover:bg-gray-600"
        onClick={() => onPageChange(1)}
        to="problem_statement1"
        smooth={true}
        duration={500}
        key={1}
      >
        1
      </ScrollLink>
    );
    if (startPage > 2) {
      pages.push(
        <span className="text-gray-400" key="start-ellipsis">
          ...
        </span>
      );
    }
  }

  for (let page = startPage; page <= endPage; page++) {
    pages.push(
      <ScrollLink
        className={`${currentPage === page ? "bg-gray-400 " : ""}${
          currentPage === page && "dark:bg-blue-300"
        }border px-2 rounded-md hover:bg-gray-300 border-black dark:border-white dark:hover:bg-gray-600`}
        onClick={() => onPageChange(page)}
        to="problem_statement1"
        smooth={true}
        duration={500}
        key={page}
      >
        {page}
      </ScrollLink>
    );
  }

  if (endPage < pagesCount) {
    if (endPage < pagesCount - 1) {
      pages.push(
        <span className="text-gray-400" key="end-ellipsis">
          ...
        </span>
      );
    }
    pages.push(
      <ScrollLink
        className="border px-2 rounded-md hover:bg-gray-300 border-black dark:border-white dark:hover:bg-gray-600"
        onClick={() => onPageChange(pagesCount)}
        to="problem_statement1"
        smooth={true}
        duration={500}
        key={pagesCount}
      >
        {pagesCount}
      </ScrollLink>
    );
  }

  if (currentPage < pagesCount) {
    pages.push(
      <ScrollLink
        className="hover:text-gray-800 px-2 xl:px-0 dark:hover:text-gray-200 flex justify-center md:justify-start my-2 xl:my-0"
        onClick={() => onPageChange(currentPage + 1)}
        to="problem_statement1"
        smooth={true}
        duration={500}
        key="next"
      >
        Next
      </ScrollLink>
    );
  }

  return (
    <div className="select-none pagination-container xl:flex xl:space-x-2 mt-3 xl:mt-0 font-medium text-lg cursor-pointer bg-slate-100 dark:bg-slate-600 dark:xl:bg-transparent xl:bg-transparent">
      {pages}
    </div>
  );
};

export default Pagination;
