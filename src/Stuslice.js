import { createSlice } from "@reduxjs/toolkit";

const Stuslice=createSlice({

    name:"stuUser",
    initialState:{
        user:null,
        loggedIn:false,
        stuid:""
    },
    reducers:{
        login:(state,action)=>{
            state.loggedIn=true
            // state.stuUser=action.payload;
          

            state.user=action.payload.name;
            state.stuid=action.payload.iddd;            


        },
        logout:(state)=>{
            state.user=null;
            state.loggedIn=false   
        }
    }
})
export const{login,logout}=Stuslice.actions;

export default Stuslice.reducer;