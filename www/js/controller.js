angular.module('starter')

  .controller('loginCtrl', function ($scope, $state , loginService) {


        $scope.facebookLogin = function () {
            console.log('login');
          loginService.loginServFunc();
        }

    })

    .controller('homeCtrl', function ($scope) {
        console.log('home');
    })

    .controller('resturantCtrl', function ($scope,$state,$stateParams , loginService,$timeout) {
        
        loginService.getResturant().then(function(data){
            $scope.resturantList = data;
        })
    
       
        $scope.showMenuList = function (a) {
           // $state.go('order');  
             $state.go('order(a)');
            $stateParams.UID = a;
            console.log(a);
            console.log('hi');
        }
    })

    .controller('orderCtrl', function ($scope, $state ,$stateParams) {
        console.log("$stateParams");
        console.log($stateParams);
    });