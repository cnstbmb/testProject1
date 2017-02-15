/**
 * Created by cnstbmb on 29.01.17.
 */

'use strict';
yii2AngApp_site.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/site/index', {
            templateUrl: 'views/site/index.html',
            controller: 'index'
        })
        .otherwise({
            redirectTo: '/site/index'
        });
}])
    .controller('index', ['$scope', '$http', function($scope,$http) {
        $scope.message = 'Вы читаете главную страницу приложения. ';
    }]);