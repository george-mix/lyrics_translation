import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {


    return (
        <div className="sidebar">
            <nav className="sidebar__nav container">
                <Link className="sidebar__nav__link" exact to="/1950">1950</Link>
                <Link className="sidebar__nav__link" exact to="/1960">1960</Link>
                <Link className="sidebar__nav__link" exact to="/1970">1970</Link>
                <Link className="sidebar__nav__link" exact to="/1980">1980</Link>
                <Link className="sidebar__nav__link" exact to="/1990">1990</Link>
                <Link className="sidebar__nav__link" exact to="/2000">2000</Link>
                <Link className="sidebar__nav__link" exact to="/2010">2010</Link>
                <Link className="sidebar__nav__link" exact to="/2020">2020</Link>
            </nav>
        </div>
    );
};

export default Sidebar;