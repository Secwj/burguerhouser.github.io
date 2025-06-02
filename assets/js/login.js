const $btnChangeUp = document.querySelector(".btn-change-sign-up");

const $containerSingIn = document.querySelector(".container-sign-in");
const $containerChangeSignUp = document.querySelector(".container-change-sign-up");

const $containerTextSignUp = document.querySelector(".container-text-sign-up");
const $containerSignUp = document.querySelector(".container-sign-up");

const $containerRegisterForm = document.querySelector(".container-register-form");


// ------------ CHANGE SIGN IN VARIABLE -----------
const $btnChangeSignIn = document.querySelector(".btn-change-sign-in");

// Funciones auxiliares

function showElement(element,classNameShow,classNameHide){
    // Removemos la clase que muestra
    element.classList.remove(classNameHide);
    element.classList.add(classNameShow);
}

function hideElement(element, classNameShow, classNameHide){
    element.classList.remove(classNameShow);
    element.classList.add(classNameHide);
}

function toogleDisplay(form_label,value){
    form_label.style.display = value;
}

$btnChangeUp.addEventListener("click",()=>{
    // Cambiar el display del contenedor form
    toogleDisplay($containerRegisterForm,"grid");
    // Mostrar el texto de sign up y del contenedor de registro
    showElement($containerTextSignUp,"show-text-register","unshow-text-register");
    showElement($containerSignUp,"show-register","unshow-register");

    // Ocultar elementos de login si están visibles
    if ($containerSingIn.classList.contains("show-login") && $containerChangeSignUp.classList.contains("show-change-register"))
        hideElement($containerSingIn,"show-login","unshow-login");
        hideElement($containerChangeSignUp,"show-change-register","unshow-change-register");


})

$btnChangeSignIn.addEventListener("click",()=>{
    // Ocultar elementos de registro
    hideElement($containerTextSignUp,"show-text-register","unshow-text-register");
    hideElement($containerSignUp,"show-register","unshow-register");


    // Mostrar login
    showElement($containerSingIn,"show-login","unshow-login");
    showElement($containerChangeSignUp,"show-change-register","unshow-change-register");

    toogleDisplay($containerRegisterForm, "none");

})



// $btnChangeUp.addEventListener("click",()=>{
//     $containerRegisterForm.style.display = "grid";

//     // Elimina las clases que podrían estar ocultando los elementos
//     $containerTextSignUp.classList.remove("unshow-text-register");
//     $containerSignUp.classList.remove("unshow-register");

//     // Check if login container class is exist 
//     if ($containerSingIn.classList.contains("show-login") && $containerChangeSignUp.classList.contains("show-change-register")){
//         // Remove this class
//         $containerSingIn.classList.remove("show-login");
//         // Remove text change sing up class
//         $containerChangeSignUp.classList.remove("show-change-register")
//         // Add unshow class
//         $containerSingIn.classList.add("unshow-login");
//         // Add unshow-text-register 
//         $containerChangeSignUp.classList.add("unshow-change-register");


//         $containerTextSignUp.classList.add("show-text-register");
        
//         $containerSignUp.classList.add("show-register");
//     }

    
//     // $containerChangeSignUp.classList.toggle("unshow-text-login");


// })

// $btnChangeSignIn.addEventListener("click",()=>{
//     if ($containerTextSignUp.classList.contains("show-text-register") && $containerSignUp.classList.contains("show-register")){
//         // Remove
//         $containerTextSignUp.classList.remove("show-text-register")

//         // Remove
//         $containerSignUp.classList.remove("show-register");
//         // Add class for hidden text register
//         $containerTextSignUp.classList.add("unshow-text-register");
//         // Remove class unshow 
//         $containerSingIn.classList.remove("unshow-login");
//         // Mostrar contenedor login
//         $containerSingIn.classList.add("show-login");
//         // Eliminar contenedor de registro

//         $containerSignUp.classList.add("unshow-register");


//         $containerChangeSignUp.classList.remove("unshow-change-register");
//         // Mostrar contenedor de texto de cambio de  login
//         $containerChangeSignUp.classList.add("show-change-register");
//         $containerRegisterForm.style.display = "none";
        


//     }
// })