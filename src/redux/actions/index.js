export const searchMovies = (data) => {
  return {
    type: "SEARCH_MOVIES",
    payload: data,
  };
};

export const toggleModal = (data) => {
  return {
    type: "TOGGLE_MODAL",
    payload: data,
  };
};

export const setModalImage = (data) => {
  return {
    type: "SET_MODAL_IMAGE",
    payload: data,
  };
};

export const toggleDisplayDetails = (data) => {
  return {
    type: "TOGGLE_DISPLAY_DETAILS",
    payload: data,
  };
};

export const setMovieDetails = (data) => {
  return {
    type: "SET_MOVIE_DETAILS",
    payload: data,
  };
};