"use strict";

// SELECTING CSS CLASSES
const arrow = document.querySelectorAll(".arrow-img");
const dropDownTextAll = document.querySelectorAll(".dropdown--text");
const dropDownText2 = document.querySelector(".dropdown--text-2");
const faqContainer = document.getElementById("section--2");
const allSectionHeading = document.querySelectorAll(
  ".section--2-content--heading"
);
let dropdownTextID;

// USING EVENT DELEGATION ON THE PARENT CONTAINER TO ACCESS THE CHILD ELEMENTS
faqContainer.addEventListener("click", function (e) {
  // Storing the target element
  const clicked = e.target;

  //////////////////////////////  ARROWS ////////////////////////////

  //   To check for when the clicked element is one of the arrows
  if (clicked.classList.contains("arrow-img")) {
    // Adding hidden to the second dropdown text that was already visible at loadtime
    dropDownText2.classList.add("hidden");

    //  To flip the arrow to 90 degrees
    clicked.classList.toggle("transformedArrow");

    // Checking if the clicked element contains "transformedArrow"
    if (clicked.classList.contains("transformedArrow")) {
      arrow.forEach((arrowEl) => {
        // removing "transformedArrow" from all arrows except the clicked arrow
        if (arrowEl !== clicked) {
          arrowEl.classList.remove("transformedArrow");
        }
      });
    }

    // To reveal the hidden dropdowntext
    const id = clicked.getAttribute("id");

    dropdownTextID = document.querySelector(`#dropdown--text-${id}`);

    // Adding the "block" css class to reveal elements
    dropdownTextID.classList.toggle("block");

    // Checking for "block"
    if (dropdownTextID.classList.contains("block")) {
      dropDownTextAll.forEach((el) => {
        // removing block from all "dropDownTextAll" except the one under the clicked arrow
        if (el !== dropdownTextID) {
          el.classList.remove("block");
        }
      });
    }

    // Getting the h3 elements using DOM traversing
    const h3ElementGetter = clicked.parentElement.previousElementSibling;
    console.log(h3ElementGetter);
    h3ElementGetter.classList.toggle("bolder");

    //    Checking for "bolder" class
    if (h3ElementGetter.classList.contains("bolder")) {
      allSectionHeading.forEach((el) => {
        // removing "bolder" from all headings except the one closer to  clicked arrow (h3ElementGetter)
        if (el !== h3ElementGetter) {
          el.classList.remove("bolder");
        }
      });
    }
  }

  /////////////////////////// HEADERS ///////////////////////////

  //    To check for when the clicked element is a header
  if (clicked.classList.contains("section--2-content--heading")) {
    // Adding bolder to h3 elements
    clicked.classList.toggle("bolder");

    //    Checking for "bolder" class
    if (clicked.classList.contains("bolder")) {
      // removing "bolder" from all headings except the  clicked
      allSectionHeading.forEach((el) => {
        if (el !== clicked) {
          el.classList.remove("bolder");
        }
      });
    }

    // Adding hidden to the second dropdwon text that was already visible at loadtime
    dropDownText2.classList.add("hidden");

    // Storing the next sibling of the header (Storing arrow-img)
    const headerNextSibling =
      clicked.nextElementSibling.querySelector(".arrow-img");

    // Toggling the "transformedArrow class" to flip the arrow 90 deg
    headerNextSibling.classList.toggle("transformedArrow");

    // Checking if the clicked element contains "transformedArrow"
    if (headerNextSibling.classList.contains("transformedArrow")) {
      arrow.forEach((arrows) => {
        // removing "transformedArrow" from all arrows except the  clicked arrow (headerNextSibling)
        if (arrows !== headerNextSibling) {
          arrows.classList.remove("transformedArrow");
        }
      });
    }

    // Getting the ID's of arrow-img
    const arrowID = headerNextSibling.getAttribute("id");

    dropdownTextID = document.querySelector(`#dropdown--text-${arrowID}`);

    // Adding the "block" css class to reveal elements
    dropdownTextID.classList.toggle("block");

    // Checking for "block"
    if (dropdownTextID.classList.contains("block")) {
      dropDownTextAll.forEach((el) => {
        // removing block from all "dropDownTextAll" except the one closer to the "arrowID"
        if (el !== dropdownTextID) {
          el.classList.remove("block");
        }
      });
    }
  }
});
