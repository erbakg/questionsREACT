import {FETCH_QUESTION} from '../actions'

export default function(state=[], action){
    switch(action.type){
        case FETCH_QUESTION:
            return[action.payload.data]
            // console.log(action.payload.data);
    }
    return state
}