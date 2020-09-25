import {API, HEROKU} from '../config/url'
import axios from 'axios'

export const FETCH_QUESTION='FETCH_QUESTION'

export function fetchByQuestion(){
    const url = HEROKU+API
    const request = axios.get(url)
    console.log(request);

    return{
        type: FETCH_QUESTION,
        payload: request
    }
}