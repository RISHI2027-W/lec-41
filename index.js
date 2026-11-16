let myform = document.querySelector("#Myform");

let msg = document.querySelector("#message");

myform.addEventListener('submit',(e)=>{
     e.preventDefault();
     msg.textContent="Form submitted"
})

// let box = document.querySelector("#inputBox");
let result = document.querySelector("#result");

box.addEventListener('input',(e)=>{
    result.textContent = `${e.target.value}`;
})

let language = document.querySelector("#language");
let p = document.querySelector("#selectedLanguage");

language.addEventListener('change',(e)=>{
    p.textContent = `${e.target.value}: is chosen`;
})
let box = document.querySelector("#inputBox");


box.addEventListener('focus',(e)=>{
    box.style.border="2px solid orange";
    box.style.backgroundColor = "blue";
})

let input = document.querySelector("#Box");
let msg1= document.querySelector("#msg");

input.addEventListener('blur',(e)=>{
    msg1.textContent = `You left the input field`
})

//form validation


//  let form = document.querySelector("#Form");
//  let p1= document.querySelector("#error");
//  let name1 = document.querySelector("#name");

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     if(name1.value.trim()===""){
//         p1.textContent = `name is required`;
//     }
//     else{
//         p1.textContent = "";
//     }
// })

// let form = document.querySelector("#Form");
// let email = document.querySelector("#email");
// let error = document.querySelector("#error");

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     if(email.value.trim()===""){
//         error.textContent = "Email field is required";
//     }
//     else{
//         error.textContent = "";
//     }
// })

// let form = document.querySelector("#Form");
// let pass = document.querySelector("#password");
// let error = document.querySelector("#error");

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     if(pass.value.length<7){
//         error.textContent = "pass must be atleast 6 charcs"
//     }
//     else{
//         error.textContent = ""
//     }
// })

let error = document.querySelector("#error");
let form = document.querySelector("#Form");
let name1 = document.querySelector("#name");
let pass = document.querySelector("#password");
let email = document.querySelector("#email");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(name1.value.trim()===""){
        error.textContent = "Name is required";
    }
    else if(pass.value.trim()===""){
        error.textContent = "Password is required"
    }
    else if(email.value.trim()===""){
        error.textContent = "Please enter email before proceeding";
    }
    else{
        error.textContent = "Form submitted successfully";
    }
})