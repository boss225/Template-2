app.controller("footerCtrl", function ($scope, $http) {

    $http({method: 'GET', url: $scope.urlOtherSet + 'get-all-contact-by-shop-name?shop_name=' + $scope.nameshop + '&language=vi-VN&is_return_array=0'
    }).then(function mySucces(response) {
        $scope.contacts = response.data;
        $scope.$emit('UNLOAD');
    }, function myError(response) {
        $scope.contacts = response.statusText;
    });
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
        $('.w3-blue').fadeIn(500);
    } else {
        $('.w3-blue').fadeOut(500);
    }
});
function page_scroll2top() {
    $('html,body').animate({
        scrollTop: 0
    }, 800);
}