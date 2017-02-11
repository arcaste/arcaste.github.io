import angular from 'angular';

export const contactModule = 'contactModule';
import {contactComponent} from './contact.component';
angular
    .module(contactModule, [])
    .component('contact', contactComponent);