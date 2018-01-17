import navbarComponent from './navbar.component';
import './navbar.scss';

const navbarModule = angular.module('navbar-component.module', []);

navbarModule
  .component('navbarComponent', navbarComponent);

export default navbarModule;