401 JS --  Lab 27 Reddit Search Engine
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
* Students will learn to test react components using jest and enzyme 
* Students will learn to manage controlled inputs
* Students will learn to pass data from parrent to child through props

## Requirements  
#### Configuration  
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.gitignore** -- with a robust gitignore
* **.eslintrc** -- with the class .eslintrc file
* **.eslintignore** -- with the class .eslintignore
* **.babelrc** -- with all dependencies and dev-dependencies 
* **package.json** -- with all dependencies and dev-dependencies 
* **yarn.lock** -- with the yarn lockfile
* **webpack.config.js** -- with webpack config
* **src/** -- conating the froned code
* **src/main.js** -- containing the entire app
* **src/style** -- conating your sass
* **src/style/main.scss** -- conating the froned code
 
#### Feature Tasks 
Create the following components and structure them according to the following diagram.  
```
App
  SearchForm
  SearchResultList
``` 
###### App Component
* should contain all of the **application state** 
* should contain methods for modifying the application state
* the state should have a topics array for holding the results of the search

###### SearchForm Component
* should contain a text input for the user to supply a reddit board to look up
* should contain a number input for the user to limit the number of results to return 
  * the number must be less than 0 and greater than 100
* `onSubmit` the form should make a request to reddit 
  * it should make a get request to `http://reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`
  * on success it should pass the results to the application state
  * on failure it should add a class to the form called error and turn the form's inputs borders red

###### SearchResultList 
* If there are topics in the application state it should display the unordered list 
* Each list item in the unordered list should conain the following
  * an anchor tag with a href to the topic.url 
    * inside the anchor a heading tag with the topic.title 
    * inside the ancor a p tag with the number of topic.ups 

#### Test
* Test RedditSearchForm
  * Test your onChange handler
  * Test your onSubmit handler
* Test RedditTopicListing 
  * make sure your view has the apropriate content based of the state of your application

####  Documentation  
Write a description of the project in your README.md
