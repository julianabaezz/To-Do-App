import { FC, FormEvent, useState } from "react"
import { useHistory } from "react-router";
import { Layout } from "../../components/layout/Layout";
import { login } from "./api";

const defaultValues = {
    email:'',
    password: ''
}

const Login: FC = () =>{

    const [input, setInput] = useState(defaultValues)
    const {push} = useHistory()
    
    const handleSubmit = async(e:FormEvent) =>{
        e.preventDefault();
        console.log('Entré')
        try{
            const response = await login(input)
            localStorage.setItem('user', JSON.stringify(response))
            push('/') 
        } catch(e){
            console.log(e)
        }
    } 


    return(
        <Layout>
            <form action="" onSubmit={handleSubmit} className= "container">
                <legend>Login</legend>
                <div className="form-group row">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                    <input 
                        required
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        value= {input.email} 
                        onChange = {(e) => setInput({...input, email: e.target.value})}
                    />
                </div>
                <div className="form-group row">
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <input 
                        required 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Enter password"  
                        value= {input.password}
                        onChange = {(e) => setInput({...input, password: e.target.value})}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </Layout>
    )
}
export default Login