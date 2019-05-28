(function() {
  //Place your own Instagram client_id below. Go to https://instagram.com/developer/clients/manage/ and register your app to get a client ID
  var client_id = 'e322619fe0f748c19b342fd99a8e0ad4';

  //To get your user ID go to http://jelled.com/instagram/lookup-user-id and enter your Instagram user name to get your user ID
  var user_id = '8743376526';

  //https://www.instagram.com/oauth/authorize/?client_id=64a12cb0db7b41da8cd2a8736770c466&redirect_uri=http://127.0.0.1:8080/test&response_type=token
  var access_token = 'b773933a5d7b49e5b17ee0f68c872505';

  var app = angular.module('instafeed', []);

  app.factory('InstagramAPI', ['$http', function($http) {
    return {
      fetchPhotos : function(callback) {
        var endpoint = 'https://api.instagram.com/v1/users/';
        endpoint += user_id;
        endpoint += '/media/recent/?';
        endpoint += '?count=99';
        endpoint += '&callback=JSON_CALLBACK';
        endpoint += '&access_token=' + access_token;
        $http.jsonp(endpoint)
          .success(function(response) {
            callback(response.data);
          })
          .error(function(xhr, status, err) {
            console.error(status, err);
          })
      }
    }
  }]);

  app.controller('ShowImages', function($scope, InstagramAPI) {
    $scope.layout = 'grid';
    $scope.data = {};
    $scope.pics = [];

    InstagramAPI.fetchPhotos(function(data) {
      $scope.pics = data;
    });
  });

})();
