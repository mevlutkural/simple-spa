import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
        <h1>Hi, this is the posts page</h1>
        <a href="/settings" data-link>go to settings</a>
        `;
    }
}