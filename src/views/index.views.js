import repositoriesModule from './repositories/repositories.module';
import profileModule from './profile/profile.module';
import errorModule from './error/error.module';
import contactModule from './contact/contact.module';

export default angular.module('index.views', [
    repositoriesModule.name,
    profileModule.name,
    errorModule.name,
    contactModule.name,
]);