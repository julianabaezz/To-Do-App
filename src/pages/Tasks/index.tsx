import { FC } from "react"
import { Layout } from "../../components/layout/Layout"

const Tasks: FC = () => {
    const handleSubmit = () => {

    }
    return (
        <Layout>
            <form action="" onSubmit={handleSubmit} className="container">
                <legend>New Task</legend>
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor="inputDefault">Title</label>
                    <input type="text" className="form-control" placeholder="Task" id="inputDefault" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleTextarea" className="form-label mt-4">Description</label>
                    <textarea className="form-control" id="exampleTextarea"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleSelect1" className="form-label mt-4">State</label>
                    <select className="form-select" id="exampleSelect1" required>
                        <option value= "Select state" selected disabled>Select state</option>
                        <option value="pending" className="text-danger">Pending</option>
                        <option value="inProgress" className="text-warning">In progress</option>
                        <option value="done" className="text-success">Done</option>
                    </select>
                </div>
                <div> 
                    
                </div>
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </Layout>


    )
}

export { Tasks }