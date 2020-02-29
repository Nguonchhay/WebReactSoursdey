import React from 'react';
import { useDispatch } from 'react-redux';

import { switchLanguage } from './../../redux/actions/languageAction';

const LanguageMenu = (props) => {
    const dispatch = useDispatch();

    const changeLanguageHandler = lang => {
        dispatch(switchLanguage(lang));
    }

    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a onClick={() => changeLanguageHandler('en')} className="nav-link" href="#">EN</a>
            </li> | 
            <li className="nav-item">
                <a onClick={() => changeLanguageHandler('km')} className="nav-link" href="#">KH</a>
            </li>
        </ul>
    )
};

export default LanguageMenu;