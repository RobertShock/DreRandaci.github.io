'use strict';

const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

const mainContainer = $('#mainContainer');
const blogContainer = $('#blogContainer');
const blogHeading = $('#blogHeading');
const blogAppear = $('#blogAppear');
const searchForm = $('#searchForm');

const showSelectedBlog = () => {
    $(blogContainer).click( (e) => {        
        let blogsArray = firebaseApi.getBlogs();
        for (let i = 0; i < blogsArray.length; i++) {            
            if (e.target.parentNode.parentNode.parentNode.className === "col-md-4 col-sm-6") {
                let selectedBlog = e.target.parentNode.parentNode.parentNode.innerHTML;
                dom.printSelectedBlog(selectedBlog);			
            } else if (e.target.className === "entry") {
                let selectedBlog = e.target.parentNode.parentNode.innerHTML;
                dom.printSelectedBlog(selectedBlog);			
            }	
        }
    });
};

const clearBlogHeading = () => {
    $(blogHeading).click(() => {
        blogAppear.html('');
    });
};

const searchBlogs = () => {    
    $(searchForm).submit( (e) => {                
        e.preventDefault();	        
        dom.clearDom();
        let txt = $('#searchFormInputField').val(); 
        let blogsArray = firebaseApi.getBlogs();
        let results = blogsArray.filter(( blog ) => {
            return blog.content.indexOf( txt ) > -1;
        });        
        dom.buildBlogCards(results);
    });
};

const fadeNavbarDown = () => {
    $(window).scroll( () => {
        if ($(window).scrollTop() > 100) {
            $('.main_h').addClass('sticky');
        } else {
            $('.main_h').removeClass('sticky');
        }
    });
};

const init = () => {
    fadeNavbarDown();
    searchBlogs();
    clearBlogHeading();
    showSelectedBlog();
};

module.exports = { init };