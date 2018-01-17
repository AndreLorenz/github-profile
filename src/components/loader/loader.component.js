import template from './loader.html';
class LoaderComponent {}
export default {
    template: template,
    controller: LoaderComponent,
    bindings: {
        description: '@',
        showLoader: '='
    }
};