import angular from 'angular';

export const homeModule = 'homeModule';
import {homeComponent} from './home.component';
angular
    .module(homeModule, [])
    .component('home', homeComponent);