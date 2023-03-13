import { createSlice } from "@reduxjs/toolkit"


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    //Create actions in reducers    
    reducers: {
        increment(state) {
            state.count = state.count + 1
        },
        decrement(state) {
            state.count = state.count - 1
        }
    }
})

export default counterSlice.reducer
export const { increment, decrement } = counterSlice.actions
