# DreRandaci.github.io

- [x] Create 2 new HTML pages: Projects and About Me
- [x] Add links to these 2 new pages to your existing navigation bar.
- [x] Update your navigation bar with the following interactivity.

- [x] When the user hovers over one of the links, the color of the text should change.
- [x] When the user hovers over one of the links, the background color of the element that contains the link should change.
- [x] When the user clicks on one of the links, the element that contains the link should grow in size by 5px on the left and right.

(start thinking about fonts and what will be in a flexbox)
	font-family: 'Gruppo', cursive;
	font-family: 'Lato', sans-serif;
	font-family: 'Montserrat', sans-serif;

- [x] Create 1 new HTML page: Blog
- [x] Add a link to this blog page in your existing navigation.
- [x] Create at least 5 blog entry "cards" for now. Each card should have:
	- [x] A header section containing an H4 title and the date the blog was written.
    - [x] A content section containing your body of text. These entries should be themed around your journey into development. As you discover new tricks, tips and tools, write about your discovery. Write about what you have tried and why it did or did not work. These entries will be helpful for you as you speak with other members of the development community (and will be helpful when you are frustrated - look how far you've come). For now, you can use placeholder text, but this should be your place to continue writing throughout this course.
- [x] Your page should follow this mockup. Use Flexbox to achieve this: 

- [x] Open your main.js file and blog.html.
- [x] Create a JSON file that contains all the information for your blog posts ("blog-posts.json") - hopefully you've been keeping up with it 😉. 
- [x] Validate your JSON file.
- [x] Create an XHR to load the data from your local json file.
- [x] Loop over the blogs array returned from your XHR and build up the HTML card elements using the values from your blog objects.
- [x] Add the HTML you created in the last step to the blog-holder element.

- [x] Open your main.js file and blog.html.

- [x] Grid System: Use the grid system to display your blog entries. You should have 3 blog articles per row.

- [x] Bootstrap Nav Bar: Should contain 3 elements:
	- [x] Your "Logo" or personal bio site title
	- [x] Input bar to search your blog posts (Logic specs for this in a later step). NOTE: This should only be visible from the Nav Bar on your Blog Page.
	- [x] All of the links to your other pages on your website
	Blog Page

- [x] The elements on this page should utilize the full width of the screen.
- [x] Update each of your blog posts so they all have a set height. Cut off any of the text that expands beyond the set height using some CSS. (Hint: checkout the overflow property).
- [x] Whenever the user clicks on a specific blog post card, that blog should appear in a special div (that spans all 12 columns) above all of the blog posts and should show the full content of the blog. 
- [x] When the user clicks on another blog post, it should replace the content of this special div with the content of the new blog post the user selected.

Bonus: Search

- [] Whenever the user types in the search bar, it should filter the blog posts. EG: The user types in "abou", the only remaining blog cards showing should be ones where your content contains the string "abou" somewhere.
- [] Add an array of "tags" to each of your blog post entries. These can be displayed on the card or not, your choice. 
- [] Make it so the search function only applies to these tags. EG: The user types in "func", the only remaining blog cards showing should be ones where your tags array contains the string "func" at some index in the array.

### Add Jquery to your project for any DOM manipulation.

None of the following should no longer exist in your project:

- [x] document.getElementById
- [x] XHRHttpRequest
- [] addEventListener
- [] parentNode
- [] childNode
- [] siblingNode
- [] any other dom traversal with the word node

#### make use of jquery things like:
- $.get
- .click
- .children
- .parent
- .sibling

Add SASS to your project for all styling. You will need to change your Gruntfile and add an NPM package.

None of the following should exist in your project:

- [] Hex colors (except in variable definitions)
- [] Lots of repetative CSS - if classes share the same properties you should define that in one place and extend where needed
- [] defining the class each time for different pseudoclasses ex. having a .card and a .card:hover - use sass nesting
- [] You should make use of SASS things like:
- Variables for colors
- Extend common style
- Nest your classes