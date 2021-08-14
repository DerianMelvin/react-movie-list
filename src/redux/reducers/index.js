import { combineReducers } from "redux";

const movies = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_MOVIES":
      return state = action.payload;
    default:
      return state;
  }
};

const showModal = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return state = action.payload;
    default:
      return state;
  }
}

const modalImage = (state = "", action) => {
  switch (action.type) {
    case "SET_MODAL_IMAGE":
      return state = action.payload;
    default:
      return state;
  }
}

// Combine all reducers
const allReducers = combineReducers({
  movies,
  showModal,
  modalImage
})

export default allReducers;