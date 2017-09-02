// Create a JSON file that contains all the information for your blog posts ("blog-posts.json") - hopefully you've been keeping up with it 😉. Validate your JSON file.

// XHR now returns an array
// Loop that iterates over the array, builds up a string, and then puts the string on the DOM (from previous exercise).

// let blogs =[];
// let blog1 = {
// 	title: "First few weeks of the code zone",
// 	content: "So far, this whole coding thing has been pretty great. CSS is definitely something I want to be good at because it will most likely frustrate me more than the other languages (look out, JS). I&#39;ve been getting better at understanding the Chrome dev tools, and that is SUPER helpful, especially for layout and just seeing where tf everything is. We had our first JS lesson last night and I&#39;m pumped to see how I digust actually making programs. Stoked!",
// 	date: "07/25/2017"
// };
// let blog2 = {
// 	title: "Javascript: Do you know where YOUR variables are defined?",
// 	content: "Javascript is intimidating and mind bending; so much power with such little code! The possibilites are endless with how you use it. I'm not going to pretend like I fully understand it yet, as I struggled with the YDKJS: Tax Rate challenge but nearly came close to getting it correct. Starting to see some progress and less blank staring at my laptop screen (although, this is likely to come back around as class gets denser!).",
// 	date: "07/28/2017"
// };
// let blog3 = {
// 	title: "Javascript, tho",
// 	content: "So, we had the 'Coin Counter' exercise this week, which basically helped to kick my arse into high gear for what's to come. As frustrating as JS can be, there is an immense satisfaction in finding solutions. Things I learned during this exercise: 1) If in doubt, start wherever you know. Try things. Try a lot of things. Especially in codewars (holy shit, hard af right now but super helpful and fun). 2) When working with others or in groups, make sure to try and tackle one problem at a time. Things can branch off quickly and get murky. Otherwise, I just need to keep practicing and working on as many different problems as possible.",
// 	date: "07/31/2017"
// };
// let blog4 = {
// 	title: "JAVASCRIPT, you're like Panera's day old bread",
// 	content: "Fresh yesterday, stale today, and salty tomorrow! This may seem harsh, but there are positive qualities to this analogy I'd like to promulgate – but before I do that, I will say JS is awesomely challenging. Very algebraic and openly solvent, it has inspred me to relearn some mathematical concepts that have been dead to me for years. As far as being fresh and salty, it is just that; accepting of multitudes of solutions, yet ready to kick you to the curb when you forget to text it a winky face before bed. So far I feel great about it. I just need to work on economizing my actual computations.",
// 	date: "08/03/2017"
// };
// let blog5 = {
// 	title: "Group Project: Tempreture Converter af",
// 	content: "We started our first group project this week. So far, we've just put assembled the github tickets in the project folder. Getting the group brainstorming ideas on how to propagate the different coding tasks has been one of the best parts of class thus far. Having creative and different inputs on how to solve problems is incredibly motivating and inpiring. Team #fontourage is going big.",
// 	date: "08/04/2017"
// };
// let blog6 = {
// 	title: "Group Proj",
// 	content: "",
// 	date: "08/14/2017"
// };
// let blog7 = {
// 	title: "entry",
// 	content: "Now this is a story all about how my life got twist turned upside down, I'd like to take a minute, just sit right there, I'll tell you how I became a software developing extraordinaire.",
// 	date: "08/03/2017"
// };
// blogs.push(blog1);
// blogs.push(blog2);
// blogs.push(blog3);
// blogs.push(blog4);
// blogs.push(blog5);
// blogs.push(blog6);
// blogs.push(blog7);

let blogContainer = document.getElementById("blog-container");

function blogsJsonLoad() {
	let blogsData = JSON.parse(this.responseText).blogs;
	printToDom(blogsData);
};

executeThisCodeIfFileErrors = () => {
	consle.log('error');
};

let blogsJsonRequest = new XMLHttpRequest;
blogsJsonRequest.addEventListener('load', blogsJsonLoad);
blogsJsonRequest.addEventListener('error', executeThisCodeIfFileErrors);
blogsJsonRequest.open('GET', 'blog-posts.json');
blogsJsonRequest.send();

printToDom = (blogs) => {
	for (let i = 0; i < blogs.length; i++) {
		let currentBlog = blogs[i];
		let blog = "";

		blog += `<section class="card-container">`;
	    blog +=    `<div class="card-header">`;
		blog +=       `<h4>${currentBlog.title}</h4>`;
	    blog +=       `<h5>${currentBlog.date}</h5>`;
	    blog +=	   `</div>`;    
	    blog +=    `<div class="entry">`;
	    blog +=      `<p>${currentBlog.content}</p>`;          
	    blog +=    `</div>`; 
	    blog += `</section>`;          
	    writeToDom(blog);
	};
};

writeToDom = (blog) => {
	blogContainer.innerHTML += blog;
};

