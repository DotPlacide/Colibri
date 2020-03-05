import React from 'react';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';
import HomeCompagny from './compagny/pages/homeCompagny'
import ExploreService from "./compagny/pages/ExploreService";
import CompagnyLogin from "./compagny/pages/CompagnyLogin";
import CompagnyDash from "./compagny/pages/adminDashboard/CompagnyDash";
import Title from "./compagny/pages/started/TitleStep";
import Post from "./compagny/pages/started/PostJob";
import Description from "./compagny/pages/started/Description";
import BoxDown from "./compagny/components/ContentPost/BoxDown";
import Details from "./compagny/pages/started/Details";
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
    <Route path="/Title">
      <Title/>
    </Route>
    <Route path="/Description">
      <Description/>
    </Route>
    <Route path='/Details'>
      <Details/>
    </Route>
  </Router>
};

export default App;
