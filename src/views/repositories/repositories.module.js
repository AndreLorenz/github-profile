import repositoriesController from './repositories.controller';
import './repositories.scss';

const repositoriesModule = angular.module('repositories-view.module', []);

repositoriesModule.component('repositoriesController', repositoriesController);

export default repositoriesModule;