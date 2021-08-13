export const searchMovies = (data) => {
  return {
    type: "SEARCH_MOVIES",
    payload: data,
  };
};
