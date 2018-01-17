export default function routes($stateProvider, $urlRouterProvider) {

    // Configuração de Rotas
    $stateProvider.state('repositories', {
        url: '/repo',
        component: 'repositoriesController',
        resolve: {
            repositories: ($rootScope, repositoriesService) => {
                return repositoriesService.getRepositories().then(result => {
                    return result.data;
                });
            }
        }
    }).state('profile', {
        url: '/profile',
        component: 'profileController',
        resolve: {
            repositories: ($rootScope, repositoriesService) => {
                return repositoriesService.getRepositories().then(result => {
                    return result.data;
                });
            }
        }
    }).state('contact', {
        url: '/contact',
        component: 'contactController',
    }).state('error', {
        url: '/error/:errorMessage',
        component: 'errorController',
    });
    $urlRouterProvider.otherwise("profile");
}