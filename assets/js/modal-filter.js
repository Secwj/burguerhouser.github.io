'use strict';

const $infoFilters = document.querySelector(".info-filters");
const $modalFilter = document.querySelector('.modal-filter');
const $containerModal = document.querySelector('.container-modal-filter');
const $btnClose = document.getElementById("btn-close-modal");


const openModal = () => {
    $infoFilters.addEventListener("click", () => {
        $modalFilter.classList.add("alternate-modal-filter");
        $containerModal.style.display = "block";
    });
}

const closeModal = () => {
    $btnClose.addEventListener("click", () => {
        $modalFilter.classList.remove("alternate-modal-filter");
        $containerModal.style.display = "none";
    });
}

const $titlePriceFilterModal = document.querySelector(".title-price-filter-modal");
const $detailsFilterModal = document.querySelector(".details-filter-modal");
const $listFilterModal = document.querySelector(".list-price-filter-modal");

const closeFiltersModal = () => {
    $titlePriceFilterModal.addEventListener("click", () => {
        
        $listFilterModal.classList.toggle('active');
        $titlePriceFilterModal.classList.toggle("change-icon-filter");
        $modalFilter.classList.toggle("rezise-modal");
    });    

    
}

openModal();
closeModal();
closeFiltersModal();