import { useEffect, useState } from "react"
import { getTasks, deleteTask } from "../../api";
import { Layout } from "../../components/layout/Layout"
import { Task } from "../../types";

const Dashboard = () => {

    const [tasks, setTasks] = useState<Task[] | undefined>();
    // const [hasError, setHasError] = useState("")
    console.log(tasks)
    const obtainTasks = async () => {
        console.log("hola")
        const response = await getTasks();

        setTasks(response)  
    }
    useEffect(() => {
        obtainTasks()
    },[])



    const closeTask = (id:string) =>{
    console.log("ola")
    deleteTask(id)
    console.log("chau")
    setTimeout(obtainTasks,500)
    console.log("cerro")
    }



    return (
        <Layout>
            <h2>Este es el dashboard </h2>
            <div className= "dashboard" >
                {
                    tasks?.map(task => {
                        // console.log(task)
                        return (

                            <div className="card m-3 w-25">
                                <h3 className="card-header">{task.title}</h3>
                                <button onClick={()=> closeTask(task.id)} 
                                type="button" 
                                className="btn-close" 
                                data-bs-dismiss="alert">
                                </button>
                                <div className="card-body">
                                    <p className="card-text">{task.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{task.startDate}</li>
                                    <li className="list-group-item">{task.endDate}</li>
                                    <li className="list-group-item">{task.state}</li>
                                </ul>
                                <div className="card-footer text-muted">
                                    2 days ago
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </Layout>
    )
}

export { Dashboard }