import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Tournament");
    }

    async getHtml() {
        return `
            <h1>Tournament board</h1>
            <p>check the actual score and game in real time.</p>
            
        `;
    }
}
