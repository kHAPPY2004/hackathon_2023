const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul>
        {pages.map((page) => (
          <div key={page} onClick={() => onPageChange(page)}>
            {page}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
