import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import {Login, Dashboard, Tasks, SignUp, Users} from './pages'
import './app.css'
// import { api } from './utils'

function App() {
  return (
    <BrowserRouter> 
      <Switch> 
        <Route path='/login' component={ Login } />
        <Route path= '/signUp' component= {SignUp }/>
        <Route path= '/tasks' component={Tasks}/>
        <Route path= '/users' component={Users}/>
        <Route path='/' component={ Dashboard }/> 
        
    
      </Switch> 
    </BrowserRouter> 
        

  );
}

export default App;
