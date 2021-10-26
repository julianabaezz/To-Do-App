import { FC } from "react"

const Tasks: FC = () =>{
    const handleSubmit = () =>{
    
    }
    return(      
        
        <form action="" onSubmit={handleSubmit} className= "container">
            <legend>Task</legend>
            <div className="form-group">
                <label className="col-form-label mt-4" htmlFor="inputDefault">Título</label>
                <input type="text" className="form-control" placeholder="Default input" id="inputDefault" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleTextarea" className="form-label mt-4">Descripcion</label>
                {/* <textarea className="form-control" id="exampleTextarea" rows="3"></textarea> */}
            </div>
            <button type="submit" className="btn btn-primary mt-4">Submit</button>
        </form>
            
    
    )
}

export {Tasks}