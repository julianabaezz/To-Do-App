import { api } from "../utils";
import { Task } from "../types";
import { mapToArray } from ".";

// const postTasks = () =>{
//     const post = api.post("/tasks.json")
// }

const getTasks = async (): Promise<Task[]> =>{
    const response = await api.get("/tasks.json")

    return mapToArray(response.data);
}

export {getTasks}