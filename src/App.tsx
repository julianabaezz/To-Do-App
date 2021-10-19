import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import {Login, Dashboard} from './pages'


function App() {
  return (
    <BrowserRouter> 
      <Switch> 
        <Route path='/login' component={ Login } />
        <Route path='/' component={ Dashboard }/> 
  
      </Switch> 
    </BrowserRouter> 
        

  );
}

export default App;
