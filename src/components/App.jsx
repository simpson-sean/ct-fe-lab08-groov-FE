import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroovContainer from '../containers/GroovContainer.jsx';

export default function App() {
  return <>
    <Router>
      <GroovContainer />
    </Router>
  </>
  

};
