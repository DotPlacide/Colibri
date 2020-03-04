import React from 'react';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';
import HomeCompagny from './compagny/pages/homeCompagny'
import ExploreService from "./compagny/pages/ExploreService";
import CompagnyLogin from "./compagny/pages/CompagnyLogin";
import CompagnyDash from "./compagny/pages/adminDashboard/CompagnyDash";
import Post from "./compagny/pages/started/PostJob";
const App = () => {
  return <Router>
    <Route path="/compagny" exact>
      <HomeCompagny/>
    </Route>
    <Route path="/ExploreService">
      <ExploreService/>
    </Route>
    <Route path="/loginCompagny">
      <CompagnyLogin/>
    </Route>
    <Route path="/Dashboard">
      <CompagnyDash/>
    </Route>
    <Route path="/PostJob">
      <Post/>
    </Route>
  </Router>
};

export default App;
