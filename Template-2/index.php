<!DOCTYPE html>
<html ng-app="myApp">
    <head>
        <title>The Fruit Shop</title>
        <link rel="shortcut icon" href="images/logo-mfruit.jpg" type="image/x-icon">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <base href="/">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" type="text/css" media="screen" />
        <link href="css/owl.carousel.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/owl.theme.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/angular-material.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/w3.css" rel="stylesheet" type="text/css"/>
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/style.css" rel="stylesheet" type="text/css"/>
        <link href="css/notification-style.css" rel="stylesheet" type="text/css"/>

    </head>
    <body ng-controller="mainCtrl">
        <header ng-include="'partials/header.html'"></header>
        <section ng-view>
            
        </section>
        <footer ng-include="'partials/footer.html'"></footer>
    </body>
    <script src="js/jquery.min.js" type="text/javascript"></script>
    <script src="js/angular.min.js" type="text/javascript"></script>
    <script src="js/angular-route.min.js" type="text/javascript"></script>
    <script src="js/angular-cookies.min.js" type="text/javascript"></script>
    <script src="js/ngCart.min.js" type="text/javascript"></script>
    <script src="js/angular-locate_vi-vn.js" type="text/javascript"></script>
    <script src="js/angular-ui-notification.js" type="text/javascript"></script>
    <script src="js/angular-sanitize.min.js" type="text/javascript"></script>
    <script src="js/angular-material.min.js" type="text/javascript"></script>
    <script src="js/angular-animate.min.js" type="text/javascript"></script>
    <script src="js/angular-aria.min.js" type="text/javascript"></script>
    <script src="js/angular-messages.min.js" type="text/javascript"></script>
    <script src="js/angular-resource.min.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="js/ui-bootstrap-tpls-1.2.5.min.js" type="text/javascript"></script>
    <script src="js/dirPagination.js" type="text/javascript"></script>
    <script src="js/owl.carousel.min.js" type="text/javascript"></script>
    <script src="js/app.js" type="text/javascript"></script>
    <script src="js/smoothScroll.min.js" type="text/javascript"></script>
    <script src="controller/mainCtrl.js" type="text/javascript"></script>
    <script src="controller/homeCtrl.js" type="text/javascript"></script>
    <script src="controller/headerCtrl.js" type="text/javascript"></script>
    <script src="controller/footerCtrl.js" type="text/javascript"></script>
    <script src="controller/prodCtrl.js" type="text/javascript"></script>
    <script src="controller/detailCtrl.js" type="text/javascript"></script>
</html>
