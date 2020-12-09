const testISO = document.querySelectorAll(".about");

ISO = new IntersectionObserver((entry) => {
  entry.forEach((el) => {
    if (el.intersectionRatio > 0) {
      el.target.style.animation = "fadeRight 1s ease-in";
    } else {
      el.target.style.animation = "none";
    }
  });
});

testISO.forEach((box) => {
  ISO.observe(box);
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

