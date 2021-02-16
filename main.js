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
      observer.unobserve(entry.target);
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


// function for toggle mobile navigation
const showNav = () => {
  const mobileMenu = document.querySelector("ul");
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelectorAll("li");

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("nav-active");
    //if true animate each nav link
    if (mobileMenu.classList.contains("nav-active")) {
      // using index parameter for domino effect
      navLinks.forEach((link, index) => {
        link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        link.style.display = "block";
        // hide menu after click on link
        link.addEventListener("click", () =>{
          mobileMenu.classList.remove("nav-active");
          burger.classList.remove("burger-transform");
        })
      });
    } else {
      navLinks.forEach((link) => {
        link.style.display = "none";
      });
    }

    
burger.classList.toggle("burger-transform");
  });

};

resetScreen();
showNav();
