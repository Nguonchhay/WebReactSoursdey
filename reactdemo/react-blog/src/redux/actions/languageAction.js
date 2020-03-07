import { SWITCH_LANGUAGE } from './actionType';

export const switchLanguage = lang => {
    return {
        type: SWITCH_LANGUAGE,
        lang
    }
}