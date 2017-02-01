/**
 * Created by cnstbmb on 29.01.17.
 */
'use strict';
yii2AngApp_employee.factory("services", ['$http','$location','$route',
    function($http,$location,$route) {
        var obj = {};
        obj.getEmployees = function(){
            return $http.get(serviceBase + 'employees');
        };
        obj.createEmployee = function (employee) {
            return $http.post( serviceBase + 'employees', employee )
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $location.path('/employee/index');
            }
            function errorHandler( result ){
                alert("Error data");
                $location.path('/employee/create')
            }
        };
        obj.getEmployee = function(employeeID){
            return $http.get(serviceBase + 'employees/' + employeeID);
        };

        obj.updateEmployee = function (employee) {
            return $http.put(serviceBase + 'employees/' + employee.id, employee )
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $location.path('/employee/index');
            }
            function errorHandler( result ){
                alert("Error data");
                $location.path('/employee/update/' + employee.id)
            }
        };
        obj.deleteEmployee = function (employeeID) {
            return $http.delete(serviceBase + 'employees/' + employeeID)
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $route.reload();
            }
            function errorHandler( result ){
                alert("Error data");
                $route.reload();
            }
        };
        return obj;
    }]);