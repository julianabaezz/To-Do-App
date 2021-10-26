import { FC, FormEvent, useState } from "react"
import { signUp } from "./api";

const SignUp: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');

    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()
        console.log("entré al signup")

        signUp({ email, password, name })
    }
    console.log(email, password, name)
    
    return(
        <form action="" onSubmit={handleSubmit} className= "container">
            <legend>Sign Up</legend>
            <div className="form-group row">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Name</label>
                <input required type="name" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter username" onChange = {(e) =>{setName(e.target.value)} }/>
            </div>
            <div className="form-group row">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                <input required type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange = {(e) =>{setEmail(e.target.value)} }/>
            </div>
            <div className="form-group row">
                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                <input required type="password" className="form-control" id="password" placeholder="Password" onChange = {(e) =>{setPassword(e.target.value)} }/>
            </div>
            <button type="submit" className="btn btn-primary mt-4">Save</button>
        </form>
    )
}

export {SignUp}