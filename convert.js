document.addEventListener("DOMContentLoaded",function(){
const cont=document.getElementById("container");
const btn=document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let jokes = ()=>{
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        cont.textContent=`${data.joke}`;
    });
}
btn.addEventListener("click",jokes)
    jokes();
   

}) 