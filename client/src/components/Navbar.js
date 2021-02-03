import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="position">
            <header className="header container">
                <div className="header__logo">
                    <Link className="header__logo__link" to="/">Osoka</Link>
                </div>
                <nav className="header__nav">
                    <ul className="header__nav__list">
                        <li className="header__nav__list__link"><NavLink className="header__nav__list__link__navlink"
                            to="/">Home</NavLink></li>
                        <li className="header__nav__list__link"><NavLink className="header__nav__list__link__navlink" to="/songs">Songs</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;