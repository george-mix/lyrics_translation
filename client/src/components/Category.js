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
                <div>
                    <div>
                        <strong>{song.category}</strong>
                        <h3>{song.title}</h3>
                        <p>{song.excerpt}</p>
                        <Link to={`/song/${song.slug}`}>Read</Link>
                    </div>
                </div>
            )
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i}>
                    <div>
                        {list[i]}
                    </div>
                    <div>
                        {list[i + 1] ? list[i + 1] : null}
                    </div>
                </div>
            );
        };

        return result;
    };

    return (
        <div>
            <h3>{currentCategory} Category</h3>
            <div>
                <nav>
                    <Link exact to="/category/1950">1950</Link>
                    <Link exact to="/category/1960">1960</Link>
                    <Link exact to="/category/1970">1970</Link>
                    <Link exact to="/category/1980">1980</Link>
                    <Link exact to="/category/1990">1990</Link>
                    <Link exact to="/category/2000">2000</Link>
                    <Link exact to="/category/2010">2010</Link>
                    <Link exact to="/category/2020">2020</Link>
                </nav>
            </div>
            {getCategorySongs()}
        </div>
    );
};

export default Category;