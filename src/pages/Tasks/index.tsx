import { FC, FormEvent, useState } from "react"
import { useHistory } from "react-router"
import { Layout } from "../../components/layout/Layout"
import { addTasks } from "./api"

const defaultValues ={
    title:'',
    description: '',
    startDate: '',
    endDate: '',
    state:'',
}


const Tasks: FC = () => {
    const[input, setInputs] = useState(defaultValues);
    let history = useHistory();

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        console.log(input)
        addTasks(input)
        setTimeout(()=> history.push("/"),500)
    }

    return (
        <Layout>
            <form action="" onSubmit={handleSubmit} className="container">
                <legend>New Task</legend>
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor="taskTitle">Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Task"
                        id="title" 
                        value= {input.title} 
                        onChange = {(e) =>setInputs({...input, title: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="form-label mt-4">Description</label>
                    <textarea 
                        className="form-control"
                        id="description"
                        value= {input.description}
                        onChange = {(e) =>setInputs({...input, description: e.target.value})}
                    ></textarea>
                </div>
                {/* <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor="date">Task's creation date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="date"
                        value= {input.date} 
                        onChange = {(e) =>setInputs({...input, date: e.target.value})} 
                    />
                </div> */}
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor="startDate">Start</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="startDate" 
                        value= {input.startDate} 
                        onChange = {(e) =>setInputs({...input, startDate: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor="endDate">End</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="endDate" 
                        value= {input.endDate} 
                        onChange = {(e) =>setInputs({...input, endDate: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleSelect1" className="form-label mt-4">State</label>
                    <select 
                        className="form-select"  
                        id="state"
                        onChange = {(e) =>setInputs({...input, state: e.target.value})}
                        defaultValue="Select state"
                        required
                    >
                        <option value= "Select state" disabled>Select state</option>
                        <option value="Pending" className="text-danger">Pending</option>
                        <option value="In progress" className="text-warning">In progress</option>
                        <option value="Done" className="text-success">Done</option>
                    </select>
                </div>
                <button type= "submit"> Submit</button>           
                
                
            </form>
        </Layout>
    )
}

export { Tasks }