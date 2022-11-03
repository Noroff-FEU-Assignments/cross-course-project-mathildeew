const collapse1 = document.querySelector(".collapse1");
const collapseContent1 = document.querySelector(".collapse-content1");

collapse1.addEventListener("click", openCollapse1);

function openCollapse1() {
  collapseContent1.classList.toggle("active");
}

const collapse2 = document.querySelector(".collapse2");
const collapseContent2 = document.querySelector(".collapse-content2");

collapse2.addEventListener("click", openCollapse2);

function openCollapse2() {
  collapseContent2.classList.toggle("active");
}

const chooseSize = document.querySelector(".size-button");
const chooseSizeMenu = document.querySelector(".choose-size");

chooseSize.addEventListener("click", chooseSizeOpen);

function chooseSizeOpen() {
  chooseSizeMenu.classList.toggle("active");
  chooseSize.classList.toggle("active");
}

