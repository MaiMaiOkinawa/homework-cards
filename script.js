const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const card4 = document.querySelector("#card4");

card1.addEventListener("click", function () {
  card1.classList.toggle("is-flipped");
});

card2.addEventListener("click", function () {
  card2.classList.toggle("is-flipped");
});

card3.addEventListener("click", function () {
  card3.classList.toggle("is-flipped");
});

card4.addEventListener("click", function () {
  card4.classList.toggle("is-flipped");
});
