import { api } from "../utils";
import { User } from "../types";
import { mapToArray } from "../hooks/mapToArray";

// getUsers debería estar envuelto en un Try/Catch
const getUsers = async (): Promise<User[]> =>{
    const response = await api.get("/users.json")

    return mapToArray(response.data);
}

export { getUsers }