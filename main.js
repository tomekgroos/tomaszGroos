const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
const moveRight = document.querySelectorAll(".moveRight");

const options = {
  root: null,
  threshold: 0.3,
  rootMargin: "150px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = "fadeRight 1.5s ease-in";
      observer.unobserve(el.target);
    } else if (entry.isIntersecting === true) {
      return;
    }
  });
}, options);

/* observer.observe(about);
observer.observe(projects);
observer.observe(contact);
 */

moveRight.forEach((el) => {
  observer.observe(el);
});

const upButton = document.querySelector(".up-button");

const resetScreen = () => {
  window.addEventListener("scroll", () => {
    upButton.classList.toggle("active", window.scrollY > 500);
  });

  upButton.onclick = () => {
    window.scrollTo(0, 0);
  };
};



const showNav = () => {
  const mobileMenu = document.querySelector("nav");
  const burger = document.querySelector(".burger");

  burger.onclick = () => {
    
    mobileMenu.classList.toggle("nav-active");
  }
}
