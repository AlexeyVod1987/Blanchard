// document.querySelectorAll(".dropdown-simplebar").forEach(dropdown => {
//   new SimpleBar(dropdown, {
//     /* чтобы изначально ползунок был виден */
//     autoHide: false,
//     /* с помощью этого значения вы можете управлять высотой ползунка*/
//     scrollbarMaxSize: 25,
//   });
// });
var inputs = document.querySelectorAll('.section-place__form-input'),
  sidebar = document.querySelector('.sidebar');
Array.prototype.forEach.call(inputs, function (el) {
  el.addEventListener('focus', function () {
    sidebar.style.backgroundColor = '#ececec';
  })
  el.addEventListener('click', function () {
    sidebar.style.backgroundColor = '#fff';
  })
});

// Модальные окна

const modal = new GraphModal();
document.querySelector('.gal-hover').addEventListener('click', () => {
  new GraphModal().open('first');
});

// INPUT MASK
let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999) 999-99-99");
// document.querySelector('.section-place__form-input--tel').addEventListener("click", function () {
// });
im.mask(selector);
// im.mask(selector);

///////////////////////////////////BURGER
let burger = document.querySelector('.header__burger-open');
let menu = document.querySelector('.nav');
let closeBurger = document.querySelector('.nav__close');
let menuLinks = document.querySelectorAll('.nav.active > .nav__link');

burger.addEventListener('click', function () {
  menu.classList.toggle('active');
  document.body.classList.toggle('lock-overflow');
});

closeBurger.addEventListener('click', function () {
  menu.classList.remove('active');
  document.body.classList.toggle('lock-overflow');
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    menu.classList.remove('active');
    document.body.classList.toggle('lock-overflow');
  })
});
//////////////////////////////////////////

document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');

  });
});

// SEARCH
document.querySelector(".header-descr__form-btn-open").addEventListener("click", function () {
  document.querySelector(".form").classList.add("form__active");
  this.classList.add("active");
  document.querySelector(".form-container").classList.add("active");
})
document.querySelector(".form-close").addEventListener("click", function () {
  let form = document.querySelector(".form");
  let formCont = document.querySelector(".form-container");
  form.classList.remove("form__active");
  formCont.classList.remove("active");
  form.querySelector("input").value = "";
  document.querySelector(".header-descr__form-btn-open").classList.remove("active")
});

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".form");
  let formCont = document.querySelector(".form-container");
  if (!target.closest(".header-descr")) {
    form.classList.remove("form__active");
    formCont.classList.remove("active");
    form.querySelector("input").value = "";
    document.querySelector(".header-descr__form-btn-open").classList.remove("active")
  }
})

/*ВЫПАДАЮЩЕЕ МЕНЮ*/
document.querySelectorAll(".dropdown-simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
  });
});

const btns = document.querySelectorAll(".menu__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  });


  // document.addEventListener('click', (e) => {
  //   if (!e.target.closest('.menu')) {
  //     dropdowns.forEach(el => {
  //       el.classList.remove(activeClassdropdowns)
  //     });
  //     btns.forEach(el => {
  //       el.classList.remove(activeClassbtns)
  //     });
  //   }
  // });
});


// Select//

// const gallaryChoices = () => {
//   const choices = document.querySelector('.gallary-choices');
//     choices = new Choices(element, {

//     });
// };


const element = document.querySelector('.gallary-choices');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  // placeholderValue: false,
});


// TOOLTIP


tippy('#projectsTooltip1', {
  content: "Пример современных тенденций — современная методология разработки",
  // animation: 'opacity',
  duration: 500,
  theme: 'castom',
});

tippy('#projectsTooltip2', {
  content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
  // animation: 'scale',
  duration: 500,
  theme: 'castom'
});

tippy('#projectsTooltip3', {
  content: "В стремлении повысить качество",
  // animation: 'scale',
  duration: 500,
  theme: 'castom'
});

// SEARCH

const search = document.querySelector('.header__input');
const clear = document.querySelector('.header-search__close');

search.addEventListener('input', () => {
  clear.style.opacity = 1;
});

clear.addEventListener('click', () => {
  search.value = '';
  clear.style.opacity = 0;
});







