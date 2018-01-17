import cardComponent from './card.component';
import './card.scss';

const cardModule = angular.module('card-component.module', []);

cardModule.component('cardComponent', cardComponent);

export default cardModule;