// const data = [
//   {
//     day: 100,
//     homework: "I like diamond.",
//     image: "https://images.nintendolife.com/5827a29ab6a25/mario.large.jpg",
//     name: "Mario",
//   },
//   {
//     day: 101,
//     homework: "I like",
//     image: "https://images.nintendolife.com/5827a29ab6a25/mario.large.jpg",
//     name: "Mari",
//   },
//   {
//     day: 101,
//     homework: "I",
//     image: "https://images.nintendolife.com/5827a29ab6a25/mario.large.jpg",
//     name: "Mar",
//   },
//   {
//     day: 101,
//     homework: "diamond.",
//     image: "https://images.nintendolife.com/5827a29ab6a25/mario.large.jpg",
//     name: "M",
//   },
// ];

// const cards = document.querySelectorAll(".card__inner");
// const homework = document.querySelectorAll(".hw");
// const images = document.querySelectorAll(".img");
// const names = document.querySelectorAll(".name");

// let currentData = 0;

// function flipCard() {
//   const currentHomeworkData = data[currentData];
//   homework.innerText = currentHomeworkData.homework;
//   this.classList.toggle("is-flipped");
//   images.src = currentHomeworkData.image;
//   names.innerText = currentHomeworkData.name;
// }

// cards.forEach((card) => card.addEventListener("click", flipCard));

const cards = document.querySelectorAll(".card__inner");

function flipCard() {
  this.classList.toggle("is-flipped");
}

cards.forEach((card) => card.addEventListener("click", flipCard));
