import React, { useReducer } from 'react'


function reduce(state, action) {

    switch (action.type) {
        case "count/inc":
            return { ...state, count: (state.count + action.payload) }
        case "count/dec":
            return { ...state, count: (state.count - action.payload) }
        default:
            return state
    }
}




function Reducer() {
    const [state, dispatch] = useReducer(reduce, { count: 0 })

    function handleIncrease(payload) {
        dispatch({ type: "count/inc", payload })
    }
    function handleDecrease(payload) {
        dispatch({ type: "count/dec", payload })
    }
    return (
        <div>
            <div>{state.count}</div>
            <button onClick={() => handleIncrease(2)}>+</button>
            <button onClick={() => handleDecrease(3)}>-</button>


        </div>
    )
}

export default Reducer