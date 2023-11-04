let checkbtn = document.querySelector('#checkbtn')
let mynav = document.querySelector('.navbar')

checkbtn.onclick = ()=>{
    checkbtn.classList.toggle('fa-times')
    checkbtn.classList.toggle('active')
}