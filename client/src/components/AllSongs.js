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
                    <div className="song__box">
                        <div className="song__box__title">
                            <h3 className="song__box__title__name"><Link to={`/song/${song.slug}`}>{song.title}</Link></h3>
                        </div>
                        <div className="song__box__column">
                            <p className="song__box__column__details">{song.excerpt}</p>
                            <strong className="song__box__column__category">{song.category}</strong>
                            <Link className="song__box__column__button" to={`/song/${song.slug}`}>Read</Link>
                        </div>
                    </div>
                </article>

            )
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div className="songs__songlist" key={i}>
                    <div className="songs__songlist__article">
                        {list[i]}
                    </div>
                    <div className="songs__songlist__article">
                        {list[i + 1] ? list[i + 1] : null}
                    </div>
                </div>
            );
        };

        return result;
    };

    return (
        <div >
            <div className="songs">
                <main className="songs__all container">
                    <div className="help">
                        <h1 className="help__category">All Songs</h1>

                    </div>

                    <div >{getSongs()}</div>
                </main>
            </div>
        </div>

    );
};

export default AllSongs;