import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const [songs, setSongs] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    useEffect(() => {
        const category = props.match.params.id;
        setCurrentCategory(category);


        const config = {
            headers: {
                "Content-Type": 'application/json'
            }
        };
        const fetchData = async () => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category`, { category }, config);
                setSongs(res.data);
            }
            catch (err) {

            }
        }
        fetchData();
    }, [props.match.params.id]);

    const getCategorySongs = () => {
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

        for (let i = 0; i < list.length; i++) {
            result.push(
                <div key={i}>
                    <div>
                        {list[i]}
                    </div>
                </div>
            );
        };

        return result;
    };

    return (
        <div className="allsongs content">
            <div className="center--color">
                <h3 className="allsongs__header">Category: <span className="allsongs__header__category">{currentCategory}</span></h3>
            </div>
            {getCategorySongs()}
        </div>
    );
};

export default Category;