import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';

// create the data we are going to pass
const initialState: Tutorial = {
  id: 6756,
  name: 'Initial Tutorial',
  url: 'http://google.com',
};

// create the reducer and we pass the state of type tutorial and the action type of tutorialActions.action
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];

    case TutorialActions.REMOVE_TUTORIAL:
      // state.splice(action.payload, 1); // action.payload will be the index now that we send
      return state.filter((item) => item.id !== action.payload);
    default:
      return state; // by default it will return the same state
  }
}
