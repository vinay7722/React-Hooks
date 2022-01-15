import React from 'react';
import './App.css';
import { Route, Switch} from "react-router-dom"
import About from './About'
import Contact from './Contact'
import Error from './Error';
import Menu from './Menu';
import Service from './Service';
import User from './User'


const App = () => {

  const Name = () => {
    return <h1>hello,i m Vinay</h1>
  }
  return (
    <>
    <Menu/>
    <Switch>
      <Route exact path='/' component={() =>{return <About name="About"/> } }/>
      <Route exact path='/contact' component={Contact}/>
      <Route excat path='/service' component={() =>{return <Service name="Service"/> } } />
      <Route  path='/contact/name' component={Name}/>
      <Route  path='/user/:fname' component={User}/>
      <Route exact component={Error}/>
    </Switch>
    </>
  );
}

export default App;
