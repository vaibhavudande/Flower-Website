let nav = document.getElementById('navbar');

document.getElementById('menuBtn').onclick = ()=> {
    nav.classList.toggle('active');
}

let login = document.getElementById('login');

document.querySelector('#profile').onclick = ()=> {
    login.classList.toggle('active');
}

