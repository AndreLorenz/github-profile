export default function($httpProvider) {

    $httpProvider.interceptors.push(($state, $q, $injector) => {
        return {
            responseError: response => {
                if (response.data.message) {
                    $state.go('error', {errorMessage: response.data.message});
                }
                return $q.reject(response);
            }
        }
    });
}