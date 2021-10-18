// menu 

// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('nav');

// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});

// data 
document.querySelectorAll(".box-btn__btn").forEach((element) => {

  element.addEventListener('mouseover',function() {
    this.classList.add('border-white')
  })
  element.addEventListener('mouseout',function() {
    this.classList.remove('border-white')
  })
  

  element.addEventListener("click", function () {
    let json = element.dataset.tea;
    let tea = JSON.parse(json);
    console.log(tea.index);

    document.querySelector(".coffee-img img").src = tea.img;
    document.querySelector(".coffee-content__title").innerText = tea.title;
    document.querySelector(".coffee-content__content").innerText = tea.content;
    document.querySelector(".coffee-content__link").href = tea.link;

    document.querySelectorAll(".box-btn__btn_border").forEach((elt) => {
      elt.classList.remove("box-btn__btn_border");
    });
    console.log("this", this.classList.add("box-btn__btn_border"));
    this.classList.add("box-btn__btn_border");

    document.querySelector(".coffee-content__trait").setAttribute("data-index", tea.index);

  });
});

