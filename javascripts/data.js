'use strict';

const dom = require('./dom');
let blogsArray = [];

const blogsRequest = () => {
    return new Promise((resolve, reject) => {
        $.ajax('../db/blog-posts.json').done((data) => {
            resolve(data.blogs);
        }).fail((error) => {
            reject(error);
        });
    });
};

const retrieveBlogs = () => {
    blogsRequest().then((results) => {
        blogsArray = results;
        showResults(results);                
    }).catch((error) => {
        console.log('error in retrieve:', error);
    });
};

const showResults = (blogs) => {
    dom.clearDom();
    dom.buildBlogCards(blogs);
};

const getBlogs = () => {
    return blogsArray;
};

module.exports = { retrieveBlogs, getBlogs };