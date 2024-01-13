import React, { memo } from 'react'

const Todos = ({todos, addTodo}) => {
    console.log("Child Render")
  return (
    <>
        <h2>My Todos</h2>
        {todos.map((todo, index)=>{
            return <p key={index}>{todo + index}</p>
        })}
        <button onClick={addTodo}>AddTodo</button>
    </>
  )
}

export default memo(Todos)