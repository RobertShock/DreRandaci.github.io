'use strict';

const firebaseApi = require('./firebaseApi');

const apiKeys = () => {
    return new Promise((resolve, reject) => {
        $.ajax('../db/apiKeys.json').done((data) => {
            resolve(data.apiKeys);
        }).fail((error) => {
            reject(error);
        });
    });
};

const retrieveKeys = () => {
    apiKeys().then((results) => {
        console.log('results:', results);
        firebaseApi.setKey(results.firebaseKeys);
        firebase.initializeApp(results.firebaseKeys);        
    }).catch((error) => {
        console.log('error in retrieveKeys:', error);
    });
};

module.exports = { retrieveKeys };