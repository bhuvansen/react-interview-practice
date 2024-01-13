import React, { useReducer, useState } from 'react'

const reducer =(state, action)=>{
  console.log(state, action);
  if(action.type === "INCREMENT"){
    return state + 1
  }else{
    return state-1
  }
}

const initialState = 0

const UseReducerHook = () => {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>UseReducer Hook</h1>
      <p>{state}</p>
      <div>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Inc</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Dec</button>
      </div>
    </>
  )
}

export default UseReducerHook