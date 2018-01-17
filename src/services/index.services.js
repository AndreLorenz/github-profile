import serviceConstant from './service.constant';
import RepositoriesService from './repositories/repositories.service';

export default angular.module('index.services', [])
    .constant('serviceConstant', serviceConstant)
    .service('repositoriesService', RepositoriesService)