import { createSlice } from "@reduxjs/toolkit"


const initialState={
    adminname:"",
    auth:false,
    adminid:"",
    stutime:""

}
const AdminSlice=createSlice({
    name:"admin",
    initialState:initialState,
    reducers:{
        loginadmin:(state,action)=>{
            state.auth=true;
            state.adminname=action.payload.name;
            state.adminid=action.payload.id;
            
            
            state.stutime=action.payload.stutime;

        },
        logoutadmin:(state)=>
        {
            state.auth=false;
            state.adminname="";
        }

    }
})
export const{loginadmin,logoutadmin}=AdminSlice.actions;
export default AdminSlice.reducer;

