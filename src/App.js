
import './App.css';
import Login from './login_form/login_form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import React from 'react';
import Nav from './navigation/nav';
import Home from './homepage/home';
import Post_page from './post_page/post_page';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

class App extends Component {

  
  
  render(){
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Nav/>
      

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
             <Route exact path="/home" component={Home} />
             <Route exact path="/login" component={Login}/>
             <Route exact path="/post_request" component={Post_page}/>
          </Switch>
          </div>
          
      </div>

    </div>
    </BrowserRouter>
  

    </>
  );
}
}

export default App;
