import {api} from '../../../utils/index';
import { Payload } from '../../../types';


const signUp = async (payload: Payload) => {
    try{
        await api.post('/users.json', payload)
    }   catch(e){
        console.log(e)
    }
}   

export {signUp}