import footerComponent from './footer.component';
import './footer.scss';

const footerModule = angular.module('footer-component.module', []);

footerModule
  .component('footerComponent', footerComponent);

export default footerModule;