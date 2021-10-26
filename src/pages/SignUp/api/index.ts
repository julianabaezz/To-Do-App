import {api} from '../../../utils/index';

type Payload = {
    email: string,
    password: string,
    name: string,
}

const signUp = async (data: Payload) => {
    await api.post('/users.json', data)
}   

export {signUp}