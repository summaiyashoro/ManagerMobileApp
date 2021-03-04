import { STORE_USER_DATA } from "./ActionType";

export default store_user_data = (userdata) =>{
    return{
        type: STORE_USER_DATA ,
        userdata:userdata,
    }
}

//this will go to reducer