window.addEventListener("DOMContentLoaded", () => {
  //burger
  const burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close"),
    menuList = document.querySelector(".menu__list"),
    emailInput = document.querySelector("#email"),
    homePage = document.querySelector(".homePage"),
    arrowUp = document.querySelector(".sidepanel__arrowUp"),
    arrowDown = document.querySelector(".sidepanel__arrowDown");

  burger.addEventListener("click", () => {
    menu.classList.add("active");
  });

  closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  menuList.addEventListener("click", (event) => {
    if (event.target && event.target.matches("a")) {
      menu.classList.remove("active");
    }
  });

  //Lazy loading for animation
  new WOW().init();

  //Input validation

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  function validateEmail() {
    if (isEmailValid(emailInput.value)) {
      emailInput.style.backgroundColor = "green";
    } else {
      emailInput.style.backgroundColor = "red";
    }
  }

  emailInput.addEventListener("input", validateEmail);

  function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
  }

  //Homepage scroll
  homePage.addEventListener("click", () => {
    window.scrollTo(scrollY, 0);
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
  });

  window.addEventListener("scroll", function () {
    homePage.hidden = scrollY < document.documentElement.clientHeight;
  });

  //Next page scroll(works only on big window)
  arrowDown.addEventListener("click", () => {
    window.scrollBy(0, window.innerHeight);
  });

  arrowUp.addEventListener("click", () => {
    window.scrollBy(0, -window.innerHeight);
  });
});
