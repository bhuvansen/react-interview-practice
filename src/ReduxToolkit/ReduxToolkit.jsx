import React from "react"
import "./Reduxtoolkit.css"
import { fakeUser } from "./api"
import { useDispatch } from "react-redux"
import { addUsers, deleteUsers } from "../store/slices/UserSlice"
import DisplayUsers from "./DisplayUsers"

const ReduxToolkit = () => {
    
    const dispatch = useDispatch()
    const addNewUser=(user)=>{
        console.log(user)
        dispatch(addUsers(user))
    }
    return (
        <>
            <h1>ReduxToolkit</h1>
            <div className="content">
                <div className="admin-table">
                    <div className="admin-subtitle">List of User Details</div>
                    <button className="" style={{ backgroundColor: "black", color: "white" }} onClick={()=>addNewUser(fakeUser())}>Add New Users</button>
                </div>
                <ul>
                    <DisplayUsers/>
                </ul>
                <hr />
                <button className="" style={{ backgroundColor: "red", color: "white" }} onClick={()=>dispatch(deleteUsers())}>DeleteAllUser</button>
            </div>
        </>
    )
}

export default ReduxToolkit
