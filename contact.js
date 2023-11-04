const form = document.getElementById('form');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');


const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const textarea_error = document.getElementById('textarea_error'); 

form.addEventListener('submit', (e)=> {
    if (fullname.value === '' || fullname.value === null){
        e.preventDefault();
        name_error.innerHTML = "Name is required!";
    }
    if (email.value === '' || email.value === null){
        e.preventDefault();
        email_error.innerHTML = "enter valid email";
    }
    if (textarea.value === '' || textarea.value === null) {
        e.preventDefault();
        textarea_error.innerHTML = "Write your message";
    }
    
})
