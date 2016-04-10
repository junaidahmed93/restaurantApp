var FirebaseUrl = "https://panatest1.firebaseio.com";
angular.module('starter')

.service('loginService' , function ($state ,$q) {
       var vm = this;
       vm.loginServFunc = function (FirebaseUrl) {
             var ref = new Firebase();
            ref.authWithOAuthPopup("facebook", function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);

                    $state.go('home');

                }
            });
       }
       
       vm.getResturant = function () {
         var deferred = new $q.defer()  

        var resturantList = {};
        // Get a database reference to our posts
        var ref = new Firebase( FirebaseUrl + "/resturant");

        // Attach an asynchronous callback to read the data at our posts reference
        ref.on("value", function (snapshot) {
            console.log(snapshot.val());
            resturantList = snapshot.val();
            deferred.resolve(resturantList);
           // $scope.$apply();
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        }); 
        
        return deferred.promise;
        //return resturantList;
    }
    
    })

