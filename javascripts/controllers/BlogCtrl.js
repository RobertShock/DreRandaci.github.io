'use strict';

app.controller('BlogCtrl', function( $scope,  FirebaseService ){
    const getBlogs = () => {
        FirebaseService.getAllBlogs().then((results) => {            
            $scope.blogs = results; 
        }).catch((err) => {
            console.log('error in getAllBlogs:', err);
        });
    };
    getBlogs();
});