import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Osoka</Link>
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/songs">All Songs</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;