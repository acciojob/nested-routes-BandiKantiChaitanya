import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Grooming from './Grooming';
import Trouser from './Trouser';
import Shirt from './Shirt';
import Jewellery from './Jewellery';

function Women() {
  const { path, url } = useRouteMatch(); // 👈 dynamic matching

  return (
    <div>
      Women Items:
      <ul>
        <li><Link to={`${url}/grooming`}>Grooming</Link></li>
        <li><Link to={`${url}/shirt`}>Shirt</Link></li>
        <li><Link to={`${url}/trouser`}>Trouser</Link></li>
        <li><Link to={`${url}/jewellery`}>Jewellery</Link></li>
      </ul>

      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/grooming`} component={Grooming} />
        <Route path={`${path}/shirt`} component={Shirt} />
        <Route path={`${path}/trouser`} component={Trouser} />
        <Route path={`${path}/jewellery`} component={Jewellery} />
      </Switch>
    </div>
  );
}

export default Women;
