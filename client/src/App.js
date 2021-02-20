import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AllSongsPage from './pages/AllSongsPage';
import Category from './pages/Category';
import SongDetail from './pages/SongDetail';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import { SongProvider } from './components/SongContext';

import './sass/main.scss';


const App = () => (
    <Router>
        <Navbar />
        <SongProvider>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/songs" component={AllSongsPage} />
                <Route exact path="/song/:id" component={SongDetail} />
                <Route exact path="/category/:id" component={Category} />
                <Route component={NoMatch} />
            </Switch>
        </SongProvider>
    </Router>
);

export default App;