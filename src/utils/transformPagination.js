function transformPagination(totalResults, perPage, currentPage) {
  const totalPage = Math.ceil(totalResults / perPage);
  let nextPage = null;

  if (currentPage < totalPage) {
    nextPage = currentPage + 1;
  }

  return {
    totalResults,
    totalPage,
    nextPage,
  };
}

export default transformPagination;
