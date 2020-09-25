import {combineReducers} from 'redux'
import questions from './question-reducer'

const rootReducer = combineReducers({
    questions
})
export default rootReducer;