document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("nav-check").checked = false;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  const divs = Array.from(
    document.querySelectorAll(
      "div[id='firstbody'], div[id='about'], div[id='services'], div[id='prices'], div[id='contact']"
    )
  );
  console.log(divs.length);
  function changeActiveLink() {
    let index = divs.length;

    while (
      index-- &&
      window.scrollY + window.innerHeight / 2 < divs[index].offsetTop
    ) {}

    navLinks.forEach((link) => link.classList.remove("nav-active"));

    if (navLinks[index]) {
      navLinks[index].classList.add("nav-active");
    }
  }

  window.addEventListener("scroll", changeActiveLink);
  changeActiveLink();
});
