"use strict";
const $containerOrderFilter = document.querySelector(".container-order-filter")
const $modalSort = document.querySelector(".modal-sort");
const $containerModalSort = document.querySelector(".container-modal-sort");
const $btnCloseModalSort = document.getElementById("btn-close-modal-sort");

const $itemListSortModal = document.querySelectorAll(".item-list-sort-modal");
const $modalSortDesktop = document.querySelector(".modal-sort-desktop");

window.addEventListener("resize", () => {
    if (window.innerWidth < 1040) {
        $modalSortDesktop.classList.remove("active");
    }
});

const handleOpenModal = () => {
    
    if (window.innerWidth < 1040){
            $containerModalSort.classList.add("show-modal");
            $containerOrderFilter.classList.add("active");
            // Animation of modal sort
            $modalSort.classList.add("alternate-modal-filter");
            $modalSortDesktop.classList.remove("active")
    }
    else {
        setTimeout(()=>{
            $modalSortDesktop.classList.toggle("active");
        },500)
        
        
    }
}


    

$containerOrderFilter.addEventListener("click",(handleOpenModal));
            
            

            // Check sort mordal
$itemListSortModal.forEach((element,index)=> {
    element.addEventListener("click",()=> {
        // Cuando haces click en una opción:
        // Se eliminan todas las clases .active-sort
        // Y se remueve el ✔ (el span.check) de todos los elementos, 
        // para asegurarte que solo uno quede seleccionado
        // Ejecutamos otroa vez el for each para eliminar el check de los anterirores
        $itemListSortModal.forEach((el) => {
            element.classList.remove("active-sort");
            const check = el.querySelector(".check");
            if (check) check.remove();
        });
                    

    // Agregamos a los que no tiene active-sort
    if (!element.classList.contains("active-sort")){
        let checkSpan = document.createElement("span");
        checkSpan.textContent = "✔"
        checkSpan.classList.add("check");
        element.appendChild(checkSpan)
                        
    }
                    
    })

})

$btnCloseModalSort.addEventListener("click", ()=> {
    if ($containerOrderFilter.classList.contains("active")){

        $containerOrderFilter.classList.remove("active");

        $modalSort.classList.remove("alternate-modal-filter");

         $containerModalSort.classList.remove("show-modal");
    }
    
})

    


