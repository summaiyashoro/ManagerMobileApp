import { STORE_USER_DATA } from "../action/ActionType";


const initialState = {
    userData:null,
    temp:'sumaiya',
    age:'10'
}

const reducer = (state = initialState , action) =>{
  switch (action.type) {
      case STORE_USER_DATA:
          console.log('fired');
          //logic for storing user data
          return state;
      default:
       return state;
  }
}

export default reducer;