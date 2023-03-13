import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from '../counter/counterSlice'
import languageSlice from '../Language/languageSlice'
import todoSlice from '../todo/todoSlice'

const rootReducer = combineReducers({
    counter: counterSlice,
    language: languageSlice,
    todo: todoSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})
