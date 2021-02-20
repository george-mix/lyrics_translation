import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const SongContext = createContext();

export const SongProvider = (props) => {
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
        <SongContext.Provider value={[songs]}>
            {props.children}
        </SongContext.Provider>
    );
};
