import React from 'react';
import AllSongs from '../components/AllSongs';

const Home = () => {
    return (
        <div>
            <header>
                <div className="landing">
                    <div className="landing__search">
                        <h2>Search for lyrics</h2>
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
            </header>
            <div className="home content">
                <div className="center--color">
                    <h2 className="allsongs__header">All Songs</h2>
                </div>
                <AllSongs />
            </div>
        </div>
    )
};

export default Home;