'use strict';

const data = require('./data');
const dom = require('./dom');

const mainContainer = $('#mainContainer');
const blogContainer = $('#blogContainer');
const blogHeading = $('#blogHeading');
const blogAppear = $('#blogAppear');
const searchForm = $('#searchForm');

const showSelectedBlog = () => {
    $(blogContainer).click( (e) => {        
        let blogsArray = data.getBlogs();
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

// Whenever the user clicks on a specific blog post card, that blog should appear in a special div (that spans all 12 columns) above all of the blog posts and should show the full content of the blog. 
const clearBlogHeading = () => {
    $(blogHeading).click(() => {
        blogAppear.html('');
    });
};

const clearDom = () => {
    mainContainer.html('');
};

const searchBlogs = () => {    
    $(searchForm).submit( (e) => {        
        clearDom();
        e.preventDefault();	        
        let txt = $('#searchFormInputField').val();       
        let blogsArray = data.getBlogs();
        let results = blogsArray.filter((blog) => {
            return blog.content.indexOf(txt) > -1;
        });        
        dom.buildBlogCards(results);
    });
};

module.exports = { searchBlogs, clearBlogHeading, showSelectedBlog };