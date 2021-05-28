import {createStore} from 'redux';
import { Reducer, initialState } from './reducer'


/*
	When somebody call this ConfigureStore it will configure my ReduxStore.
	--

	Wr have here at least a function that enables us to create the Redux Store

*/
export const ConfigureStore = () => {
  const store = createStore(
    Reducer, // reducer
    initialState, // our initialState
  );

  return store;
}