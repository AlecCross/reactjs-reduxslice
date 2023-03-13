import { createSlice } from "@reduxjs/toolkit"


const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [`Ctrate todo ${Date()}`, `Ctrate todo ${Date()}`, `Ctrate todo ${Date()}`],
    },
    //Create actions in reducers    
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        removeTodo(state) {
            state.todos.pop()
        }
    }
})

export default todoSlice.reducer
export const { addTodo, removeTodo } = todoSlice.actions
