import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

const AllSongs = ({ songs }) => {
    const [currentPage, setCurrentPage] = useState(0);

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

    const PER_PAGE = 10;

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }

    const offset = currentPage * PER_PAGE;

    const currentPageData = getSongs()
        .slice(offset, offset + PER_PAGE)
        .map((song, index) => {
            return (
                <div key={index}>
                    {song}
                </div>
            )
        });

    const pageCount = Math.ceil(songs.length / PER_PAGE);

    return (
        <div className="list">
            {currentPageData}
            <ReactPaginate
                previousLabel={"←"}
                nextLabel={"→"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
        </div>

    );
};

export default AllSongs;