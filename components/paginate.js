export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  console.log(startIndex, parseInt(startIndex) + parseInt(pageSize));
  return items.slice(startIndex, parseInt(startIndex) + parseInt(pageSize));
};
