import LoginReducer from "../Reducer/loginReducer";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import { persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";

const persistConfig = {
    key: 'root',
    storage: storage
};

const persistedReducer = persistReducer(persistConfig, LoginReducer);

const store = configureStore({
    reducer: persistedReducer
})
;
const persistor = persistStore(store);
export {store, persistor};