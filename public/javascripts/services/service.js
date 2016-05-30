angular.module('services', [])
    .factory('BoneService', ['$http',function ($http) {
        return {
            method: function () {
                return 'All services are set Sir!';
            }
        }
    }]);