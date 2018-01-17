import template from './content.html';
class ContentComponent {
    constructor($transitions) {
        this.showLoader = false;
        $transitions.onStart({
            to: '*'
        }, (event) => {
            this.showLoader = true;
        });
        $transitions.onFinish({
            to: '*'
        }, (event) => {
            this.showLoader = false;
        });
    }
}


export default {
    template: template,
    controller: ContentComponent
};