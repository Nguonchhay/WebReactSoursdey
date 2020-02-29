import React from 'react';

const initState = {
    lang: 'en'
};

const LanguageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SWITCH_LANGUAGE':
            return {...state, lang: action.lang};
        default:
            return state;
    }
}

export default LanguageReducer;