// Navegation variables
const bars_open = document.getElementById("bars-open");
const containerNavList = document.querySelector(".container-nav-list");
const bars_close = document.getElementById("bars-close");

// Check when user click on bars_open
bars_open.addEventListener("click",()=>{
    containerNavList.classList.toggle('show');
    containerNavList.style.animation = "appear 0.5s forwards"
})

// Check when user click on bars_close
bars_close.addEventListener("click", () => {

    // Check windows is less of 1200
    if (window.innerWidth < 1200){
        containerNavList.classList.add("disappear-animation"); // Añade la clase de animación
        setTimeout(()=>{
        containerNavList.classList.remove("show");

    },500);} 
    else {
    containerNavList.classList.remove("disappear-animation");
    containerNavList.classList.remove("show");
    }
    


});