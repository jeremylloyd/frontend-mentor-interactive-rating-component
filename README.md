# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/screenshot_rating.PNG)
![](./images/screenshot_thankyou.PNG)

### Links

- Solution URL: [Github](https://github.com/jeremylloyd/frontend-mentor-interactive-rating-component)
- Live Site URL: [Github Pages](https://jeremylloyd.github.io/frontend-mentor-interactive-rating-component/)

## My process

### Built with

- HTML
- CSS
- Vanilla JS

### What I learned

My friend taught me a lot about implementing JS:
- The `button` HTML element can 
  - All JS functions referenced by the button need to be loaded in the <head> of the webpage using the <script> tag.
  - If required, the JS can be loaded after the page is loaded by adding the defer tag
- A JS function can be used to adjust the page style dynamically by assigning and removing classes to certain elements
- The page state can be controlled without changing URL by adjusting the `.style.display` property. This configuration means you keep all the states of your web page in the HTML, and hiding all but one using `display: None` until the user changes the state

As for non-JS learnings:
- Setting the `background-image` to a subtle `radial-gradient` is an easy way to make it look modern
- Thinking about the different states before writing the HTML can help you come up with good classes and IDs in the long-run