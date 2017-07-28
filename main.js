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
	title: "Javascript: Where am I?",
	content: "Javascript is intimidating and mind bending; so much power with such little code! The possibilites are endless with how you use it. I'm not going to pretend like I fully understand it yet, as I struggled with the YDKJS: Tax Rate challenge but nearly came close to getting it correct. Starting to see some progress and less blank staring at my laptop screen (although, this is likely to come back around as class gets denser!).",
	date: "07/28/2017"
};
let blog3 = {
	title: "entry3",
	content: "Now this is a story all about how my life got twist turned upside down, I'd like to take a minute, just sit right there, I'll tell you how I became a software coding extraordinaire.",
	date: "07/30/2017"
};
let blog4 = {
	title: "entry4",
	content: "Now this is a story all about how my life got twist turned upside down, I'd like to take a minute, just sit right there, I'll tell you how I became a software coding extraordinaire.",
	date: "08/01/2017"
};
let blog5 = {
	title: "entry5",
	content: "Now this is a story all about how my life got twist turned upside down, I'd like to take a minute, just sit right there, I'll tell you how I became a software coding extraordinaire.",
	date: "08/03/2017"
};
blogs.push(blog1);
blogs.push(blog2);
blogs.push(blog3);
blogs.push(blog4);
blogs.push(blog5);
console.log(blogs)
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


