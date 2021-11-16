import { Task } from "../../../types"
import { api } from "../../../utils"

type Payload = Omit<Task, 'id'>

const addTasks = async(payload: Payload) =>{
    try{
        await api.post('/tasks.json', payload)
    } catch(e){

    }


}

export {addTasks}