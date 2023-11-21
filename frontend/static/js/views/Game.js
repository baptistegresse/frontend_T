import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Game");
    }

    async getHtml() {
        return `
            <h1>${localStorage.getItem('username')} vs $OPONENT_NAME</h1>
            <p>score : $SCORE_CHANGING<p>
            <p>($posj1 $posj2 $posballe)</p>
        `;
    }
}

