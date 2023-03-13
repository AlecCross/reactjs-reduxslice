import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from '../counter/counterSlice'
import languageSlice from '../Language/languageSlice'

const rootReducer = combineReducers({
    counter: counterSlice,
    language: languageSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})
