<img src="https://media2.giphy.com/media/26gR0BuSZabqSyNig/giphy.gif?cid=790b76117c49e97151cdd7db0ae5ee9434efee76b06afabf&rid=giphy.gif&ct=g">

# bookish-winner

A website to celebrate the amazing Christmas holiday! Click, hover or press any key for some some Christmas surprises.
Follow the link https://bookish-winner.netlify.app/ to view my site.

# Installation

1.  Clone the repository bookish-winner from my GitHub: JennAnd/bookish-winner.
2.  Start a localhost server to view my project: localhost:8000.
3.  Add /index.php at the end of the URL. Now you have access.

# Code Review

Code Review written by Theo Sandell.

1. `index.js:15-25` - These functions can be moved out of the event listener.
2. `index.js:19` - This functions should be written as an arrow function.
3. `index.js:40` - Here you should use textContent instead of innerHTML for security reasons. Risk for cross site scripting attack.
4. `index.js:43-45` - Element selectors should be defined on top of the javascript file.
5. `index.js:48` - Not using event argument.
6. `index.js:55` - Element selectors should be defined on top of the javascript file.
7. `index.js:56` - Not using event argument.

# Testers

Tested by the following people:

1. Amanda Karlsson
2. Hanna Rosenberg
