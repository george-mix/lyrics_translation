import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setShowLinks(!showLinks);
    const closeMobileMenu = () => setShowLinks(false);

    const onMouseClick = () => setDropdown(!dropdown);



    return (
        <div className="navbar">
            <div className="navbar__leftside">
                <Link to="/">osoka</Link>
            </div>
            <div className="navbar__rightside">
                <ul className="navbar__rightside__links" id={showLinks ? "show" : ""}>
                    <li className="navbar__rightside__links__item">
                        <Link onClick={closeMobileMenu} to="/">Home</Link>
                    </li>
                    <li className="navbar__rightside__links__item">
                        <Link onClick={closeMobileMenu} to="/songs">Songs</Link>
                    </li>
                    <li
                        onClick={onMouseClick}
                        className="navbar__rightside__links__item dropdown">
                        <Link className="navbar__rightside__links__item dropdown__link">
                            Categories <i id="down" class="fas fa-caret-down"></i>
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                </ul>
                <div>
                    <i id={showLinks ? "" : "awake"} className={showLinks ? "fas fa-times" : "fas fa-bars"} onClick={handleClick} />
                </div>
            </div>
        </div>
    );
};






export default Navbar;