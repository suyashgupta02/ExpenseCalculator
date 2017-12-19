angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('StatmentController',['$scope','StatmentService','$http', function($scope,StatmentService,$http) {
$scope.Statments =[];
    var lastElementId="";
StatmentService.GetStatments().then(
                function(response) {
                    console.log("RESULT:-- "+JSON.stringify(response.data))
                    $scope.Statments = response.data;
                    var dataArray = response.data;
                    var k = dataArray.length;
                    lastElementId = dataArray[k-1]._id;
                    console.log("Last elemnt "+lastElementId);
                    var sum = 0;
                   for (i = 0; i < k; i++) { 
                    sum = parseInt(sum) +  parseInt((dataArray[i].amount));
                   } 
                    $scope.sum = sum;
                    console.log($scope.sum);
                } 
            );
    $scope.DelFunc = function() {
        var DelArray = {
            id: lastElementId,
        }
        $http.post("https://expnccalc.herokuapp.com/delete/",DelArray).then(function(response){
        //$http.post("http://192.168.43.90:3000/delete/",DelArray).then(function(response){
                            console.log("Entry with ID "+lastElementId+" is deleted");
                            //navigator.app.loadUrl("file://android_asset/www/index.html"); 
                            document.location.href = "index.html";                            
        });
        alert("Last Entry Deleted Sucessfully");  
        };
   
}])
 
.controller('PostController',['$scope','$http', function($scope, $http) {
    
    $scope.myFunc = function(amt,desc) {
                
        console.log(amt);
        console.log(desc);        

        var NewStat = {
            amt:amt,
            desc:desc,
        }
        console.log(NewStat);
        $http.post("https://expnccalc.herokuapp.com/add/",NewStat).then(function(response){
            console.log("Entry Added "+JSON.stringify(response));
            //navigator.app.loadUrl("file://android_asset/www/index.html");
            document.location.href = "index.html"; 
        });
        alert("Entry Added Sucessfully!");
        
    };

}]);