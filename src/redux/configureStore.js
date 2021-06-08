import {createStore, combineReducers, applyMiddleware} from 'redux';

//List of reducers
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { createForms } from 'react-redux-form';

//To modify actions before to reach to the reducers functions
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//States
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
  const store = createStore(

    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      //This, contains the necessary reducers to manages
      //the forms in the overall application
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    //Enhancers
    applyMiddleware(thunk, logger)
  );

  return store;
}