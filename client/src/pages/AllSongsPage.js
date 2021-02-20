import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import AllSongs from '../components/AllSongs';
import { SongContext } from '../components/SongContext';

const AllSongsPage = () => {
    const [songs] = useContext(SongContext);

    return (
        <div className="allsongs content">
            <Helmet>
                <title>All Songs</title>
            </Helmet>
            <div className="center--color">
                <h2 className="allsongs__header">All Songs</h2>
            </div>
            <AllSongs songs={songs} />
        </div>

    );
};

export default AllSongsPage;