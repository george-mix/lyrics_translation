import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AllSongs from './components/AllSongs';
import Category from './components/Category';
import SongDetail from './components/SongDetail';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';

import './sass/main.scss';


const App = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/songs" component={AllSongs} />
            <Route exact path="/song/:id" component={SongDetail} />
            <Route exact path="/:id" component={Category} />
            <Route component={NoMatch} />
        </Switch>
    </Router>
);

export default App;