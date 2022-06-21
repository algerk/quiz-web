angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapika-env1.eba-p86kv64p.us-west-2.elasticbeanstalk.com/';

    return service;
}]);