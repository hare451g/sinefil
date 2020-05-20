function transformSearchResult(result) {
  return {
    title: result.Title,
    year: result.Year,
    imdbID: result.imdbID,
    type: result.Type,
    poster: result.Poster,
  };
}

export default transformSearchResult;
