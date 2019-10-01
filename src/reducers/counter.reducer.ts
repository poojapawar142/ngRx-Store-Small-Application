import {createReducer , on, State} from '@ngrx/store'
import {decrement , increment , reset} from '../actions/counter.actions';


export const initialstate = 0 ;

const _counterReducer = createReducer(initialstate ,
    on(increment , state => state + 1 ),
    on(decrement , state => state - 1 ),
    on(reset , state => 0 )
    
    );

    export function counterReducer(state, action){
        return _counterReducer(state , action)
    }