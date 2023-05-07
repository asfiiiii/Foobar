const image = document.querySelector('#img')
const title = document.querySelector('#title')
const description = document.querySelector('#my-paragraph');
const ratings = document.querySelector('.ratings');
const origin = document.querySelector('#origin');
var priceElement = document.querySelector("#price");
var spanElement = priceElement.querySelector(".plate");


Array.from(document.getElementsByClassName('cards')).forEach((ele,i)=>
{
    ele.addEventListener('click',()=>
    {   
        image.src = ele.getElementsByClassName('image')[0].src;
        title.innerText = ele.getElementsByTagName('h3')[0].innerText
        var newPriceText = ele.getElementsByClassName("prices")[0].innerText;
        priceElement.innerHTML = newPriceText + " " + spanElement.outerHTML;    
        ratings.innerText = ele.getElementsByClassName('yo')[0].innerText;
        description.innerHTML = ele.getElementsByClassName('details')[0].innerText;
        origin.innerText = ele.getElementsByClassName('origin')[0].innerText;
    })
})


// scroller

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const card =  document.querySelector('.card');

left.addEventListener('click',()=>
{
    card.scrollLeft -= 200;
})
right.addEventListener('click',()=>
{
    card.scrollLeft += 200;
})