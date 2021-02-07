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
                        <div className="song__box__left">
                            <Link className="song__box__left__link" to={`/song/${song.slug}`}>
                                <h3 className="song__box__left__title">{song.title}</h3>
                                <p className="song__box__left__author">{song.excerpt}</p>
                            </Link>
                        </div>
                        <div className="song__box__right">
                            <strong className="song__box__rigth__category">{song.category}</strong>
                        </div>
                    </div>
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
        <div >
            <div className="songs">
                <main className="songs__all container">
                    <div className="songs__all__help">
                        <h1 className="songs__all__help__category">All Songs</h1>
                    </div>

                    <div className="list">{getSongs()}</div>
                </main>
            </div>
        </div>

    );
};

export default AllSongs;