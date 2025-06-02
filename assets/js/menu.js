"use strict";
const $burguersContainer = document.querySelector(".container-burguers");
const $burgerContainer = document.querySelector(".container-burguer");
const burguers = [
    {
        name:"WHOPPER BIG",
        price: `16.90`,
        description: `Hamburguesa 100% carne de res a la parrilla, tomate, lechuga, mayonesa, kétchup, pepinillos y cebolla`,
        images : [
            "../assets/img/menu/burguers/whopper-big.png",
        ]

    },
    {
        name:"WHOPPER STACKER",
        price: `20.90`,
        description: `Doble hamburguesa 100% carne de res a la parrilla con nuestra exclusiva salsa BK STACKER®, queso y tocino`,
        images : [
            "../assets/img/menu/burguers/mega-stacker.png",
        ]

    },
    {
        name:"WHOPPER Chesse Big",
        price: `21.90`,
        description: `Hamburguesa 100% carne de res a la parrilla, queso, tomate, lechuga, mayonesa, kétchup, pepinillos y cebolla`,
        images : [
            "../assets/img/menu/burguers/whopper-chesse-big.png",
        ]

    },
    {
        name:"Bondiola King",
        price: `22.90`,
        description: `Hamburguesa 100% carne de res a la parrilla, bondiola combinada con salsa BBQ, mayonesa, lechuga, papas al hilo, pepinillos, salsa BBQ.`,
        images : [
            "../assets/img/menu/burguers/bondiola.png",
        ]

    },
    {
        name:"KING DE POLLO",
        price: `16.90`,
        description: `Hamburguesa de pechuga de pollo, lechuga y mayonesa`,
        images : [
            "../assets/img/menu/burguers/king-pollo.png",
        ]

    },
    {
        name:"XT Steakhouse",
        price: `27.90`,
        description: `Hamburguesa 100% carne de res, 75% más grande, queso, lechuga, tomate, cebollitas crujientes, BBQ y mayonesa`,
        images : [
            "../assets/img/menu/burguers/xt-steakhouse.webp",
        ]

    },
    {
        name:"XT Queso Tocino",
        price: `26.90`,
        description: `Hamburguesa 100% carne de res, 75% más grande, queso, tocino, lechuga, tomate y mayonesa`,
        images : [
            "../assets/img/menu/burguers/xt-queso-tocino.webp",
        ]

    },
    {
        name:"Whopper Tejana Grande",
        price: `21.90`,
        description: `Hamburguesa 100% carne de res a la parrilla, queso, tocino, tomate, lechuga, mayonesa, BBQ, pepinillos y cebolla`,
        images : [
            "../assets/img/menu/burguers/whopper-tejana-grande.webp",
        ]

    }
    
];


const getBurguer = (id) => {
    return burguers[id];
}


const returnBurguers = () => {
    let newHTMLContent = "";
    for (let i = 0; i < burguers.length; i++) {
        const burguer = getBurguer(i);
        newHTMLContent += `
        <div class="container-burguer">
                <img src="${burguer.images[0]}" atl="Burguer ${burguer.name}">
                <h2>${burguer.name}</h2>
                <small>Precio desde</small>
                <div class="description">${burguer.description}</div>
                <p>S/ ${burguer.price}</p>
                <div class="container-btn-burguer">
                    <button class="btn-add-burguer">Agregar</button>
                </div>
        
        </div>`;

    
    }

    $burguersContainer.innerHTML = newHTMLContent;
}

returnBurguers();