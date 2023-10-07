import { Link as ScrollLink } from "react-scroll";

const Pagination = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
  onPrev,
  onNext,
}) => {
  const pagesCount = Math.ceil(items / pageSize);
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="xl:flex xl:space-x-2 mt-3 xl:mt-0 font-medium text-lg cursor-pointer bg-slate-100 dark:bg-slate-600 dark:xl:bg-transparent xl:bg-transparent">
      <ScrollLink
        className="hover:text-gray-800 px-2 xl:px-0 dark:hover:text-gray-200 flex justify-center md:justify-start my-2 xl:my-0"
        onClick={() => onPrev()}
        to="problem_statement1"
        smooth={true}
        duration={500}
      >
        Previous
      </ScrollLink>
      <div className="overflow-auto mx-1 xl:w-full flex justify-start">
        <div className="flex space-x-2">
          {pages.map((page) => (
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
          ))}
        </div>
      </div>
      <ScrollLink
        className="hover:text-gray-800 px-2 xl:px-0 dark:hover:text-gray-200 flex justify-center md:justify-start my-2 xl:my-0"
        onClick={() => onNext()}
        to="problem_statement1"
        smooth={true}
        duration={500}
      >
        Next
      </ScrollLink>
    </div>
  );
};

export default Pagination;
