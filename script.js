const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const repassword=document.getElementById('repassword');



function error(input,message){
    input.className='form-control is-invalid';
    const div=input.nextElementSibling;
    div.innerText=message;
    div.className='invalid-feedback';
}
function success(input) {
    input.className='form-control is-valid';
}
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        success(input);
    }
    else{
        error(input,'an incorrect e-mail address.')
    }
}
function checkLenght(input,min,max) {
    if( input.value.length<min){
        error(input,`${input.id} en az ${min} karakter olmalı`);
    }else if(input.value.length>max){
        error(input,`${input.id} en fazla ${max} karakter olmalı`);
    }
    else{
        success(input);
    }
}
function checkPasswords(input1,input2) {
    if(input1.value!=input2.value){
        error(input2,'Parolalar eşleşmiyor!');
    }
    
}
function checkPhone(input) {
    var exp= /^\d{10}$/;
    if(!exp.test(input.value)){
        error(input,'Telefon numarası 10 karekterden oluşmalıdır!');
    }
}
function checkRequired(inputs) {
     //method2
    inputs.forEach (function(input) {
        
        if(input.value==''){
            error(input,`${input.id}'is required.'`);
        }
        else{
            success(input);
        }
    });


    //method1
    /*if(username.value==''){
        error(username,'username required');
    }else{
        success(username);
    }
    if(email.value==''){
        error(email,'email required');
    }else if(!checkEmail(email.value)){
        error(email,'not an email account in the correct form');
    }
    else{
        success(email);
    }
    if(password.value==''){
        error(password,'password required');
    }else{
        success(password);
    }
    if(repassword.value==''){
        error(repassword,'repassword required');
    }else{
        success(repassword);
    }*/
}
form.addEventListener('submit',function(event) {
    event.preventDefault();

    checkRequired([username,email,password,repassword,phone]);
    checkEmail(email);
    checkLenght(username,7,15);
    checkLenght(password,7,12);
    checkPasswords(password,repassword);
    checkPhone(phone);
});