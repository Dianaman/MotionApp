angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaDeviceMotion, $ionicPlatform, $window) {
  try{
    $ionicPlatform.ready(function() {
      /*$cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
          $scope.x = result.x;
          $scope.y = result.y;
          $scope.z = result.z;
          $scope.timeStamp = result.timestamp;
        }, function(err) {
          // An error occurred. Show a message to the user
      });*/

      // watch Acceleration
      var options = { frequency: 20000 };

      var watch = $cordovaDeviceMotion.watchAcceleration(options);
      watch.then(
        null,
        function(error) {
        // An error occurred
        },
        function(result) {
          $scope.x = result.x;
          $scope.y = result.y;
          $scope.z = result.z;
          $scope.timeStamp = result.timestamp;
      });

/*
      watch.clearWatch();
      // OR
      $cordovaDeviceMotion.clearWatch(watch)
        .then(function(result) {
          // success
          }, function (error) {
          // error
      });*/

    })
  }
  catch(e){
    alert(e.getMessage());
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
