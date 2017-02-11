import angular from 'angular';

export const aboutModule = 'aboutModule';
import {aboutComponent} from './about.component';
angular
    .module(aboutModule, [])
    .component('about', aboutComponent);