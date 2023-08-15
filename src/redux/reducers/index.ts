import {reducer as emailReducer, EmailState} from './emailStore'
import { combineReducers } from 'redux'

export default combineReducers({
    email: emailReducer
})

