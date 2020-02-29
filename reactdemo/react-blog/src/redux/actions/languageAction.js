import React from 'react';

export const switchLanguage = lang => {
    return {
        type: 'SWITCH_LANGUAGE',
        lang
    }
}