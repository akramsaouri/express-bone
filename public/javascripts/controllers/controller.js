angular.module('controllers', [])
    .controller('MainController', ['$scope', '$http', 'BoneService', function ($scope, $http, Service) {
        console.log(Service.method());
    }]);