import contentComponent from './content.component';
import './content.scss';

const contentModule = angular.module('content-component.module', []);

contentModule.component('contentComponent', contentComponent);

export default contentModule;