import {GET_CONTACT} from '../action/type'


const initialState = {
contacts : [],


};
export default function (state = initialState , action){
    switch(action.type){
        case GET_CONTACT :
        return{
          ...state,
          contacts : action.payload
        }
      
        default : 
        return state
    }
}

