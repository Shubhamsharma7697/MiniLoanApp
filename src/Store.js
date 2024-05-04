import { configureStore } from "@reduxjs/toolkit";
import Stureducer from "./Stuslice";
import storage from 'redux-persist/lib/storage';
import Adminreducer from "./AdminSlice";
import { persistReducer,persistStore } from "redux-persist";
const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig,Stureducer)
const persistedReducer1 = persistReducer(persistConfig,Adminreducer)
const Store=configureStore({
     
    reducer:{
        // stuUser:Stureducer  
        stuUser: persistedReducer,   
        admin: persistedReducer1,   
    }

})
export default Store;
export const persistor = persistStore(Store)