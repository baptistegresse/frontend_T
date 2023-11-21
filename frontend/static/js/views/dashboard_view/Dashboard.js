import AbstractView from "../AbstractView.js";
import enTranslations from "./translations/translations_en.js";
import esTranslations from "./translations/translations_es.js"
import frTranslations from "./translations/translations_fr.js"


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
        this.translations = {
            en: enTranslations,
            es: esTranslations,
            fr: frTranslations
        };
    }

    async getHtml() {
        const selectedLanguage = localStorage.getItem("language") || "en";
        const translation = this.translations[selectedLanguage];

        return `
            <h1>${translation.title}</h1>
            <p>${translation.greeting} ${localStorage.getItem('username')}!</p>
            <button>${translation.findGameButton}</button>
        `;
    }
}
