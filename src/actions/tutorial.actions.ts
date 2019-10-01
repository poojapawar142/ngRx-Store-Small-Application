//Importing our tutorial model and Action from ngRx Store

import {Action } from '@ngrx/store'
import { Tutorial} from '../models/tutorial.model'

//defining type of action in string format
export const ADD_TUTORIAL = '[Tutorial] Add'
export const REMOVE_TUTORIAL = '[Tutorial] Remove'

//Creating a class for each action with a constructor that allows us to pass in the payload. This is an optional step.
export class AddTutorial implements Action {

    readonly type = ADD_TUTORIAL ;
    constructor(public payload : Tutorial) {
     
    }
}

export class RemoveTutorial implements Action {

    readonly type = REMOVE_TUTORIAL ;
    constructor(public payload : number) {
     
    }
}

//exporting all of our action classes for use within reducers
export type Actions = AddTutorial | RemoveTutorial