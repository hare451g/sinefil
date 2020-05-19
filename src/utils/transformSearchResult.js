function transformSearchResult(result) {
  return {
    title: result.Title,
    year: result.Year,
    imdbId: result.imdbId,
    type: result.Type,
    poster: result.Poster,
  };
}

export default transformSearchResult;
