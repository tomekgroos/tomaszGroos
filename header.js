const fade = document.querySelectorAll(".fade");

window.addEventListener("scroll", ()=>{
    let scroll = window.pageYOffset;
    
    fade.forEach(el => {
        let velocity = el.dataset.velocity;
        el.style.transform = `translateY(${scroll * velocity}px)`

    })
})

