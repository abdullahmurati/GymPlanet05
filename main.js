const title = "Get Your Body";
const heading = document.getElementById("firsttext");
let count = 0;
let interval = setInterval(() => {
  if (count === title.length) {
    count = 0;
    heading.innerText = "";
  } else {
    heading.innerText += title[count];
    count++;
  }
}, 200);

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('#horizontal-menu');

navbarToggler.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});

