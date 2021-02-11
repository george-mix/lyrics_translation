import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllSongs = () => {
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

    const getSongs = () => {
        let list = [];
        let result = [];

        songs.map(song => {
            return list.push(
                <article className="song">
                    <Link className="song__link" to={`/song/${song.slug}`}>
                        <h3 >{song.title}</h3>
                        <p >{song.excerpt}</p>
                    </Link>
                    <strong >{song.category}</strong>
                </article>

            )
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i}>
                    <div >
                        {list[i]}
                    </div>
                    <div >
                        {list[i + 1] ? list[i + 1] : null}
                    </div>
                </div>
            );
        };

        return result;
    };

    return (
        <div className="list">
            {getSongs()}
        </div>

    );
};

export default AllSongs;