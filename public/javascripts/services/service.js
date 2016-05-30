angular.module('ServiceBone', [])
    .factory('Bone', ['$http',function ($http) {
        return {
            method: function () {
                return 'All services are set Sir!';
            }
        }
    }]);