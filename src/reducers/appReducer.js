import {
  GET_RANDOM_JOKE_FULFILLED,
  GET_RANDOM_JOKE_PENDING,
  GET_RANDOM_JOKE_REJECTED,
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_FULFILLED,
  GET_CATEGORIES_REJECTED,
  GET_JOKE_BY_CATEGORY_PENDING,
  GET_JOKE_BY_CATEGORY_FULFILLED,
  GET_JOKE_BY_CATEGORY_REJECTED
} from "../actions/appActions";

const INITIAL_STATE = {
  jokeLoading: false,
  jokeError: null,
  joke: null,
  categoriesLoading: false,
  categoriesError: null,
  categories: null
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES_PENDING:
      return { ...state, categoriesLoading: true };
    case GET_CATEGORIES_FULFILLED:
      return { ...state, categories: action.payload, categoriesLoading: false };
    case GET_CATEGORIES_REJECTED:
      console.log("Get categories Error: ", action.payload);
      return {
        ...state,
        categoriesError: action.payload,
        categoriesLoading: false
      };
    case GET_JOKE_BY_CATEGORY_PENDING:
      return { ...state, jokeLoading: true };
    case GET_JOKE_BY_CATEGORY_FULFILLED:
      return {
        ...state,
        joke: action.payload,
        jokeError: null,
        jokeLoading: false
      };
    case GET_JOKE_BY_CATEGORY_REJECTED:
      console.log("Get joke by category Error: ", action.payload);
      return {
        ...state,
        joke: null,
        jokeError: action.payload,
        jokeLoading: false
      };
    case GET_RANDOM_JOKE_PENDING:
      return { ...state, jokeLoading: true };
    case GET_RANDOM_JOKE_FULFILLED:
      return {
        ...state,
        joke: action.payload,
        jokeError: null,
        jokeLoading: false
      };
    case GET_RANDOM_JOKE_REJECTED:
      console.log("Get random joke Error: ", action.payload);
      return {
        ...state,
        joke: null,
        jokeError: action.payload,
        jokeLoading: false
      };
    default:
      return { ...state };
  }
};

export default appReducer;
