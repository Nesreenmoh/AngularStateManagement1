import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';

export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';

export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  // this allows us to pass the payload of the data
  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;

  // this allows us to pass the index of the data so we can remove it
  constructor(public payload: number) {}
}
// we export the type actions and the reference is type AddTutorial or RemoveTutorial
// and allows us to access those actions  in the reducer
export type Actions = AddTutorial | RemoveTutorial;
