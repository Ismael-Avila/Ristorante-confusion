import * as ActionTypes from './ActionTypes';

/*Now in Actioncreators.js file, we realize that we need to communicate with the servers.
So I'm going to import the baseUrl from shared/baseUrl so that we can make use of it while
configuring our server. */
import { baseUrl } from '../shared/baseUrl';


export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
});

//==================================================================
//                       Dishes
//==================================================================

//This returns a inner function that contains a inner function.
export const fetchDishes = () => (dispatch) => {

  dispatch(dishesLoading());

  /*
  So, this is where we're going to make use of fetch to communicate with the server.
  So when we set up fetch we need to give the full URL of the location where we are able to fetch the dishes information.
  And then after that we realize that we will setup the .then to handle the promise that is returned.
  So in the then when the promise resolves.
  */

  return fetch(baseUrl + 'dishes')
    .then(response => response.json())      //Requeste the response
    .then(dishes => dispatch(addDishes(dishes))); //Take the response and convert it as dishes parameter.
}

//Inform somebody, saying that the dishes are beggining to be loaded and
//so you need to wait for the dishes to be loaded
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});

//==================================================================
//                       Comments
//==================================================================

export const fetchComments = () => (dispatch) => {    
  return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

//==================================================================
//                       Promos
//==================================================================

export const fetchPromos = () => (dispatch) => {
    
  dispatch(promosLoading());

  return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
});