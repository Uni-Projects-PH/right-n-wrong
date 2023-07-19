import {createI18n} from "vue-i18n";

import eng from "@/localizations/eng.json";

import ger from "@/localizations/ger.json";
import {ref} from "vue";

export const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: eng,
        de: ger
    }
});