import navbarModule from './navbar/navbar.module';
import contentModule from './content/content.module';
import footerModule from './footer/footer.module';
import cardModule from './card/card.module';
import loaderModule from './loader/loader.module';

export default angular.module('index.components', [
    navbarModule.name,
    contentModule.name,
    footerModule.name,
    cardModule.name,
    loaderModule.name,
]);