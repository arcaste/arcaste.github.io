import angular from 'angular';

export const navbarModule = 'navbarModule';
import {navbarComponent} from './navbar.component';
angular
    .module(navbarModule, [])
    .component('navbarComponent', navbarComponent);