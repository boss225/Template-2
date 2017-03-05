app.controller("prodCtrl", function ($scope, $http, $routeParams) {
    $scope.param3 = $routeParams.id1;
    $scope.currentPage = 1;
    $scope.pageSize = 9;
    
    $scope.$emit('LOAD');

    $scope.random = function () {
        return 0.5 - Math.random();
    };

    function makeRandom(inputArray) {
        angular.forEach(inputArray, function (value) {
            value.random = Math.random();
        });
        return inputArray;
    }

    $http({method: 'GET', url: $scope.urlProdCate + 'get-all-by-shop-name-and-level?shop_name=' + $scope.nameshop + '&level=1&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.lv1category = response.data;
    }, function myError(response) {
        $scope.lv1category = response.statusText;
    });

    $http({method: 'GET', url: $scope.urlProds + 'get-all-by-shop-name?shop_name=' + $scope.nameshop + '&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.allproduct = response.data;
        $scope.$emit('UNLOAD');
    }, function myError(response) {
        $scope.allproduct = response.statusText;
    });

    $http({method: 'GET', url: $scope.urlProds + 'get-all-by-shop-name-and-is-newest?shop_name=' + $scope.nameshop + '&is_newest=1&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.prodNew = makeRandom(response.data);
        $scope.$emit('UNLOAD');
    }, function myError(response) {
        $scope.prodNew = response.statusText;
    });

    $http({method: 'GET', url: $scope.urlProds + 'get-all-by-shop-name-and-category-id-and-level?shop_name=' + $scope.nameshop + '&category_id=' + $scope.param3 + '&level=1&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.deltailcato = response.data;
        $scope.$emit('UNLOAD');
    }, function myError(response) {
        $scope.deltailcato = response.statusText;
    });

});