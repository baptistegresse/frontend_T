// Importation des fichiers de traduction
import AbstractView from "../AbstractView.js";
import enTranslations from "./translations/translations_en.js";
import esTranslations from "./translations/translations_es.js";
import frTranslations from "./translations/translations_fr.js";
import router from '../../index.js';

// Vue pour les paramètres
export default class SettingsView extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
        this.translations = {
            en: enTranslations,
            es: esTranslations,
            fr: frTranslations
        };
    }

    // Méthode pour obtenir le HTML de la vue
    async getHtml() {
        const selectedLanguage = localStorage.getItem("language") || "en";
        const translation = this.translations[selectedLanguage];
    
        return `
            <div class="container mt-5" style="background-color: #f8f9fa; padding: 20px; border-radius: 10px;">
                <div class="row justify-content-center">
                    <div class="col-md-6 text-center" style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);">
                        <h1 style="color: #343a40; font-weight: 700;">${translation.title}</h1>
                        <p class="lead" style="color: #6c757d;">${translation.description}</p>
    
                        <!-- Sélection de la langue -->
                        <div class="form-group">
                            <label for="languageSelect" style="color: #495057;">${translation.language}</label>
                            <select id="languageSelect" class="form-control" style="background-color: #e9ecef; color: #495057;">
                                <option value="en">${translation.english}</option>
                                <option value="es">${translation.spanish}</option>
                                <option value="fr">${translation.french}</option>
                            </select>
                        </div>
    
                        <!-- Entrée pour le nom d'utilisateur -->
                        <div class="form-group">
                            <label for="usernameInput" style="color: #495057;">${translation.username}</label>
                            <input type="text" id="usernameInput" class="form-control" placeholder="${translation.enterUsername}" value="${localStorage.getItem('username') || ''}" style="background-color: #e9ecef; color: #495057;">
                        </div>
    
                        <!-- Entrée pour téléverser l'avatar -->
                        <div class="form-group">
                            <label for="avatarInput" style="color: #495057;">${translation.avatar}</label>
                            <div class="input-group">
                                <div class="custom-file">
                                    <input type="file" id="avatarInput" class="custom-file-input" style="background-color: #e9ecef; color: #495057;">
                                    <label class="custom-file-label" for="avatarInput" style="background-color: #e9ecef; color: #495057;">${translation.chooseFile}</label>
                                </div>
                            </div>
                            <img id="avatarImage" class="rounded-3 mt-3" style="width: 150px; border: 1px solid #343a40;" alt="Avatar" src="${localStorage.getItem('avatarURL') || ''}">
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    

// Méthode appelée après le rendu de la vue
    async onRender() {
        const languageSelect = document.getElementById("languageSelect");
        const avatarInput = document.getElementById("avatarInput");
        const usernameInput = document.getElementById("usernameInput");
        
        languageSelect.addEventListener("change", () => this.changeLanguage());
        avatarInput.addEventListener("change", () => this.changeAvatar());
        usernameInput.addEventListener("input", () => this.changeUsername());
        
        const selectedLanguage = localStorage.getItem("language") || "en";
        languageSelect.value = selectedLanguage;
    }

    // Nouvelle méthode pour changer la langue
    changeLanguage() {
        const languageSelect = document.getElementById("languageSelect");
        const selectedLanguage = languageSelect.value;
        localStorage.setItem("language", selectedLanguage);
        router();
    }

    // Nouvelle méthode pour changer l'avatar
    // Nouvelle méthode pour changer l'avatar
    changeAvatar() {
        const avatarInput = document.getElementById("avatarInput");
        const avatarImage = document.getElementById("avatarImage");
        const newAvatarFile = avatarInput.files[0];
        
        if (newAvatarFile) {
            try {
                const newAvatarURL = URL.createObjectURL(newAvatarFile);
                console.log("New Avatar URL:", newAvatarURL);
                localStorage.setItem("avatarURL", newAvatarURL);
                avatarImage.src = newAvatarURL;
            } catch (error) {
                console.error("Error creating object URL:", error);
            }
        }
    }

    changeUsername() {
        const usernameInput = document.getElementById("usernameInput");
        const newUsername = usernameInput.value;
        localStorage.setItem("username", newUsername);
    }
}
