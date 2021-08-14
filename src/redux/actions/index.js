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
