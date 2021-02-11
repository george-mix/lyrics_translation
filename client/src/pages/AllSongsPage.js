import React from 'react';
import AllSongs from '../components/AllSongs';

const AllSongsPage = () => {
    return (
        <div className="allsongs content">
            <div className="center">
                <h2 className="allsongs__header">All Songs</h2>
            </div>
            <AllSongs />
        </div>

    );
};

export default AllSongsPage;