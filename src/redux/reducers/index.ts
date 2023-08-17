import { combineReducers } from 'redux'
import { reducer as emailReducer } from './emailStore'

export default combineReducers({
    email: emailReducer
})

