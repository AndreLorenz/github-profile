import profileController from './profile.controller';
import './profile.scss';

const profileModule = angular.module('profile-view.module', []);

profileModule.component('profileController', profileController);

export default profileModule;