import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUsers } from '../store/slices/UserSlice'

const DisplayUsers = () => {
    const dispatch = useDispatch()

    const data = useSelector((state)=>state.users)
    console.log(data)
  return (
    <div>{
        data.map((user, index)=>{
            return (
                <div key={index}>
                    <span >{user}</span>
                    <button onClick={()=>dispatch(removeUsers(index))}>
                        Delete
                    </button>
                </div>
                )
        })
    }</div>
  )
}

export default DisplayUsers