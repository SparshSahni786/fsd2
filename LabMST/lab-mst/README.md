Question 1 – Counter Application using useState
Task

Create a simple React Counter Application that:

Displays a number on the screen
Has two buttons: Increment and Decrement
Updates the number when buttons are clicked
Example Folder Structure

src/ ├── components/ │ └── Counter.jsx ├── App.jsx └── main.jsx

Concepts Covered

React Functional Components
useState Hook
Event Handling
Logic Explanation

The useState hook stores the counter value.
When the button is clicked, the state is updated.
React automatically re-renders the component when the state changes.
Functionalities

Increment the value
Decrement the value
UI updates dynamically
Possible Improvements

Add a Reset button
Add validation for minimum/maximum values
Separate logic into reusable components