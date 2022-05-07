const headNav = document.querySelector("#head-nav h1");
const changeBtn = document.getElementById("btn");

const changeHeaderTextHandler = () => {
  headNav.textContent = "this head changed";
  headNav.className = "main-title";
};

changeBtn.addEventListener("click", changeHeaderTextHandler);
