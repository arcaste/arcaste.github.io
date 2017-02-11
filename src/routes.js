export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      component: 'home'
    })
    // .state('about', {
    //   url: '/about',
    //   component: 'about'
    // })
    .state('contact', {
      url: '/contact',
      component: 'contact'
    });
}
