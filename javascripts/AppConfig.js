'use strict';

app.run(function(FIREBASE_CONFIG){
    firebase.initializeApp(FIREBASE_CONFIG);    
});

// app.config(function($routeProvider){
//     $routeProvider
//     .when( "/about", {
//         templateUrl: 'partials/about.html',
//         controller: 'AboutCtrl'
//     })
//     .when( "/projects", {
//         templateUrl: 'partials/projects.html',
//         controller: 'ProjectsCtrl'
//     })
//     .when( "/blog", {
//         templateUrl: 'partials/blog.html',
//         controller: 'BlogCtrl'
//     })
//     .when( "/main-view", {
//         templateUrl: 'partials/main-view.html',
//         controller: 'MainViewCtrl'
//     })
//     .otherwise('/main-view');
// });