import React from 'react';
import { Link } from 'react-router-dom';

const AllSongs = ({songs}) => {

    const getSongs = () => {
        let list = [];
        let result = [];

        songs.map(song => {
            return list.push(
                <article className="song">
                    <Link className="song__link" to={`/song/${song.slug}`}>
                        <h3 >{song.title}</h3>
                        <p >{song.author}</p>
                    </Link>
                    <strong >{song.category}</strong>
                </article>

            )
        });

        for (let i = 0; i < list.length; i++) {
            result.push(
                <div key={i}>
                    <div >
                        {list[i]}
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