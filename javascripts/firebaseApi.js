'use strict';

const dom = require('./dom');
let blogsArray = [];
let firebaseKey = '';

const setKey = ( key ) => {
    firebaseKey = key;
};

const retrieveBlogs = () => {
    blogsRequest().then((results) => {
        // blogsArray = results;
        // showResults(results);                
    }).catch((error) => {
        console.log('error in retrieveBlogs:', error);
    });
};

const blogsRequest = () => {
    return new Promise((resolve, reject) => {
        $.ajax('../db/blogs.json').done((data) => {
            resolve(data.blogs);
        }).fail((error) => {
            reject(error);
        });
    });
};

const showResults = (blogs) => {
    dom.clearDom();
    dom.buildBlogCards(blogs);
};

const getBlogs = () => {
    return blogsArray;
};

module.exports = { retrieveBlogs, getBlogs, setKey };
