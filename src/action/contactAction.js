import {GET_CONTACT} from './type';

import axios from 'axios'


export const getContacts = () => async dispatch=>{
    const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({
            type : GET_CONTACT,
            payload : result.data
        }); 
    
          
        
    };

    