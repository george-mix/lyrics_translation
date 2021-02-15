import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SongDetail = (props) => {
    const [song, setSong] = useState({});
    const [change, setChange] = useState(false);

    const changeTranslationOnClick = () => setChange(!change);


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

    const splitContent = (p1, p2, p3) => {
        if (typeof p1 !== 'undefined' && typeof p2 !== 'undefined' && typeof p3 !== 'undefined') {
            let stringsRus = p1.split('\n');
            let stringsEng = p2.split('\n');
            let stringsTransliter = p3.split('\n');
            let result = [];
            for (let i = 0; i < stringsRus.length; i++) {
                result.push(
                    <div className="container details--grid" key={i}>
                        <div>
                            <div className={change ? "hidden" : "container__content__l"}> {stringsRus[i]}</div>
                            <div className={change ? "container__content__l" : "hidden"}>{stringsTransliter[i]}</div>
                        </div>
                        <div className="container__content__r">{stringsEng[i]}</div>
                    </div>
                )
            };
            return result;
        }

    };

    return (
        <div className="allsongs content">
            <div className="original">
                <div className="original__credit">
                    <h1>{song.title}</h1>
                    <h2>{song.excerpt}</h2>
                </div>
                <div className="original__additional">
                    <div className="original__additional__category">
                        <h3>Category: </h3>
                        <h3 className="original__additional__category__display">{song.category}</h3>
                    </div>
                    <Link className="original__additional__link" to="/songs">All Songs</Link>
                </div>
            </div>
            <div className="titles details--grid">
                <div>
                    <h1 className={change ? "hidden" : "titles__title center"}>{song.name_rus}</h1>
                    <h1 className={change ? "titles__title center" : "hidden"}>{song.name_tr}</h1>
                </div>
                <h1 className="titles__title center">{song.name_eng}</h1>
            </div>
            <button onClick={changeTranslationOnClick}>click</button>
            <div className="lyrics">
                {splitContent(song.content_rus, song.content_eng, song.content_transliter)}
            </div>
        </div>
    );
};


export default SongDetail;