import template from './error.html';
class ErrorController {
    constructor($stateParams){
        this.errorMessage = $stateParams.errorMessage;

    }
}

export default {
    template: template,
    controller: ErrorController
};