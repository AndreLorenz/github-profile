import template from './navbar.html';
class NavbarComponent {
    constructor() {
        this.initializer();
    }

    initializer() {
        this.user = {};
        this.user.name = "André Lorenz";
        this.user.avatar_url = "https://avatars0.githubusercontent.com/u/17409042?s=460&v=4";
        this.user.bio = "André Lorenz is a developer who works with Javascript /Java.";
        this.user.location = "Blumenau";
    }
}


export default {
    template: template,
    controller: NavbarComponent
};