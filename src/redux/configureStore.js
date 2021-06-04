import {createStore, combineReducers} from 'redux';

/* Reducer divided into four parts.

	Note: Split the reducer into simpler reducer functions that operate on only some
	of the state's field, helps to manage parts/slices of the global field.

*/

import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
  const store = createStore(
  	/*
  		We combine the simpler functions to generate the overall state
  		or GLOBAL STATE
  	*/

    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders
    })
  );

  return store;
}