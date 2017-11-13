'use strict';

const events = require('./events');
const carousel = require('../lib/node_modules/bootstrap/js/carousel');
const apiKeys = require('./apiKeys');

$(document).ready(function() {
	events.init();
	apiKeys.retrieveKeys(); 
	$("#carousel-example-generic").carousel({
		interval : false
	});
});