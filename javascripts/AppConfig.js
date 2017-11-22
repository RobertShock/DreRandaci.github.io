'use strict';

app.run(function(FIREBASE_CONFIG){
    firebase.initializeApp(FIREBASE_CONFIG);    
});

app.config(function($routeProvider){
    $routeProvider
    .when( "/about", {
        templateUrl: 'partials/about.html',
        controller: 'NameOfPageController'
    })
    .when( "/work", {
        templateUrl: 'partials/projects.html',
        controller: 'NameOfPageController'
    })
    .otherwise('/main-view.html');
});