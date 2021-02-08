import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Categories } from './Categories';

const Dropdown = (props) => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <div>
            <ul
                onClick={handleClick}
                className={click ? "dropdown-menu clicked" : "dropdown-menu"}
            >
                {Categories.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className={item.cName}
                                to={item.path}
                                onClick={() => setClick(!click)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Dropdown;