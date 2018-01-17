import errorController from './error.controller';
import './error.scss';

const errorModule = angular.module('error-view.module', []);

errorModule.component('errorController', errorController);

export default errorModule;