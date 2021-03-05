import { STORE_USER_DATA } from "../action/ActionType";


const initialState = {
    userData:[]
    // temp:'sumaiya',
    // age:'10'
}

const reducer = (state = initialState , action) =>{
  switch (action.type) {
      case STORE_USER_DATA:
          console.log('fired');
        //   return Object.assign({},state,{
        //      userData : action.payload,
        //   })
        return{
          ...state,
          userData:action.payload
        }
      default:
       return state;
  }
}

export default reducer;