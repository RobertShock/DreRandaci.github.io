'use strict';

const data = require('./data');
const events = require('./events');

$(document).ready(function() {
	data.retrieveBlogs();
	events.searchBlogs();
	events.clearBlogHeading();
	events.showSelectedBlog();
	events.fadeNavbarDown();
});