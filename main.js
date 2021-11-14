let burgerMenu = document.querySelector(".check");
let selector = document.querySelector(".newMenu");

burgerMenu.addEventListener("click", () => {
  selector.classList.toggle("hide");
});

interior.addEventListener("click", () => {
  location.reload();
});
