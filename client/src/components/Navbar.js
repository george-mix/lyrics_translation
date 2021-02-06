import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const handleClick = () => setShowLinks(!showLinks);
    const closeMobileMenu = () => setShowLinks(false);


    return (
        <div className="navbar">
            <div className="navbar__leftside">
                <Link>osoka</Link>
            </div>
            <div className="navbar__rightside">
                <div className="navbar__rightside__links" id={showLinks ? "hidden" : ""}>
                    <NavLink onClick={closeMobileMenu} to="/">Home</NavLink>
                    <NavLink onClick={closeMobileMenu} to="/songs">Songs</NavLink>
                </div>
                <div>
                    <i id={showLinks ? "" : "awake"} className={showLinks ? "fas fa-times" : "fas fa-bars"} onClick={handleClick} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;