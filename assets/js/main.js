
// Burguer container variable
const containerBurguers = document.querySelector(".container-burgers");

const burguers = [
    {
        description:`Our Classic Burger is made with a juicy beef patty, fresh lettuce, ripe tomato, melted cheese, pickles, and our special house sauce, all served on a toasted sesame bun. Simple, tasty, and unforgettable.`,
        images: [
            `assets/img/menu/hamburguesa-carne.jpg`,
            `assets/img/menu/hamburguesa-simple.png`,
            `assets/img/menu/hamburguesa-negra.jpg`
        ]
    },
    {
        description:``,
        images: [
            `assets/img/menu/hamburguesa-rey.jpg`,
            `assets/img/menu/hamburguesa-simple.png`,
            `assets/img/menu/hamburguesa-negra.jpg`
        ]   
    },
    {
        description:`Sink your teeth into our mouthwatering beef burger, stacked with crispy lettuce, creamy cheese, juicy tomatoes, and grilled to perfection. Served hot on a soft, golden bun - it's the perfect bite every time.`,
        images: [
            `assets/img/menu/hamburguesa-triple.jpg`,
            `assets/img/menu/hamburguesa-simple.png`,
            `assets/img/menu/hamburguesa-negra.jpg`
        ]
    }
];

// Crear un array  con la longitud del array asociativo burguers
// Osea 3 valores y lo rellena con 0 , por eso fill 0
let currentIndexes = Array(burguers.length).fill(0);

console.log(currentIndexes)

const getBurguer = (id)=>{
    return burguers[id];
}

let burguerList = [];

const returnBurguers = ()=>{
    // Storage burguers

    let newHTMLContent = "";
    for (let i=0; i < burguers.length; i++){
        burguerList[i] = getBurguer(i);
        // console.log(burguerList[i])
        // Create a html content about burguers
        
        newHTMLContent += `
        <article class="container-burguer">
                <div class="info-text-burguer">
                    <p>${burguerList[i].description}</p>
                </div>
                <picture class="container-img-burguer container-img-burguer-${i+1}">
                    <!--Ahora se accede a images que tienen un array con 3 valores que son
                    //las imagenes--!>
                    <img src="${burguerList[i].images[0]}" class="burguer-img" alt="Burguer ${i+1}">
                    <div class="container-arrows">
                        <i class="fa-solid fa-arrow-left arrow-left"></i>
                        <i class="fa-solid fa-arrow-right arrow-right"></i>
                    </div>
                </picture>
            </article>`;
        
    }
    containerBurguers.innerHTML = newHTMLContent;

    const containers = document.querySelectorAll(".container-burguer");
    // Nos devuelve cada article con su posicion 

    containers.forEach((container,index)=> {
        // console.log(container,index);
        // Obtenemos la img, left arrow y right arrow de cada hamburguesa
        const img = container.querySelector(".burguer-img");
        const left = container.querySelector(".arrow-left");
        const right = container.querySelector(".arrow-right");

        left.addEventListener("click", () => {
            img.classList.remove("enter-right", "enter-left");
            void img.offsetWidth; // Esto reinicia la animación
            currentIndexes[index] = (currentIndexes[index] - 1 + burguers[index].images.length) % burguers[index].images.length;
            console.log(currentIndexes[index]);
            img.src = burguers[index].images[currentIndexes[index]];
            img.classList.add("enter-left");
        });

        right.addEventListener("click", () => {
            img.classList.remove("enter-left", "enter-right");
            void img.offsetWidth; // Esto reinicia la animación
            currentIndexes[index] = (currentIndexes[index] + 1) % burguers[index].images.length;
            img.src = burguers[index].images[currentIndexes[index]];
            img.classList.add("enter-right");
        });

    });
};

returnBurguers(); 