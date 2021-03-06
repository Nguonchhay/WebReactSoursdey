import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

import LanguageMenu from './LanguageMenu';
import { translate } from './../../utils';

const Navigation = (props) => {
    const lang = useSelector(
        state => state.languageReducer.lang
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            {translate(lang, 'nav.home')}
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="about.html">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="post.html">Sample Post</a>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                            {translate(lang, 'nav.contact')}
                        </NavLink>
                    </li>
                </ul>

                <LanguageMenu/>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;