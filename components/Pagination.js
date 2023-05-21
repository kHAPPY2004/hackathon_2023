const Pagination = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
  onPrev,
  onNext,
}) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  return (
    <div className="xl:flex xl:space-x-2 mt-3 xl:mt-0 font-medium text-lg cursor-pointer bg-slate-100 dark:bg-slate-600 xl:bg-transparent">
      <div
        className="hover:text-gray-800 px-2 xl:px-0 dark:hover:text-gray-200 flex justify-center md:justify-start my-2 xl:my-0"
        onClick={() => onPrev()}
      >
        previous
      </div>
      <div className="overflow-auto mx-1 xl:w-full flex justify-start">
        <div className="flex space-x-2">
          {pages.map((page) => (
            <div
              className="border px-2 rounded-md hover:bg-gray-300 border-black dark:border-white dark:hover:bg-gray-600"
              key={page}
              onClick={() => onPageChange(page)}
            >
              {page}
            </div>
          ))}
        </div>
      </div>
      <div
        className="hover:text-gray-800 px-2 xl:px-0 dark:hover:text-gray-200 flex justify-center md:justify-start my-2 xl:my-0"
        onClick={() => onNext()}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
