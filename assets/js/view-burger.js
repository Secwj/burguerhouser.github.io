"use strict";

const $columnView = document.querySelector(".column-view");
const $rectangleView = document.querySelector(".rectangle-view");

// 
const $sectionBurguers = document.querySelector(".section-burguers");
const $containerFilterPlus = document.querySelector(".container-filter-plus");
const $containerBurguers = document.querySelector(".container-burguers");

const $containerBurguer = document.querySelectorAll(".container-burguer");

const activeView = ($activateEl,$desactiveEl)=>{
    $activateEl.style.backgroundColor = "var(--bg-color)"
    $desactiveEl.style.backgroundColor = "transparent";
}

const setViewMode = mode => {
    // isrectangle contendra true o false dependiendo si mode es rectangle y si no devuelve false.
    const isRectangle = mode === "rectangle";
    // force (opcional): un valor booleano (true o false) que obliga a añadir (true) o eliminar (false) la clase.
    $sectionBurguers.classList.toggle("rectangle",isRectangle);
    $containerFilterPlus.classList.toggle("rectangle",isRectangle);
    $containerBurguers.classList.toggle("rectangle",isRectangle);
    $containerBurguer.forEach((element,index) => {
        element.classList.toggle("rectangle",isRectangle);
    });
}


$rectangleView.addEventListener("click",()=>{
    const bgColor = getComputedStyle($rectangleView).backgroundColor;
    if (bgColor === "transparent" || bgColor === "rgba(0, 0, 0, 0)"){
        activeView($rectangleView,$columnView)
        setViewMode("rectangle");
    }
})


$columnView.addEventListener("click",()=> {
    const bgColor = getComputedStyle($columnView).backgroundColor;
    if (bgColor === "transparent" || bgColor === "rgba(0, 0, 0, 0)"){
        activeView($columnView,$rectangleView)
        setViewMode("column");
        
    }
})