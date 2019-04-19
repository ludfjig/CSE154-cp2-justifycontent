// Name: Ludvig Liljenberg
// Date: 04/19/2019
// Section: CSE 154 AF
//
// This script adds functionality to a dropdown and a
// button in index.html. It specifically allowes the user to change
// the css property "justify-content" in a div on the site. It also allowes
// the user to add "boxes" to the div with a press of a button.

(function() {
  "use strict";

  window.addEventListener("load", init);

  /**
   *  Adds functionality to the button and dropdown menu on index.html
   */
  function init() {
    document.getElementById("justifier").addEventListener("change", changeCss);
    document.querySelector("button").addEventListener("click", addBox);
  }

  /**
   * Adds a new "box" html element, as a child of div #container
   */
  function addBox() {
    let newBox = document.createElement("div");
    newBox.className = "box";
    document.getElementById("container").appendChild(newBox);
  }

  /**
   * Changes the css property "justify-content" of the div #container
   * based on the selected vale in the dropdown menu
   */
  function changeCss() {
    let d = document.getElementById("container");
    // replace the current class with the class with same name as the selected
    // option in the dropdown menu value
    d.className = this.value;
  }

})();
