import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>Settings</h1>
            <p>Manage your privacy and configuration.</p>
            <button id="generateNameButton">Generate New Name</button>
            <p>name : ${localStorage.getItem('username')}</p>

            language
            <select id="languageSelect">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">French</option>
            </select>
        `;
    }
}
