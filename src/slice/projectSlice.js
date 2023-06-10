import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    project :[]
}

export const projectSlice = createSlice({
    name:"project",
    initialState,
    reducers:{
        addToProject:(state,action)=>{
            state.project=[...state.project,action.payload]
        },
    }
})

export const { addToProject } = projectSlice.actions;
export const getProject = (state)=>state.projectItem.project;

export default projectSlice.reducer