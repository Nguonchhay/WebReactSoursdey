import enData from './../translations/en.json';
import kmData from './../translations/km.json';

export const generatePageTitle = pageTitle => {
    return pageTitle + ' | Bootstrap';
}

export const translate = (lang, key) => {
    let trans = '';
    if (lang === 'en') {
        if (enData[key] !== undefined) {
            trans = enData[key];
        }
    } else {
        if (kmData[key] !== undefined) {
            trans = kmData[key];
        }
    }

    return trans;
}