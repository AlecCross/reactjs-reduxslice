import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../counter/counterSlice'

export default function Counter() {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    return <>
        <div>Counter</div>
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    </>
}
