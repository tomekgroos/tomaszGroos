const testISO = document.querySelector(".about");




const ISO = new IntersectionObserver((entry) =>{
    if (entry[0].intersectionRatio > 0){
        entry[0].target.style.animation = "fadeRight 1s ease-in";
    } else {
        entry[0].target.style.animation = "none";
    }
});

ISO.observe(testISO);