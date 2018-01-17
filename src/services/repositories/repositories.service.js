export default class RepositoriesService {

    constructor($http, serviceConstant) {
        this.$http = $http;
        this.serviceConstant = serviceConstant;
    }

    getRepositories() {
        return this.$http({
            method: 'GET',
            url: this.serviceConstant.REPOS_URL
        });
    }


}