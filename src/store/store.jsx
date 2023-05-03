import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import {notesReducer} from '../reducers/notesReducer'
import thunk from 'redux-thunk'


export const store = createStore (notesReducer, applyMiddleware(thunk))
