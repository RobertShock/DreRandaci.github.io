// Create a JSON file that contains all the information for your blog posts ("blog-posts.json") - hopefully you've been keeping up with it 😉. Validate your JSON file.

// XHR now returns an array
// Loop that iterates over the array, builds up a string, and then puts the string on the DOM (from previous exercise).

const blogContainer = document.getElementById('blogContainer');
const blogAppear = document.getElementById('blogAppear');
const blogHeading = document.getElementById('blogHeading');
const mainContainer = document.getElementById('mainContainer');
// const searchForm = document.getElementById('searchForm');
let blogsArray = [];

function blogsJsonLoad() {
	let blogsData = JSON.parse(this.responseText).blogs;
	domString(blogsData);
	blogsArray = blogsData;
};

const executeThisCodeIfFileErrors = () => {
	console.log('error');
};

let blogsJsonRequest = new XMLHttpRequest;
blogsJsonRequest.addEventListener('load', blogsJsonLoad);
blogsJsonRequest.addEventListener('error', executeThisCodeIfFileErrors);
blogsJsonRequest.open('GET', 'blog-posts.json');
blogsJsonRequest.send();

const domString = (blogs) => {
	for (let i = 0; i < blogs.length; i++) {
		let currentBlog = blogs[i];
		let blog = '';
		blog += `<div class="col-md-4 col-sm-6" id='blog--${i}'>`;
	    blog +=    `<div class="thumbnail set-height">`;
	    blog +=    	`<div class="card-header">`;
		blog +=     	  `<h4 class='text-center'>${currentBlog.title}</h4>`;
	    blog +=     	  `<h5 class='text-center'>${currentBlog.date}</h5>`;
	    blog +=	   	`</div>`;    
	    blog +=    	`<div class="entry">`;
	    blog +=     	 `<p class='text-center'>${currentBlog.content}</p>`;          
	    blog +=    	`</div>`; 
	    blog +=    `</div>`; 
	    blog += `</div>`;          	    
	    writeToDom(blog);
	};
};

const writeToDom = (blog) => {
	blogContainer.innerHTML += blog;
};

const printSelectedBlog = (selectedBlog) => {
	blogAppear.innerHTML = selectedBlog;
};

const printFilteredBlog = (filteredBlog) => {
	mainContainer.innerHTML = '';
	blogAppear.innerHTML = `<h1>${filteredBlog.content}</h1>`;
};

// Whenever the user clicks on a specific blog post card, that blog should appear in a special div (that spans all 12 columns) above all of the blog posts and should show the full content of the blog. 
mainContainer.addEventListener('click', (e) => {
	for (let i = 0; i < blogsArray.length; i++) {
		if (e.target.parentNode.parentNode.parentNode.className === "col-md-4 col-sm-6") {
			let selectedBlog = e.target.parentNode.parentNode.parentNode.innerHTML;
			printSelectedBlog(selectedBlog);			
		} else if (e.target.className === "entry") {
			selectedBlog = e.target.parentNode.parentNode.innerHTML;
			printSelectedBlog(selectedBlog);			
		};	
	};
});

blogHeading.addEventListener('click', () => {
	blogAppear.innerHTML = '';
});

const clearDom = () => {
	mainContainer.innerHTML = '';
};

searchForm.addEventListener('submit', function(e){
	e.preventDefault();	
	let txt = document.getElementById('searchFormInputField').value;
	console.log('you typed this:', txt)
	clearDom();
  	//1. filter blogs array
    let results = blogsArray.filter(function(blog) {
      return blog.content.indexOf(txt) > -1;
    });
    //2. rerun domString
    // printFilteredBlog(results)
    domString(results);
    console.log(results)
});

