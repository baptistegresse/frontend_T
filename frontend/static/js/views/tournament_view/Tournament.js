import AbstractView from "../AbstractView.js";
import enTranslations from "./translations/translations_en.js";
import esTranslations from "./translations/translations_es.js";
import frTranslations from "./translations/translations_fr.js";
import router from '../../index.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Tournament");
        this.translations = {
            en: enTranslations,
            es: esTranslations,
            fr: frTranslations
        };

        // Initialize an array for 11 matches with default data
        this.tournamentData = Array.from({ length: 11 }, (_, index) => ({
            match: `${index + 1}`,
            player1: "",
            player2: "",
            winner: "",
            score: ""
        }));
    }

    async getHtml() {
        const selectedLanguage = localStorage.getItem("language") || "en";
        const translation = this.translations[selectedLanguage];

        return `
        <div class="container mt-5" style="background-color: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 30px">
            <div class="row justify-content-center">
                <div class="col-md-7 text-center" style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);">
                    <h1 style="color: #343a40; font-weight: 700;">${translation.title}</h1>
                    <p class="lead" style="color: #6c757d;">${translation.description}</p>
    
                    <table class="table" style="background-color: #ffffff;">
                        <thead>
                            <tr>
                                <th>${translation.match}</th>
                                <th>${translation.player1}</th>
                                <th>${translation.player2}</th>
                                <th>${translation.winner}</th>
                                <th>${translation.score}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${this.renderMatches()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    }

    renderMatches() {
        return this.tournamentData.map(match => `
            <tr>
                <td>${match.match}</td>
                <td>${match.player1}</td>
                <td>${match.player2}</td>
                <td>${match.winner}</td>
                <td>${match.score}</td>
            </tr>
        `).join('');
    }

    async onRender() {
        // You can fill in the details for each match in this.tournamentData here
        // For example, this.tournamentData[0].player1 = "John";
        // Then call this.router() to re-render the view with the updated data
    }
}
