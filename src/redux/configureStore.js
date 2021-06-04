import {createStore, combineReducers, applyMiddleware} from 'redux';

//List of reducers
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

//To modify actions before to reach to the reducers functions
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(

    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders
    }),
    //Enhancers
    applyMiddleware(thunk, logger)
  );

  return store;
}