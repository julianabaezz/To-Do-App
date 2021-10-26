import { api } from "../utils";
import { User } from "../types";

const mapToArray = (object: any) => {
    const array = [];

    for (const elem in object){
        console.log(elem, object[elem]);
        array.push({
            id: elem,
            ...object[elem]
        })
    }
    return array
}

// getUsers debería estar envuelto en un Try/Catch
const getUsers = async (): Promise<User[]> =>{
    const response = await api.get("/users.json")

    return mapToArray(response.data);
}

export { getUsers, mapToArray }