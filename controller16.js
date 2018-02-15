angular
    .module('app', ['bs.screenSize'])
    .controller('testCtrl', function (bsScreenSize) {
        // default debounce rate
        bsScreenSize.config({ debounce: 100 });

    });

angular
    .module('app', ['bs.screenSize'])
    .controller('testCtrl', function ($rootScope, bsScreenSize) { // bsScreenSize is an optional dependency


        // responsive properties, updates on screen resize
        bsScreenSize.state; // 'xs','sm','md' or 'lg'
        bsScreenSize.width; // 1200
        bsScreenSize.height; // 800

        // static functions
        bsScreenSize.isScreenXs(); // bool
        bsScreenSize.isScreenSm(); // bool
        bsScreenSize.isScreenMd(); // bool
        bsScreenSize.isScreenLg(); // bool
        var state = bsScreenSize.currentState(); // 'xs','sm','md' or 'lg'
        var width = bsScreenSize.currentWidth(); // 1200
        var height = bsScreenSize.currentHeight(); // 800

        // also available in the $rootScope for convenience
        $rootScope.bsScreenSize.state; // 'xs','sm','md' or 'lg'
        $rootScope.bsScreenSize.width; // 1200
        $rootScope.bsScreenSize.height; // 800

    });


var app = angular.module('mainApp', []);


app.controller('people', function ($scope, $http) {
    $http({
        method: "GET",
        url: "https://swapi.co/api/people/"
    }).then(function mySuccess(response) {
        console.log(response);
        $scope.persons = response.data.results;
        console.log($scope.persons[0]);
        $scope.setValuesForPopup = function (prod) {
            console.log("just got here")
            $scope.product = {};
            console.log($scope.product);
            //$scope.product.prod_name = prod.prod_name;
            //or $scope.product  = angular.copy(prod);
        }
    
    });
});




