const testISO = document.querySelectorAll(".about");

const options = {
  root: null,
  threshold: 0.3,
  rootMargin: "150px"

}

const observer = new IntersectionObserver ((entries) =>{
  entries.forEach((el) =>{
    console.log(el);
    if (el.intersectionRatio > 0){
      el.target.style.animation = "fadeRight 1.5s ease-in";
      observer.unobserve(el.target);
    } else if(el.isIntersecting === true){
      return;
    }
  });
 
}, options);

testISO.forEach((box) =>{
  observer.observe(box);
})


const upButton = document.querySelector(".up-button");

const resetScreen = () => {
  window.addEventListener("scroll", () => {
    upButton.classList.toggle("active", window.scrollY > 500);
  });

  upButton.onclick = () => {
    window.scrollTo(0, 0);
  };
};

