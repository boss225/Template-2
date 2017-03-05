app.controller("headerCtrl", function ($scope, $http) {

    $http({method: 'GET', url: $scope.urlOtherSet + 'get-logo-by-shop-name?shop_name=' + $scope.nameshop + ''
    }).then(function mySucces(response) {
        $scope.logo = response.data;
    }, function myError(response) {
        $scope.logo = response.statusText;
    });

    $http({method: 'GET', url: $scope.urlProdCate + 'get-all-by-shop-name-and-level?shop_name=' + $scope.nameshop + '&level=1&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.lv1category = response.data;
    }, function myError(response) {
        $scope.lv1category = response.statusText;
    });
});