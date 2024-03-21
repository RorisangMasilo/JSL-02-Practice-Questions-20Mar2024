// How can the style/class of an element be changed using DOM Manipulation? Write a function for this

// Function to change the style of an element
function changeStyle() {
  let element = document.getElementById("myHeading");
  element.style.color = "purple";
  element.style.fontSize = "48px";
}

// Function to change the class of an element
function changeClass() {
  let element = document.getElementById("myHeading");
  element.classList.add("header");
  element.classList.remove("highlight");
}

function toggleClass() {
  let element = document.getElementById("myHeading");
  element.classList.toggle("highlight");
}

// How can the style/class of an element be changed using DOM Manipulation? Write a function for this

// Function to change the style of an element
/* let headerNode = document.getElementById("myHeading");

function changeStyle() {
  headerNode.style.color = "purple";
  headerNode.style.fontSize = "48px";
}

// Function to change the class of an element
function changeClass() {
  headerNode.classList.add("header");
  headerNode.classList.remove("highlight");
}

function toggleClass() {
  headerNode.classList.toggle("highlight");
}

Now you can adjust the JS script to declare the variable once 🙂
