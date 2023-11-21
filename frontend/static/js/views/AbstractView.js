export default class {
    constructor(params) {
        this.params = params;
        this.translations = {};
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }

    async onRender() {
        return "";
    }
}