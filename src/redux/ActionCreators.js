import * as ActionTypes from './ActionTypes';

import { baseUrl } from '../shared/baseUrl';

//==================================================================
//                       POST COMMENTS
//==================================================================


export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  };

  newComment.date = new Date().toISOString();
  


  return fetch(baseUrl + 'comments', {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })


  .then(response => {
    if (response.ok) {
      return response;
    }
    else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;}
    },
    error => {
      throw error;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

//==================================================================
//                       POST FEEDBACK
//==================================================================


export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {

  const newFeedback = {
    firstname: firstname,
    rating: lastname,
    author: telnum,
    comment: email,
    agree:agree,
    contactType:contactType,
    message:message
  };

  newFeedback.date = new Date().toISOString();
  


  return fetch(baseUrl + 'feedback', {
    method: "POST",
    body: JSON.stringify(newFeedback),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })


  .then(response => {
    if (response.ok) {
      return response;
    }
    else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;}
    },
    error => {
      throw error;
    })
    .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};



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
    /*
    So, when you return the response, what happens? This response then will
    become available to the next "Then". So, if you know how promises work,
    so when this returns something, that will be delivered in as the incoming
    parameter to the next "Then" that has been changed into the set of promise
    handlers here.
    */
    .then(response => {
      if (response.ok){
        return response;
      }
      else {
        /*So, the first part is a situation where you receive a response from
        the server, but the response could be an error response from the server.*/
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }},
      /*
      The second part would be a situation where you don't hear back anything
      from the server, so that's where you will have to handle the error
      appropriate.
      */
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())      //Requeste the response
    .then(dishes => dispatch(addDishes(dishes))) //Take the response and convert it as dishes parameter.
    /*
    So, when you throw the error in a promise handler, we can then implement
    a catch at the bottom which will catch the error and then handle the error
    appropriately.

    Now, in the handling of promises, an error will cause a rejected promise.
    So, that we will catch using the.catch of the promises. So, inside the
    .catch you will receive the error. And this catch would be caused either
    because you throw an error in the first or second part.
    */
    .catch(error => dispatch(dishesFailed(error.message)));
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
    .then(response => {
      if (response.ok){
        return response;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }},
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
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
    .then(response => {
      if (response.ok){
        return response;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }},
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
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

//==================================================================
//                       Leaders
//==================================================================

export const fetchLeaders = () => (dispatch) => {
    
  dispatch(leadersLoading());

  return fetch(baseUrl + 'leaders')
    .then(response => {
      if (response.ok){
      	return response;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;}
    	},
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess
});

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders
});