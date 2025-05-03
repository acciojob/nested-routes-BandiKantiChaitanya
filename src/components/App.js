
import React from "react";
import './../styles/App.css';
import { Switch,Route,Link } from "react-router-dom";
import Women from "./Women";
import Trouser from "./Trouser";
import Grooming from "./Grooming";
import Shirt from "./Shirt";
import Jewellery from "./Jewellery";


const App = () => {
  return (
    <div>
        <nav>
        <ul>
          <li><Link to="/" ><a href="">Home</a></Link></li>
          <li><Link to="/women" ><a href="">Women</a></Link></li>
        </ul>
        </nav>

        <Switch>
        <Route exact path="/"/>
          
        {/* </Route> */}
            <Route path="/women" component={Women}/>
            {/* <Route path="/women/grooming" component={Grooming} />
            <Route path="/women/trouser" component={Trouser} />
            <Route path="/women/shirt" component={Shirt} />
            <Route path="/women/jewellery" component={Jewellery} /> */}
        </Switch>
    </div>
  )
}

export default App
