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

const searchBlogs = () => {    
    $(searchForm).submit( (e) => {                
        e.preventDefault();	        
        dom.clearDom();
        let txt = $('#searchFormInputField').val(); 
        let blogsArray = data.getBlogs();
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
    
    // // Mobile Navigation
    // $('.mobile-toggle').click(function() {
    //     if ($('.main_h').hasClass('open-nav')) {
    //         $('.main_h').removeClass('open-nav');
    //     } else {
    //         $('.main_h').addClass('open-nav');
    //     }
    // });
    
    // $('.main_h li a').click(function() {
    //     if ($('.main_h').hasClass('open-nav')) {
    //         $('.navigation').removeClass('open-nav');
    //         $('.main_h').removeClass('open-nav');
    //     }
    // });
    
    // // navigation scroll lijepo radi materem
    // $('nav a').click(function(event) {
    //     var id = $(this).attr("href");
    //     var offset = 70;
    //     var target = $(id).offset().top - offset;
    //     $('html, body').animate({
    //         scrollTop: target
    //     }, 500);
    //     event.preventDefault();
    // });

module.exports = { searchBlogs, clearBlogHeading, showSelectedBlog, fadeNavbarDown };