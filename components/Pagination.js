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
    <div className="flex space-x-2 font-medium text-lg cursor-pointer">
      <div
        className="hover:text-gray-800 dark:hover:text-gray-200"
        onClick={() => onPrev()}
      >
        previous
      </div>
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
      <div
        className="hover:text-gray-800 dark:hover:text-gray-200"
        onClick={() => onNext()}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
