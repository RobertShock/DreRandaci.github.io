// 1. (x)Create a main.js file and link to it in your blog.html
// 2. (x)Create an html element with the id ‘blog-holder’
// 3. (x)Make an array called blogs
// 4. (x)Add each of your existing blogs to the blogs array by making them into objects with the following key, value pairs: title, content, date (you should have at least 5 blog objects)
// 5. Loop over the blogs array and build up the HTML card elements using the values from your blog objects
// 6. Add the HTML you created in the last step to the blog-holder element

let blogs =[];
let blog1 = {
	title: "First few weeks of code lyfe",
	content: "So far, this whole coding thing has been pretty great. CSS is definitely something I want to be good at because it will most likely frustrate me more than the other languages (look out, JS). I&#39;ve been getting better at understanding the Chrome dev tools, and that is SUPER helpful, especially for layout and just seeing where tf everything is. We had our first JS lesson last night and I&#39;m pumped to see how I digust actually making programs. Stoked!",
	date: "07/25/2017"
};
let blog2 = {
	title: "Javascript: Do you know where YOUR variables are defined?",
	content: "Javascript is intimidating and mind bending; so much power with such little code! The possibilites are endless with how you use it. I'm not going to pretend like I fully understand it yet, as I struggled with the YDKJS: Tax Rate challenge but nearly came close to getting it correct. Starting to see some progress and less blank staring at my laptop screen (although, this is likely to come back around as class gets denser!).",
	date: "07/28/2017"
};
let blog3 = {
	title: "Javascript, tho",
	content: "So, we had the 'Coin Counter' exercise this week, which basically helped to kick my arse into high gear for what's to come. As frustrating as JS can be, there is an immense satisfaction in finding solutions. Things I learned during this exercise: 1) If in doubt, start wherever you know. Try things. Try a lot of things. Especially in codewars (holy shit, hard af right now but super helpful and fun). 2) When working with others or in groups, make sure to try and tackle one problem at a time. Things can branch off quickly and get murky. Otherwise, I just need to keep practicing and working on as many different problems as possible.",
	date: "07/31/2017"
};
let blog4 = {
	title: "JAVASCRIPT, you're like Panera's day old bread",
	content: "Fresh yesterday, stale today, and salty tomorrow! This may seem harsh, but there are positive qualities to this analogy I'd like to promulgate – but before I do that, I will say JS is awesomely challenging. Very algebraic and openly solvent, it has inspred me to relearn some mathematical concepts that have been dead to me for years. As far as being fresh and salty, it is just that; accepting of multitudes of solutions, yet ready to kick you to the curb when you forget to text it a winky face before bed. So far I feel great about it. I just need to work on economizing my actual computations.",
	date: "08/03/2017"
};
let blog5 = {
	title: "Group Project: Tempreture Converter af",
	content: "We started our first group project this week. So far, we've just put assembled the github tickets in the project folder. Getting the group brainstorming ideas on how to propagate the different coding tasks has been one of the best parts of class thus far. Having creative and different inputs on how to solve problems is incredibly motivating and inpiring. Team #fontourage is going big.",
	date: "08/04/2017"
};
let blog6 = {
	title: "Group Proj",
	content: "",
	date: "08/14/2017"
};
let blog7 = {
	title: "entry",
	content: "Now this is a story all about how my life got twist turned upside down, I'd like to take a minute, just sit right there, I'll tell you how I became a software developing extraordinaire.",
	date: "08/03/2017"
};
blogs.push(blog1);
blogs.push(blog2);
blogs.push(blog3);
blogs.push(blog4);
blogs.push(blog5);
blogs.push(blog6);
blogs.push(blog7);

let blogContainer = document.getElementById("blog-container");

for (let i = 0; i < blogs.length; i++) {
	let currentBlog = blogs[i];
	let blog = "";

	blog += '<section class="card-container">';
    blog +=    '<div class="card-header">';
	blog +=       '<h4>' + currentBlog.title + '</h4>';
    blog +=       '<h5>' + currentBlog.date + '</h5>';
    blog +=	   '</div>';    
    blog +=    '<div class="entry">';
    blog +=      '<p>' + currentBlog.content + '</p>'          
    blog +=    '</div>' 
    blog += '</section>'          

// console.log(blog);
blogContainer.innerHTML += blog;
};

