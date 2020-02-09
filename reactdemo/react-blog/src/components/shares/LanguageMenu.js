import React from 'react';


const LanguageMenu = (props) => {
    const changeLanguageHandler = lang => {
        props.setState(
            {
                lang
            }
        );
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