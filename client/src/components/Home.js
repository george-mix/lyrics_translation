import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
                <h1>Check our song collection</h1>
                <Link to="/songs">Check</Link>
            </div>
        </div>
    )
};

export default Home;