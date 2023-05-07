const toggle = document.querySelector('#menu');
const toggle1 = document.querySelector('#menu1');
const nav  = document.querySelector('.link');
const btn = document.querySelector('.btn');

toggle.addEventListener('click',()=>
{
    nav.classList.toggle('active');
    btn.classList.toggle('active');
})

toggle1.addEventListener('click',()=>
{
    nav.classList.toggle('active');
    btn.classList.toggle('active');
})