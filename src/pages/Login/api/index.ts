import { mapToArray } from "../../../hooks";
import { User } from "../../../types";
import { api } from "../../../utils";

type Payload = {
    email:string,
    password: string
}

const login = async (payload: Payload) => {
    try{
    const response = await api.get('/users.json');
    const users: User[] = mapToArray(response.data)
    return users.find(user => user.email === payload.email && user.password === payload.password)
    
} catch(e){
    console.log(e)
}
}

export { login }