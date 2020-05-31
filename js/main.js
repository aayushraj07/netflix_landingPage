const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
console.log("js is working");

//Select tab content items
function selectItem(e) {
  removeBorder();
  removeShow();
  //Add border to current tab
  this.classList.add("tab-border");
  //Grab content item from DOM
  console.log(this.id);
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //Add Show Class
  tabContentItem.classList.add("show");
}

function removeBorder(e) {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow(e) {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

tabItems.forEach((item) => item.addEventListener("click", selectItem));
