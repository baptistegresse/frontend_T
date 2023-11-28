// Importation des fichiers de traduction
import AbstractView from "../AbstractView.js";
import enTranslations from "./translations/translations_en.js";
import esTranslations from "./translations/translations_es.js";
import frTranslations from "./translations/translations_fr.js";

// Vue pour l'historique
export default class HistoryView extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("History");
        this.translations = {
            en: enTranslations,
            es: esTranslations,
            fr: frTranslations
        };
    }

    // Méthode pour obtenir le HTML de la vue historique
    async getHtml() {
        const selectedLanguage = localStorage.getItem("language") || "en";
        const translation = this.translations[selectedLanguage];

        return `
            <div class="container mt-5" styleq="background-color: #f8f9fa; padding: 20px; border-radius: 10px;">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center" style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);">
                        <h1 style="color: #343a40; font-weight: 700;">${translation.historyTitle}</h1>
                        <div class="history-container">
                            
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
