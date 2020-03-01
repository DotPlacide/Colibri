import React from 'react';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';
import HomeCompagny from './compagny/pages/homeCompagny'
import ExploreService from "./compagny/pages/ExploreService";

const App = () => {
  return <Router>
    <Route path="/compagny" exact>
      <HomeCompagny/>
    </Route>
    <Route path="/ExploreService">
      <ExploreService/>
    </Route>
  </Router>
};

export default App;
