import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <section className="home__content container">
                <div className="home__content__wrapper">
                    <h1 className="home__content__slogan">Check our lyrics collection</h1>
                    <Link className="home__content__button" to="/songs">Check</Link>
                </div>
            </section>
        </div>
    )
};

export default Home;