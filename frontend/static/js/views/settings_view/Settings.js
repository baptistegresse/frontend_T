import AbstractView from "../AbstractView.js";
import enTranslations from "./translations/translations_en.js";
import esTranslations from "./translations/translations_es.js"
import frTranslations from "./translations/translations_fr.js"
import router from '../../index.js'

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
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
            <p>${translation.description}</p>
            ${translation.language}
            <select id="languageSelect">
                <option value="en">${translation.english}</option>
                <option value="es">${translation.spanish}</option>
                <option value="fr">${translation.french}</option>
            </select>
        `;
    }

    async onRender() {
        const languageSelect = document.getElementById("languageSelect");

        languageSelect.addEventListener("change", () => {
            const selectedLanguage = languageSelect.value;
            localStorage.setItem("language", selectedLanguage);
            router();
        });

        const selectedLanguage = localStorage.getItem("language") || "en";
        languageSelect.value = selectedLanguage;
    }
}
