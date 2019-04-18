// Name: _your name here_
// Date: _add date here_
// Section: CSE 154 _your section here_
//
// -- your description of what this file does here --
//

(function() {
  "use strict";

  window.addEventListener("load", init);

  /**
   *  CHANGE: Describe what your init function does here.
   */
  function init() {
    document.getElementById("justifier").addEventListener("change", changeCss);
    document.querySelector("button").addEventListener("click", addBox);
  }

  function addBox() {
    let newBox = document.createElement("div");
    newBox.className = "box";
    document.getElementById("container").appendChild(newBox);
  }

  function changeCss (){
    let d = document.getElementById("container");
    d.classList = "";
    d.classList.add(this.value);
  }

})();
