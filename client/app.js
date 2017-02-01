/**
 * Created by cnstbmb on 29.01.17.
 */

'use strict';
var serviceBase = 'http://server.local/';
var yii2AngApp = angular.module('yii2AngApp', [
    'ngRoute',
    'yii2AngApp.site',
    'yii2AngApp.employee'
]);

var yii2AngApp_site = angular.module('yii2AngApp.site', ['ngRoute']);
var yii2AngApp_employee = angular.module('yii2AngApp.employee', ['ngRoute']);

yii2AngApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/site/index'});
}]);

yii2AngApp.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);