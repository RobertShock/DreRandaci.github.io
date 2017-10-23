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
		blogCard += `<div class="col-md-4 col-padding">`;
		blogCard +=  `<div class="panel panel-default">`;
		// blogCard +=	`<img src="..." alt="...">`;
		blogCard +=		`<div class="panel-heading"><h3>${blog.title}</h3><p>${blog.date}</p></div>`;
		blogCard +=	  	`<div class="panel-body"><p>${blog.content}</p></div>`;
		// blogCard +=	  		`<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>`;
		blogCard += `</div>`;
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