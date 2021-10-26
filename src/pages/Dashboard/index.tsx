import { useState } from "react"
import { getTasks } from "../../api";
import { Layout } from "../../components/layout/Layout"
import { Task } from "../../types";

const Dashboard = () => {


    const [tasks, setTasks] = useState<Task[] | undefined>();

    const obtainTasks = async () => {

        const response = await getTasks();

        setTasks(response)

    }
    if (!tasks) {
        obtainTasks()

    }


    return (
        <Layout>
            <h2>Este es el dashboard</h2>
            <div>
                {
                    tasks?.map(task => {
                        console.log(task)
                        return (

                            <div className="card border-primary mb-3">
                                <div className="card-header">Header</div>
                                <div className="card-body">
                                    <h4 className="card-title">{task.title}</h4>
                                    <p className="card-text">{task.description}</p>
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