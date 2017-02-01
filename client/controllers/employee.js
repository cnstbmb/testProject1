/**
 * Created by cnstbmb on 29.01.17.
 */

'use strict';
yii2AngApp_employee.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/employee/index', {
            templateUrl: 'views/employee/index.html',
            controller: 'index'
        })
        .when('/employee/create', {
            templateUrl: 'views/employee/create.html',
            controller: 'create',
            resolve: {
                employee: function(services, $route){
                    return services.getEmployees();
                }
            }
        })
        .when('/employee/update/:employeeId', {
            templateUrl: 'views/employee/update.html',
            controller: 'update',
            resolve: {
                employee: function(services, $route){
                    var employeeId = $route.current.params.employeeId;
                    return services.getEmployee(employeeId);
                }
            }
        })
        .when('/employee/delete/:employeeId', {
            templateUrl: 'views/employee/index.html',
            controller: 'delete'
        })
        .otherwise({
            redirectTo: '/employee/index'
        });
}]);

yii2AngApp_employee.controller('index', ['$scope', '$http', 'services',
    function($scope,$http,services) {
        $scope.message = 'Это главная страница.';
        services.getEmployees().then(function(data){
            $scope.employees = data.data;
            preparePhoneNumbers($scope);
            getUniqCountries($scope);
        });
        $scope.deleteEmployee = function(employeeID) {
            if(confirm("Вы действительно хотите удалить пользователя: " + employeeID)==true && employeeID>0){
                services.deleteEmployee(employeeID);
                $route.reload();
            }
        };
    }])
    .controller('create', ['$scope', '$http', 'services','$location','employee',
        function($scope,$http,services,$location,employee) {
            $scope.message = 'Добавить новый фильм в библиотеку';
            $scope.createEmployee = function(employee) {
                var results = services.createEmployee(employee);
            }
        }])
    .controller('update', ['$scope', '$http', '$routeParams', 'services','$location','employee',
        function($scope,$http,$routeParams,services,$location,employee) {
            $scope.message = 'Обновить информацию о фильме.';
            var original = employee.data;
            $scope.employee = angular.copy(original);
            $scope.isClean = function() {
                return angular.equals(original, $scope.employee);
            };
            $scope.updateEmployee = function(employee) {
                var results = services.updateEmployee(employee);
            }
        }]);

var preparePhoneNumbers = function (data) {
    var userList = data.employees,
        country, city, number;
    angular.forEach(userList, function (user) {
        var phone = user.phone.toString().trim().replace(/^\+/, '');

        country = phone[0];
        city = phone.slice(1, 4);
        number = phone.slice(4);

        user.phone = "+"+(country + " (" + city + ") " + number).trim();
    });
};

var getUniqCountries = function (data) {
    var userList = data.employees,
        countryUniqList = [];
    angular.forEach(userList, function (user) {
        var country = user.country;
        if(countryUniqList.indexOf(country) < 0){
            countryUniqList.push(country);
        }
    });
    countryUniqList.sort();
    data.countryUniqList = countryUniqList
};