import { FC, FormEvent, useState } from "react"
import { Layout } from "../../components/layout/Layout";
import { signUp } from "./api";

const defaultValues = {
    name: '',
    email: '',
    password: ''
}

const SignUp: FC = () => {
    const [input, setInputs] = useState(defaultValues)

    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()
        console.log("entré al signup")

        signUp(input)
    }
    console.log(input)
    
    return(
        <Layout>
        <form action="" onSubmit={handleSubmit} className= "container">
            <legend>Sign Up</legend>
            <div className="form-group row">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Name</label>
                <input required type="name" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter username" value= {input.name} onChange = {(e) =>setInputs({...input, name: e.target.value})} />
            </div>
            <div className="form-group row">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                <input required type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value= {input.email}  onChange = {(e) =>setInputs({...input, email: e.target.value})}/>
            </div>
            <div className="form-group row">
                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                <input required type="password" className="form-control" id="password" placeholder="Password" value= {input.password} onChange = {(e) =>setInputs({...input, password: e.target.value}) }/>
            </div>
            <button type="submit" className="btn btn-primary mt-4">Save</button>
        </form>
        </Layout>
    )
}

export {SignUp}