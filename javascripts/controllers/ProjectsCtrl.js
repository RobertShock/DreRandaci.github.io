'use strict';

app.controller('ProjectsCtrl', function( $scope, FirebaseService ){
    
    const getProjects = () => {
        FirebaseService.getAllProjects().then((results) => {            
            $scope.projects = results; 
            console.log(results);
        }).catch((err) => {
            console.log('error in getAllProjects:', err);
        });
    };
    getProjects();
});