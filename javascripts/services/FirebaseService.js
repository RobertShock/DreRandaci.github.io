// 'use strict';

// const dom = require('./dom');
// let blogsArray = [];
// let firebaseKey = '';

// const setKey = ( key ) => {
//     firebaseKey = key;
//     retrieveBlogs();
// };

// const blogsRequest = () => {
//     let blogsList = [];
//     return new Promise(( resolve, reject ) => {
//         $.ajax(`${firebaseKey.databaseURL}/blogs.json?orderBy="id"`).then((blogs) => {
//             if (blogs != null) {
//             Object.keys(blogs).forEach(( key ) => {
//                 blogs[key].id = key;
//                 blogsList.push(blogs[key]);
//             });
//         }
//             resolve(blogsList);
//         }).catch(( err ) => {

//         });
//     });
// };

// const retrieveBlogs = () => {
//     blogsRequest().then((results) => {
//         blogsArray = results;
//         showResults(results);                
//     }).catch((error) => {
//         console.log('error in retrieveBlogs:', error);
//     });
// };

// const showResults = (blogs) => {
//     dom.clearDom();
//     dom.buildBlogCards(blogs);
// };

// const getBlogs = () => {
//     return blogsArray;
// };

// module.exports = { retrieveBlogs, getBlogs, setKey };
// /////////////////////////////////////
// 'use strict';

// const firebaseApi = require('./firebaseApi');

// const apiKeys = () => {
//     return new Promise((resolve, reject) => {
//         $.ajax('../db/apiKeys.json').done((data) => {
//             resolve(data.apiKeys);
//         }).fail((error) => {
//             reject(error);
//         });
//     });
// };

// const retrieveKeys = () => {
//     apiKeys().then((results) => {
//         firebaseApi.setKey(results.firebaseKeys);
//         firebase.initializeApp(results.firebaseKeys);        
//     }).catch((error) => {
//         console.log('error in retrieveKeys:', error);
//     });
// };

// module.exports = { retrieveKeys };