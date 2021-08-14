import { combineReducers } from "redux";

// List of movies
const movies = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_MOVIES":
      return (state = action.payload);
    case "APPEND_MOVIES":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

// Page index of the returned movie list
const index = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "RESET":
      return (state = 1);
    default:
      return state;
  }
};

// Toggle component ModalWindow display
const showModal = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return (state = action.payload);
    default:
      return state;
  }
};

// Set image of component ModalWindow
const modalImage = (state = "", action) => {
  switch (action.type) {
    case "SET_MODAL_IMAGE":
      return (state = action.payload);
    default:
      return state;
  }
};

// Toggle component MovieDetails display
const showDetails = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_DISPLAY_DETAILS":
      return (state = action.payload);
    default:
      return state;
  }
};

// Set details of the selected movie
const movieDetails = (state = null, action) => {
  switch (action.type) {
    case "SET_MOVIE_DETAILS":
      return (state = action.payload);
    default:
      return state;
  }
};

// Combine all reducers
const allReducers = combineReducers({
  movies,
  index,
  showModal,
  modalImage,
  showDetails,
  movieDetails,
});

export default allReducers;
