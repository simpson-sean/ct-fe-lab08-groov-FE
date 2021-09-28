import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroovContainer from '../containers/GroovContainer.jsx';
import GroovDetailsContainer from '../containers/GroovDetailsContainer.jsx';
import EditCatalogItem from './Catalog/EditCatalogItem.jsx';

export default function App() {
  return <>
    <Router>
      <Switch>
        <Route exact path='/'><GroovContainer /></Route>
        <Route exact path='/:id'><GroovDetailsContainer /></Route>
        <Route exact path='/edit/:id'><EditCatalogItem /></Route>
      </Switch>
    </Router>
  </>
  
};
