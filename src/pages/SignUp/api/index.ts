import {api} from '../../../utils/index';
import { Payload } from '../../../types';


const signUp = async (data: Payload) => {
    await api.post('/users.json', data)
}   

export {signUp}