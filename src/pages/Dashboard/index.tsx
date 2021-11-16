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

                            <div className="card m-3">
                                <h3 className="card-header">{task.title}</h3>
                                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                <div className="card-body">
                                    {/* <h5 className="card-title">{task.date}</h5> */}
                                    {/* <h6 className="card-subtitle text-muted">Support card subtitle</h6> */}
                                </div>
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