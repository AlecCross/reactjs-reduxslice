import { combineReducers, ThunkAction, configureStore, Action } from '@reduxjs/toolkit'
import cardListSlice from '../CardList/cardListSlice'
import counterSlice from '../counter/counterSlice'
import languageSlice from '../Language/languageSlice'
import todoSlice from '../todo/todoSlice'

const rootReducer = combineReducers({
    counter: counterSlice,
    language: languageSlice,
    todo: todoSlice,
    cardList: cardListSlice
})

export const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
