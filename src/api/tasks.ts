import { api } from "../utils";
import { Task } from "../types";
import { mapToArray } from "../hooks/mapToArray";


// const postTasks = () =>{
//     const post = api.post("/tasks.json")
// }

const getTasks = async (): Promise<Task[]> =>{
    const response = await api.get("/tasks.json")

    return mapToArray(response.data);
}
const deleteTask = async (id:string) =>{
    
    return await api.delete(`tasks/${id}.json`)
}

export {getTasks, deleteTask}