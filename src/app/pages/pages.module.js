/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',
    'BlurAdmin.pages.charts',
    'BlurAdmin.pages.ui',
    'BlurAdmin.pages.components',
    'BlurAdmin.pages.form',
    'BlurAdmin.pages.tables',
    'BlurAdmin.pages.maps',
    'BlurAdmin.pages.profile',
    'BlurAdmin.pages.dashboard'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  }

})();
