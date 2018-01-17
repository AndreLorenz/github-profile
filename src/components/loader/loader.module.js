import loaderComponent from './loader.component';
import './loader.scss';

const loaderModule = angular.module('loader-component.module', []);

loaderModule.component('loaderComponent', loaderComponent);

export default loaderModule;