var app = angular.module('myApp', [
    'ngRoute', "ngMaterial", "ui.bootstrap", "ngAnimate",
    "ngMessages", 'ngCookies', 'ngResource', 'ngCart', 'ngSanitize', 'ui-notification','angularUtils.directives.dirPagination'
]);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        var templateUrl = 'partials/';
        $routeProvider.
                when('/', {
                    templateUrl: templateUrl + 'home.html',
                    controller: 'homeCtrl',
                    title: "Trang chủ "
                }).
                when('/gioi-thieu', {
                    templateUrl: templateUrl + 'about.html',
                    title: "Giới thiệu "
                }).
                when('/dich-vu', {
                    templateUrl: templateUrl + 'service.html',
                    title: "Dịch vụ "
                }).
                when('/lien-he', {
                    templateUrl: templateUrl + 'contact.html',
                    controller: 'footerCtrl',
                    title: "Liên hệ "
                }).
                when('/gio-hang', {
                    templateUrl: templateUrl + 'shopping-cart.html',
                    controller: 'homeCtrl',
                    title: "Giỏ hàng "
                }).
                when('/chi-tiet/:name-:id', {
                    templateUrl: templateUrl + 'detailproducts.html',
                    controller: 'detailCtrl',
                    title: "Chi tiết "
                }).
                when('/tat-ca-san-pham', {
                    templateUrl: templateUrl + 'allproduct.html',
                    controller: 'prodCtrl',
                    title: "Tất cả sản phẩm "
                }).
                when('/tim-kiem/:key', {
                    templateUrl: templateUrl + 'searchproduct.html',
                    controller: 'searchprodCtrl',
                    title: "Tìm kiếm "
                }).
                when('/danh-muc/:name-:id1.:lv', {
                    templateUrl: templateUrl + 'products.html',
                    controller: 'prodCtrl',
                    title: "Sản phẩm "
                }).
                otherwise({
                    templateUrl: templateUrl + 'error404.html',
                    title: "Không tìm thấy "
                });

    }]);