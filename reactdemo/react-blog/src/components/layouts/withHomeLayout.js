import React, { useEffect } from 'react';

import Footer from './../shares/Footer';
import Navigation from './../shares/Navigation';
import Header from './../shares/Header';
import { generatePageTitle } from './../../utils';

const withHomeLayout = (Page) => {
    return (props) => {
        const title = generatePageTitle('Home');

        useEffect(() => {
            document.title = title;
        }, [title]);
        
        return (
            <>
                <Navigation/>
                <Header/>

                <div className="container">
                    <div className="row">
                        <Page {...props} />
                    </div>
                </div>

                <Footer/>
            </>
        )
    }
};

export default withHomeLayout;