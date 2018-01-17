import contactController from './contact.controller';
import './contact.scss';

const contactModule = angular.module('contact-view.module', []);

contactModule.component('contactController', contactController);

export default contactModule;