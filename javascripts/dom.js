'use strict';

const blogContainer = $('#blogContainer');
const blogAppear = $('#blogAppear');
const blogHeading = $('#blogHeading');
const mainContainer = $('#mainContainer');

const buildBlogCards = (blogs) => {    
    let blogCard = '';
	blogs.forEach( (blog, i) => {	
        if (i % 3 === 0) {
            blogCard += `<div class="row">`;
        }        		
		blogCard += `<div class="col-md-4 col-sm-6" id='blog--${i}'>`;
	    blogCard +=    `<div class="thumbnail set-height">`;
	    blogCard +=    	`<div class="card-header">`;
		blogCard +=     	  `<h4 class='text-center'>${blog.title}</h4>`;
	    blogCard +=     	  `<h5 class='text-center'>${blog.date}</h5>`;
	    blogCard +=	   	`</div>`;    
	    blogCard +=    	`<div class="entry">`;
	    blogCard +=     	 `<p class='text-center'>${blog.content}</p>`;          
	    blogCard +=    	`</div>`; 
	    blogCard +=    `</div>`; 
        blogCard += `</div>`;
    if (i % 3 === 2 || i === blogs.length - 1) {
        blogCard += `</div>`;
    }          	    	    
    });
    writeBlogToDom(blogCard);
};

const clearDom = () => {
    $(blogContainer).empty();
};

const writeBlogToDom = (blogCard) => {
	$(blogContainer).append(blogCard);
};

const printSelectedBlog = (selectedBlog) => {
	$(blogAppear).html(selectedBlog);
};

module.exports = { clearDom, buildBlogCards, printSelectedBlog };