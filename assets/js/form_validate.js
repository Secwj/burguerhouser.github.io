"use strict";

const regex = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    cellPhone: /^9\d{8}$/,
    gmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const $inputForm = document.querySelectorAll(".input-form");
const $btnSubmirForm = document.querySelector(".btn-submit-contact");
const $containerTextSuccessfully = document.querySelector(".container-text-successfully")


const checkValueIsNotNull = (fieldName,value,warning)=>{
    const pattern = regex[fieldName];


    if (value === "" || !pattern.test(value)){
        warning.textContent = "ⓘ This field is required"
        return false;
    }else {
        return true;
    }

        
}


$btnSubmirForm.addEventListener("click",(e)=>{
    e.preventDefault();
    let isValid = true;

    $inputForm.forEach((element) =>{
        const fieldName = element.id;
        let input = element.value;
        const $warningfield = element.parentElement.querySelector(".warning-field");

        console.log(input)
        $warningfield.textContent = "";
        
        if (element.type === "checkbox") {
            if (!element.checked) {
                $warningfield.textContent += "ⓘ You must accept the privacy policies";
                isValid = false;
            }
        } else if (element.type !== "checkbox") {
            if (!checkValueIsNotNull(fieldName,input,$warningfield)){
                isValid = false;
            }
                
        }


    });

    if (isValid) {
        $containerTextSuccessfully.textContent = "✔ Test form sent successfully";
        $inputForm.forEach((element)=>{
            const $warningfield = element.parentElement.querySelector(".warning-field");
            if (element.type === "checkbox") {
                element.checked = false;
            } else {
                element.value = "";
            }
            
        })
        
    }
})
