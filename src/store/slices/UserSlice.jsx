import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUsers(state, action){
            state.push(action.payload)
        },
        removeUsers(state, action){
            state.splice(action.payload,1)
        },
        deleteUsers(state, action){
            return []
        }
    }
})

export default userSlice.reducer
export const {addUsers, removeUsers, deleteUsers} = userSlice.actions