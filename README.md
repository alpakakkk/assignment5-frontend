# Assignment #5 — JavaScript Basics (DOM Manipulation & Events)

**Student:** Almanzor Kamzeyev    
**Group:** SE-2540

## Project overview
This project demonstrates JavaScript objects and data types, arithmetic calculations, HTML form event handling, and DOM list manipulation. It uses plain HTML, CSS and JavaScript without libraries.

## Tasks completed

### Part 1: Profile Object, Data Types & Arithmetic
**Task 1 — Personal Info Object:** `const userProfile` includes `name` (string), `birthYear` (number), `isDeveloper` (boolean), and `hobbies` (array).  
**Task 2 — Arithmetic Calculations:** The page calculates approximate age using `new Date().getFullYear() - birthYear`, counts hobbies with `.length`, and logs the results in the browser console.

**Screenshot — Part 1:**
`![Part 1](screenshots/image1.png)`

### Part 2: Form Input & Event Responses
**Task 3 — HTML Form Setup:** The form has Username and Birth Year inputs and a **Create / Update Profile** submit button.  
**Task 4 — Event Listener:** A `submit` event listener calls `preventDefault()`, validates inputs, updates the `userProfile` object and refreshes the displayed data.

**Screenshot — Part 2:**
`![Part 2](screenshots/image2.png)`

### Part 3: DOM List Manipulation
**Task 5 — Creating & Removing Elements:** A `<ul>` displays hobbies. **Add Item** appends a new `<li>`; **Remove Item** deletes the last item. The displayed hobby counter is updated too.

**Screenshot — Part 3:**
`![Part 3](screenshots/image3.png)`

## Files
- `index.html`: page markup, form, profile and list
- `style.css`: layout, colors and responsive styling
- `script.js`: object, arithmetic calculations, DOM updates and event handlers
- `screenshots/`: screenshots for the report (to be added after running the project)

## Work process summary
I created the basic HTML structure, styled the page in CSS, defined a JavaScript profile object, used arithmetic operators to calculate age and hobbies count, connected form submission to an event listener, and used DOM methods to create and remove list elements. Finally, I tested the interactions in the browser.

## Website link
