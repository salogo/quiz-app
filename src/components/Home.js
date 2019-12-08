import React from "react";
import { Button } from "react-bootstrap";
//import LogIn from "./LogIn";


const Home =({onRouteChange})=> {
    return (
       <div>
           <Button className="d-flex justify-content-between" onClick={()=>onRouteChange ('LogIn')} > Log Out</Button>
       home page 
       </div>
    );
}
export default Home;