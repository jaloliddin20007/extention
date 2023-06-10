const joke = document.getElementById('joke');
const btn = document.getElementById('btn');
const API_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke = () => {
    fetch(API_URL)
    .then(data => data.json())
    .then(post => {
        joke.textContent = `${post.joke}`
    })
}

btn.addEventListener('click',getJoke);
