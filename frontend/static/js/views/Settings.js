import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
        <h1>here is the settings page</h1>
        <a href="/posts" data-link>View recent posts</a>
        `;
    }
}