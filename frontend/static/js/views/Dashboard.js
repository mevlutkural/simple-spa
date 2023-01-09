import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>here is the dashboard</h1>
        <a href="/posts" data-link>View recent posts</a>
        `;
    }
}