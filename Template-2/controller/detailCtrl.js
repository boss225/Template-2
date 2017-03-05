app.controller("detailCtrl", function ($http, $scope, $routeParams) {
    $scope.param2 = $routeParams.id;
    $scope.param3 = $routeParams.id1;
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

    $http({method: 'GET', url: $scope.urlProds + 'get-product-by-shop-name-and-id?shop_name=' + $scope.nameshop + '&id=' + $scope.param2 + '&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.detailprods = response.data;
        angular.forEach($scope.detailprods, function (value, key) {
            $scope.imgP1 = $scope.urlImage + value.image;
            $scope.imgP0 = $scope.imgP1;
            $scope.imgP2 = $scope.urlImage + value.img_child_2;
            $scope.imgP3 = $scope.urlImage + value.img_child_3;
        });
        $scope.changeimg = function (key) {
            $scope.imgP0 = key;
        };
    }, function myError(response) {
        $scope.detailprods = response.statusText;
    });

    $http({method: 'GET', url: $scope.urlProds + 'get-all-product-by-shop-name-and-product-id-and-number-limit-return?shop_name=' + $scope.nameshop + '&id=' + $scope.param2 + '&limit=-1&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.relatedprods = response.data;
        $scope.$emit('UNLOAD');
    }, function myError(response) {
        $scope.relatedprods = response.statusText;
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

}).controller("searchprodCtrl", function ($http, $scope, $routeParams, $location) {
    $scope.searchkey = $routeParams.key;
    $scope.param3 = $routeParams.id1;

    $scope.$emit('LOAD');
    $scope.submit = function () {
        if ($scope.keysearchs) {
            $location.path('/tim-kiem/' + $scope.keysearchs);
            $scope.keysearchs = "";
        }
    };

    $scope.random = function () {
        return 0.5 - Math.random();
    };

    function makeRandom(inputArray) {
        angular.forEach(inputArray, function (value) {
            value.random = Math.random();
        });
        return inputArray;
    }

    $http({method: 'GET', url: $scope.urlSearchProd + 'search-suggest-all-by-shop-name-and-keyword?shop_name=' + $scope.nameshop + '&keyword_enter=' + $scope.searchkey + '&limit=-1&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.searchprod = response.data;
        $scope.$emit('UNLOAD');
    }, function myError(response) {
        $scope.searchprod = response.statusText;
    });

    $http({method: 'GET', url: $scope.urlProdCate + 'get-all-by-shop-name-and-level?shop_name=' + $scope.nameshop + '&level=1&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.lv1category = response.data;
    }, function myError(response) {
        $scope.lv1category = response.statusText;
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

