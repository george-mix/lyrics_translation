import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllSongs from '../components/AllSongs';

const AllSongsPage = () => {
    const [songs, setSongs] = useState([]);

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
    return (
        <div className="allsongs content">
            <div className="center--color">
                <h2 className="allsongs__header">All Songs</h2>
            </div>
            <AllSongs songs={songs} />
        </div>

    );
};

export default AllSongsPage;