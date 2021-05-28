/*
	This file is where We will implement my reducer function.

	Here, MainComponent it's going to use this states (Here, the Redux Store) to
	update its renders
*/

import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


//Initial configuration for my state

export const initialState = {
	dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS
}

//First reducer function to create

/*I can only do an immutable change and then return an updated version of the
state from this reducer*/

/*Here, I'm not modifying the state in any way so, I'm returning the current state
from the reducer function. This is good enough to get started in this exercise.
But remember, an action produce a "NEW STATE". In this case we don't have actions.


We need to set up the reducer function because our store needs to know what to do
when an action is dispatched to it. So that's the way we set up our reducer function. 
*/

/*
	When you start a Reducer function the initial staed is undefined, that is because
	the reducer function waits a state and an action to updatye something, but if
	you want initialize it with some value then do it, like this.
*/
export const Reducer = (state = initialState, action) => {
  return state;
};