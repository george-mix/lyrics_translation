import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SongDetail = (props) => {
    const [song, setSong] = useState({});


    useEffect(() => {
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
                setSong(res.data);
            }
            catch (err) {

            }
        }
        fetchData();
    }, [props.match.params.id]);

    const createSong = () => {
        return { __html: song.content_eng }
    };

    return (
        <div>
            <div>
                <h1>{song.name_eng}</h1>
                <h1>{song.name_rus}</h1>
                <div dangerouslySetInnerHTML={createSong()} />
                <Link to="/songs">Back to Songs</Link>
            </div>
        </div>
    );
};


export default SongDetail;