const testISO = document.querySelectorAll(".about");

const observer = new IntersectionObserver ((entries) =>{
  entries.forEach((el) =>{
    console.log(el.intersectionRatio > 0);
    if (el.){
      el.target.style.animation = "fadeRight 2s ease-in";
    }
  });
 
})

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

resetScreen();
