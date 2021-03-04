 import { createStore, combineReducers } from "redux";

 import UserDataReducer from "../store/reducer/UserDataReducer";


 const rootReducer =  combineReducers({
     UserDataReducer: UserDataReducer
 });

 const configureStore = () => createStore(rootReducer);

 export default configureStore;