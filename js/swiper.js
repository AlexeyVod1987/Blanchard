const swiper = new Swiper('.hero-swiper', {
  // Optional parameters
  slidesPerView: 1,
  direction: 'horizontal',
  spaceBetween: 100,
  loop: true,
  speed: 1500,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  autoplay: {
    delay: 2000,

  },
  simulateTouch: true,
  toachRatio: 3,
  toachAngle: 45,
  grabCursor: true,
  // effect: 'fade',
});

const swiper2 = new Swiper('.gal-swiper', {
  // Optional parameters
  // slidesPerView: 2,
  direction: 'horizontal',
  // spaceBetween: 50,
  // loop: true,
  // speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 38,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  //If we need pagination
  pagination: {
    el: '.gallary-pagination',
    type: 'fraction',
    clickable: true,
  },


  // Navigation arrows
  navigation: {
    nextEl: '.gallary-swiper-buttons--next',
    prevEl: '.gallary-swiper-buttons--prev',
  },

  slidesPerGroup: 3,
});

const swiper3 = new Swiper('.events-swiper', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.events-pagination',
  // },
  // spaceBetween: 25,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,

    },
    768: {
      slidesPerView: 2,
      spaceBetween: 35,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 29,
      slidesPerGroup: 2,
    },
    1920:
    {
      slidesPerView: 3,
      spaceBetween: 51,
      slidesPerGroup: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.events-button-next',
    prevEl: '.events-button-prev',
  },
  // slidesPerView: 3,
  // spaceBetween: 50,
  disabledClass: '',
});

const swiper4 = new Swiper('.project-swiper', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.events-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.project-button-next',
    prevEl: '.project-button-prev',
  },
  // slidesPerView: 3,
  // spaceBetween: 50,
  disabledClass: '',
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 33,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 47,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
