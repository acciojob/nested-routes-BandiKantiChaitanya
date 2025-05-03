import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Grooming from './Grooming';
import Trouser from './Trouser';
import Shirt from './Shirt';
import Jewellery from './Jewellery';

function Women() {
  const { path, url } = useRouteMatch(); // Get the dynamic path and url

  return (
    <div>
      Women Items:
      <ul>
        <li><Link to={`${url}/Grooming`}><a href="">Grooming</a></Link></li>
        <li><Link to={`${url}/Shirt`}><a href="">Shirt</a></Link></li> {/* Capital S */}
        <li><Link to={`${url}/Trouser`}><a href="">Trouser</a></Link></li> {/* Capital T */}
        <li><Link to={`${url}/Jewellery`}><a href="">Jewellery</a></Link></li> {/* Capital J */}
      </ul>

      {/* Render appropriate components based on the current path */}
      <Switch>
        <Route exact path={path}>
          
        </Route>
        <Route path={`${path}/grooming`} component={Grooming} />
        <Route path={`${path}/Shirt`} component={Shirt} /> {/* Capital S */}
        <Route path={`${path}/Trouser`} component={Trouser} /> {/* Capital T */}
        <Route path={`${path}/Jewellery`} component={Jewellery} /> {/* Capital J */}
      </Switch>
    </div>
  );
}

export default Women;
