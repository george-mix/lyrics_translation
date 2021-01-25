import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import AllSongs from './components/AllSongs';
import Category from './components/Category';
import SongDetail from './components/SongDetail';



const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/songs" component={AllSongs} />
                <Route exact path="/songs/:id" component={SongDetail} />
                <Route exact path="/category/:id" component={Category} />
            </Switch>
        </Layout>
    </Router>
);

export default App;