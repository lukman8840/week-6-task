const Name = document.getElementById('Name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const form = document.getElementById('form');
const state = document.getElementById('state');
const gender = document.getElementById('gender');
const language = document.getElementById('language');
const appointment = document.getElementById('appointment');




const Name_error = document.getElementById('Name_error');
const state_error = document.getElementById('state_error');
const email_error = document.getElementById('email_error');
const number_error = document.getElementById('number_error');
const gender_error = document.getElementById('gender_error');
const language_error = document.getElementById('language-error');
const aappointment_error = document.getElementById('appointment_error') 


form.addEventListener('submit', (e)=> {
    
    if (Name.value === '' || Name.value === null)
    {
        e.preventDefault();
        Name_error.innerHTML = "Name is required!";
    }
    if (email.value === '' || email.value === null){
        e.preventDefault();
        email_error.innerHTML = "Email is required!";
    }
    if (number.value <=10 || number.value === ''){
        e.preventDefault();
        number_error.innerHTML = "please enter a correct number";
    }
    if (state.value === '' || state.value === null) {
        e.preventDefault();
        state_error.innerHTML = "State is required!";
    }
    if (gender.value === ''){
        e.preventDefault();
        gender_error.innerHTML = "Please Select an option";
    }
    if (appointment.value === ''){
        e.preventDefault();
        appointment_error.innerHTML = "please Select an option";
    }
       
    
})