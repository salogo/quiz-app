import React ,{Component}from 'react';
import './App.css';
import LogIn from "./components/LogIn"
//import { tsConstructorType } from '@babel/types';
import Home from "./components/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'LogIn'
    }
  }

  onRouteChange =(route)=>{
    this.setState({route: route})
  }
  render(){ 
  return (
    <div className="App">
    
    {  this.state.route === 'LogIn'
    ?  <LogIn onRouteChange={this.onRouteChange} />
    : <Home onRouteChange={this.onRouteChange} />
   }
    
   
  </div>
  );
}
}
export default App;
