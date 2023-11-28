import AbstractView from "../AbstractView.js";
import enTranslations from "./translations/translations_en.js";
import esTranslations from "./translations/translations_es.js";
import frTranslations from "./translations/translations_fr.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
        this.translations = {
            en: enTranslations,
            es: esTranslations,
            fr: frTranslations,
        };
    }

    async getHtml() {
        const selectedLanguage = localStorage.getItem("language") || "en";
        const translation = this.translations[selectedLanguage];

        return `
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <h1>${translation.title}</h1>
                        <p>${translation.greeting} ${localStorage.getItem('username')}!</p>
                        <a href="/game" class="btn btn-outline-primary" data-link>${translation.findGameButton}</a>
                        <a href="/tournament" class="btn btn-outline-success" data-link>${translation.tournamentButton}</a>
                    </div>
                </div>
            </div>
        `;
    }
}