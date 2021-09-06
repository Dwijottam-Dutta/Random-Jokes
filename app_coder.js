const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const about = document.getElementById("about");
const back = document.getElementById("back");
// const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getProgrammingJoke = () => {
    document.getElementById("loader").style.display = "block";
    document.getElementById("wrapper").style.display = "none";
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("wrapper").style.display = "block";
        jokeContainer.classList.remove("fade");
        fetch(url)
            .then(data => data.json())
            .then(item => {
                jokeContainer.textContent = `${item.joke}`;
                jokeContainer.classList.add("fade");
            });
    }, 2500);
}
btn.addEventListener("click", getProgrammingJoke);
back.addEventListener("click", function backtodefault() {
    location.replace("index.html");
    
});
about.addEventListener("click", function aboutus() {
    window.open("https://dwijottam-dutta.github.io/portfolio/about.html");
    
});
getProgrammingJoke();