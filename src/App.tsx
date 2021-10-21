import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import {Login, Dashboard, Tasks} from './pages'
import { api } from './utils'

function App() {
  return (
    <BrowserRouter> 
      <Switch> 
        <Route path='/login' component={ Login } />
        <Route path= '/tasks' component={Tasks}/>
        <Route path='/' component={ Dashboard }/> 
        
    
      </Switch> 
    </BrowserRouter> 
        

  );
}

export default App;
