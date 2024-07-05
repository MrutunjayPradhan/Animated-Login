const container = document.getElementById('container');
const registatinBut = document.getElementById('register');
const loginBut = document.getElementById('login');

registatinBut.addEventListener('click',()=>{
    container.classList.add("active");
})
loginBut.addEventListener('click',()=>{
    container.classList.remove("active");
})
