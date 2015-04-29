// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var ionicApp = angular.module('starter', ['ionic','ngCordova']);

ionicApp.run(function($ionicPlatform, $rootScope, $timeout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

      console.log('ionicplatform ready');
      window.plugin.notification.local.onadd = function (id, state, json) {
          var notification = {
              id: id,
              state: state,
              json: json
          };
          $timeout(function() {
              console.log('timeout from local');
              $rootScope.$broadcast("$cordovaLocalNotification:added", notification);
          });
      };

  });
});

ionicApp.controller("ExampleController", function($scope,$ionicPlatform, $cordovaLocalNotification) {
    console.log('i m in controller');

    document.addEventListener("deviceready", function () {

        var device = $cordovaDevice.getDevice();

        var cordova = $cordovaDevice.getCordova();

        var model = $cordovaDevice.getModel();

        var platform = $cordovaDevice.getPlatform();

        var uuid = $cordovaDevice.getUUID();

        var version = $cordovaDevice.getVersion();

        console.log(device);
        console.log(cordova);
        console.log(model);
        console.log(platform);
        console.log(uuid);
        console.log(version);

    }, false);

    $ionicPlatform.ready(function() {
        console.log('im ready from controller');
    });

    document.addEventListener("deviceready", function () {
        console.log('im ready device ready');
        $scope.$on("$cordovaLocalNotification:added", function(id, state, json) {
            alert("Added a notification");
            console.log('notification added hurray');
        });

        $scope.add = function() {
            var alarmTime = new Date();
            alarmTime.setMinutes(alarmTime.getMinutes() + 1);
            $cordovaLocalNotification.add({
                id: "1234",
                date: alarmTime,
                message: "This is a message",
                title: "This is a title",
                autoCancel: true,
                sound: null
            }).then(function () {
                console.log("The notification has been set");
            });
        };

        $scope.isScheduled = function() {
            $cordovaLocalNotification.isScheduled("1234").then(function(isScheduled) {
                alert("Notification 1234 Scheduled: " + isScheduled);
            });
        }
    });

    $ionicPlatform.ready(function() {
        $scope.$on("$cordovaLocalNotification:added", function(id, state, json) {
            alert("Added a notification");
            console.log('notification added hurray');
        });

        $scope.add = function() {
            var alarmTime = new Date();
            alarmTime.setMinutes(alarmTime.getMinutes() + 1);
            $cordovaLocalNotification.add({
                id: "1234",
                date: alarmTime,
                message: "This is a message",
                title: "This is a title",
                autoCancel: true,
                sound: null
            }).then(function () {
                console.log("The notification has been set");
            });
        };

        $scope.isScheduled = function() {
            $cordovaLocalNotification.isScheduled("1234").then(function(isScheduled) {
                alert("Notification 1234 Scheduled: " + isScheduled);
            });
        }
    });



});
