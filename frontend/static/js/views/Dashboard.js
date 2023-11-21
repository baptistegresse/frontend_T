import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Pong Game</h1>
            <p>Hello ${localStorage.getItem('username')}!</p>
            <button id="quickPlayButton" onclick="startQuickPlay()">Find Quick Game</button>
        `;
    }
}

