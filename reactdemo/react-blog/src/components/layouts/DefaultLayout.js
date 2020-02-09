import React, { Fragment, useEffect } from 'react';

import Footer from './../shares/Footer';
import Navigation from './../shares/Navigation';
import Header from './../shares/Header';
import { generatePageTitle } from './../../utils';

const DefaultLayout = props => {
    const title = generatePageTitle(props.pageTitle);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Fragment>
            <Navigation/>
            <Header/>

            <div className="container">
                <div className="row">
                    {props.children}
                </div>
            </div>

            <Footer/>
        </Fragment>
    )
};

export default DefaultLayout;

