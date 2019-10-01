
import { Tutorial} from '../models/tutorial.model'
import { Actions, ADD_TUTORIAL, REMOVE_TUTORIAL} from './../actions/tutorial.actions'

//We are defining an initial or default state.
const initialState : Tutorial = {

    name : 'Initial Tutorial',
    url : 'http://google.com'
}

//This is our actual reducer.It takes in a state, which we are defining as a Tutorial type and we have optionally bound it to initial state. It also takes in the action from or 
//tutorial actions.
export function reducer (state : Tutorial[]= [initialState] , action: Actions){

    //we use a switch to determine the type of action. In the case of adding a tutorial, we return the new state with the help of our newstate() function.
    //We are simply passing in the previous state in the first parameter and then our action in the second.
    switch(action.type){

        case ADD_TUTORIAL : return [...state,action.payload];

       // We're simply using .splice to modify the state and then we return it.
        case REMOVE_TUTORIAL : const index = action.payload;
        return [...state.slice(0, index), ...state.slice(index + 1)]; 
      
        default: return state;
    }

}