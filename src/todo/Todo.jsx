import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './todoSlice'

export default function Todo() {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()

    return <>
        <div>
            <h1>Todos</h1>
            <button onClick={() => dispatch(addTodo(prompt()))}>Add todo</button>
            <button onClick={() => dispatch(removeTodo())}>Remove todo</button>
        </div>
        <ul>
            {todos.map((todo, index) =>
                <li key={index}>{todo}</li>
            )}
        </ul>
    </>
}
