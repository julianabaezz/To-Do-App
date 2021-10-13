import { FormEvent } from "react"

const Login = () =>{
    
    const handleSubmit =(e: FormEvent) =>{
        e.preventDefault();
        console.log('Entré')

    } 


    return(
    <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
            <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
            <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
}
export default Login