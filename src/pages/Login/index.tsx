import { FormEvent } from "react"
import { Layout } from "../../components/layout/Layout";

const Login = () =>{
    
    const handleSubmit =(e:FormEvent) =>{
        e.preventDefault();
        console.log('Entré')

    } 


    return(
        <Layout>
            <form action="" onSubmit={handleSubmit} className= "container">
                <legend>Login</legend>
                <div className="form-group row">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                    <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group row">
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </Layout>
    )
}
export default Login