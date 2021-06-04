import * as ActionTypes from './ActionTypes';

//Now ActionCreators take responsobility of  this state. Since ...
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
});

//This returns a inner function that contains a inner function.
export const fetchDishes = () => (dispatch) => {

  dispatch(dishesLoading(true));

  //After of two seconds of delays it's goind to dispatch the addDishes
  //This, is going to push the dishes into the state of our store there.
  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
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