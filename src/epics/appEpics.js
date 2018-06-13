/* src/epics/editorEpics.js */

import { ofType, combineEpics } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import "rxjs";
import { fromPromise } from "rxjs/observable/fromPromise";
import { Observable } from "rxjs/Observable";
import {
  GET_RANDOM_JOKE,
  GET_RANDOM_JOKE_PENDING,
  GET_RANDOM_JOKE_FULFILLED,
  GET_RANDOM_JOKE_REJECTED,
  GET_CATEGORIES,
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_FULFILLED,
  GET_CATEGORIES_REJECTED,
  GET_JOKE_BY_CATEGORY,
  GET_JOKE_BY_CATEGORY_PENDING,
  GET_JOKE_BY_CATEGORY_FULFILLED,
  GET_JOKE_BY_CATEGORY_REJECTED
} from "../actions/appActions";

//Get Random Joke
const getRandomJokeEpic = action$ =>
  action$.ofType(GET_RANDOM_JOKE).map(action => ({
    type: GET_RANDOM_JOKE_PENDING
  }));

const getRandomJokePendingEpic = action$ => {
  return action$.pipe(
    ofType(GET_RANDOM_JOKE_PENDING),
    mergeMap(action => {
      return fromPromise(fetchRandomJoke())
        .map(response => ({
          type: GET_RANDOM_JOKE_FULFILLED,
          payload: response
        }))
        .catch(error =>
          Observable.of({
            type: GET_RANDOM_JOKE_REJECTED,
            payload: error
          })
        );
    })
  );
};

const fetchRandomJoke = () => {
  return fetch(`https://api.chucknorris.io/jokes/random`).then(response => {
    return response.json();
  });
};

// Get Categories
const getCategoriesEpic = action$ =>
  action$.ofType(GET_CATEGORIES).map(action => ({
    type: GET_CATEGORIES_PENDING
  }));

const getCategoriesPendingEpic = action$ => {
  return action$.pipe(
    ofType(GET_CATEGORIES_PENDING),
    mergeMap(action => {
      return fromPromise(fetchCategories())
        .map(response => ({
          type: GET_CATEGORIES_FULFILLED,
          payload: response
        }))
        .catch(error =>
          Observable.of({
            type: GET_CATEGORIES_REJECTED,
            payload: error
          })
        );
    })
  );
};

const fetchCategories = () => {
  return fetch(`https://api.chucknorris.io/jokes/categories`).then(response => {
    return response.json();
  });
};

// Get Joke by Category
const getJokeByCategoryEpic = action$ =>
  action$.ofType(GET_JOKE_BY_CATEGORY).map(action => ({
    type: GET_JOKE_BY_CATEGORY_PENDING,
    payload: action.payload
  }));

const getJokeByCategoryPendingEpic = action$ => {
  return action$.pipe(
    ofType(GET_JOKE_BY_CATEGORY_PENDING),
    mergeMap(action => {
      return fromPromise(fetchJoke(action.payload))
        .map(response => ({
          type: GET_JOKE_BY_CATEGORY_FULFILLED,
          payload: response
        }))
        .catch(error =>
          Observable.of({
            type: GET_JOKE_BY_CATEGORY_REJECTED,
            payload: error
          })
        );
    })
  );
};

const fetchJoke = category => {
  return fetch(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  ).then(response => {
    return response.json();
  });
};

const appEpics = combineEpics(
  getRandomJokeEpic,
  getRandomJokePendingEpic,
  getCategoriesEpic,
  getCategoriesPendingEpic,
  getJokeByCategoryEpic,
  getJokeByCategoryPendingEpic
);

export default appEpics;
