app.controller("homeCtrl", function ($scope, $http, $rootScope) {
    $scope.$emit('LOAD');

    $scope.random = function () {
        return 0.5 - Math.random();
    }

    $http({method: 'GET', url: $scope.urlProdCate + 'get-all-by-shop-name-and-level?shop_name=' + $scope.nameshop + '&level=1&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.lv1category = response.data;
    }, function myError(response) {
        $scope.lv1category = response.statusText;
    });

    $http({method: 'GET', url: $scope.urlWebSet + 'get-all-image-slider-by-shop-name?shop_name=' + $scope.nameshop + '&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.imgSlide = response.data;
    }, function myError(response) {
        $scope.imgSlide = response.statusText;
    });

    $http({method: 'GET', url: $scope.urlProds + 'get-all-by-shop-name-and-is-hottest?shop_name=' + $scope.nameshop + '&is_hottest=1&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.hotProds = makeRandom(response.data);
    }, function myError(response) {
        $scope.hotProds = response.statusText;
    });

    function makeRandom(inputArray) {
        angular.forEach(inputArray, function (value) {
            value.random = Math.random();
        });
        return inputArray;
    }

    $http({method: 'GET', url: $scope.urlProds + 'get-all-by-shop-name-and-category-id-and-level?shop_name=' + $scope.nameshop + '&category_id=741&level=1&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.prodCategory1 = response.data;
        $scope.$emit('UNLOAD');
    }, function myError(response) {
        $scope.prodCategory1 = response.statusText;
    });

    $http({method: 'GET', url: $scope.urlProds + 'get-all-by-shop-name-and-category-id-and-level?shop_name=' + $scope.nameshop + '&category_id=742&level=1&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.prodCategory2 = response.data;
        $scope.$emit('UNLOAD');
    }, function myError(response) {
        $scope.prodCategory2 = response.statusText;
    });

    $http({method: 'GET', url: $scope.urlProds + 'get-all-by-shop-name-and-is-newest?shop_name=' + $scope.nameshop + '&is_newest=1&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.prodNew = makeRandom(response.data);
        $scope.$emit('UNLOAD');
    }, function myError(response) {
        $scope.prodNew = response.statusText;
    });

    $http({method: 'GET', url: $scope.urlProds + 'get-all-by-shop-name-and-is-promote?shop_name=' + $scope.nameshop + '&is_promote=1&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.prodPromote = response.data;
        $scope.$emit('UNLOAD');
    }, function myError(response) {
        $scope.prodPromote = response.statusText;
    });
    
    $http({method: 'GET', url: $scope.urlWebSet + 'get-all-partner-by-shop-name?shop_name=' + $scope.nameshop + '&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.partners = response.data;
        $scope.$emit('UNLOAD');
    }, function myError(response) {
        $scope.partners = response.statusText;
    });
});