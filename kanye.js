const title = document.querySelector("h1");
// title.
// console.log(title);

// config to send headers
const config = {
  headers: {
    Accept: "application/json",
  },
};

const kanyeBtn = document
  .querySelector("#kanye")
  .addEventListener("click", kanyeQuote);

const jokeBtn = document
  .querySelector("#dad")
  .addEventListener("click", dadJoke);

function kanyeQuote() {
  axios.get("https://api.kanye.rest").then(function (response) {
    console.log(response.data);
    // alert(response.data.quote);
    outputBox.innerHTML =
      "<h2> Kanye speaketh </h2>" + `<p>${response.data.quote}</p>`;
    // window.alert(response.data.quote);
    // document.write(response.data.quote); // not useful, deletes button
  });
}

function dadJoke() {
  axios
    .get("https://icanhazdadjoke.com/", config)
    .then((res) => {
      console.log(res.data);
      // alert(res.data.joke)
      outputBox.innerHTML = "<h2>Dad Joke</h2>" + `<p>${res.data.joke}</p>`;
    })
    .catch((err) => console.error(err));
}

const outputBox = document.querySelector("#para1"); //coolcool, so we make a outputBox which is just a paragraph in our html and feed our jokes/quotes into here

//    BELOW CODE IS USED FOR THE IMAGE SLIDE
let i = 0;
let images = [];
let time = 3000;

// Image List
images[0] = "img/kanye.jpg";
images[1] = "img/kanye2.jpg";
images[2] = "img/kanye3.jpg";

//Change Image
function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;
// END OF IMAGE SLIDE
