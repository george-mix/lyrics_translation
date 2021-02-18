import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import AllSongs from '../components/AllSongs';

const Home = () => {
    const [songs, setSongs] = useState([]);
    const [q, setQ] = useState("");

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
                setSongs(res.data);
            }
            catch (err) {

            }
        };

        fetchSongs();
    }, []);

    const search = (rows) => {
        return rows.filter(
            (row) =>
                row.title.toLowerCase().indexOf(q) > -1 ||
                row.author.toLowerCase().indexOf(q) > -1)
    };

    return (
        <div>
            <Helmet>
                <title>Osoka</title>
            </Helmet>
            <header>
                <div className="landing">
                    <div className="landing__search">
                        <h2>Search for lyrics</h2>
                        <form className="landing__search__box center">
                            <div className="landing__search__box__input">
                                <i className="fas fa-search"></i>
                                <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="search..." />
                            </div>
                        </form>
                    </div>
                </div>
            </header>

            <div className="home content">
                <div className="center--color">
                    <h2 className="allsongs__header">All Songs</h2>
                </div>
                <AllSongs songs={search(songs)} />
            </div>
        </div>
    )
};

export default Home;