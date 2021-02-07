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
            <main>
                <AllSongs />
            </main>
        </div>
    )
};

export default Home;