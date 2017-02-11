import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';

// import {techsModule} from './app/techs/index';
import {navbarModule} from './app/navbar/index';
import {homeModule} from './app/home/index';
import {aboutModule} from './app/about/index';
import {contactModule} from './app/contact/index';
import routesConfig from './routes';

// import {main} from './app/main';

// import {header} from './app/header';
// import {title} from './app/title';
// import {footer} from './app/footer';

// import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

import './index.scss';

angular
  .module('app', [navbarModule, homeModule, contactModule, aboutModule, 'ui.router', 'ngAnimate'])
  .config(routesConfig);
  // .component('app', main);
  // .component('fountainHeader', header)
  // .component('fountainTitle', title)
  // .component('fountainFooter', footer);
