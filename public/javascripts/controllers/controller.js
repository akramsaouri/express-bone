angular.module('ControllerBone', [])
    .controller('MainController', ['$scope', '$http', 'Bone', function ($scope, $http, Service) {
        console.log(Service.method());
    }]);