const btn =document.querySelector('.btn')
const num =document.querySelector('h4')

btn.addEventListener('click' , () =>{
   
   num.innerHTML=  Math.floor(Math.random()* 30)

})