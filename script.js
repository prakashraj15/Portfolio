function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let index = 0;
function changeText() {
  const titles = [ "Software Engineer", "AI Engineer"];
  const jobelement = document.getElementById("job");
  jobelement.classList.add("fade-out");
  setTimeout(() => {
    jobelement.innerHTML = titles[index];
    jobelement.classList.remove("fade-out");
    index = (index + 1) % titles.length;
  }, 1000);
}

setInterval(changeText, 3000);

document.addEventListener('DOMContentLoaded', function () {
  var mainSwiper = new Swiper('.swiper-container--timeline', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination-progressbar',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      slideChange: function () {
        updateMainPagination(mainSwiper);
      },
    },
  });

  var nestedSwipers = [];

  document.querySelectorAll('.nested-swiper').forEach(function (element, index) {
    nestedSwipers.push(new Swiper(element, {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination-progressbar',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }));
  });

  function updateMainPagination(swiper) {
    var activeIndex = swiper.activeIndex;
    var switches = document.querySelectorAll('.swiper-pagination-switch');

    switches.forEach(function (switchElem, index) {
      if (index === activeIndex) {
        switchElem.classList.add('active');
      } else {
        switchElem.classList.remove('active');
      }
    });
    console.log(swiper.activeIndex);
  }

  updateMainPagination(mainSwiper);

  document.querySelectorAll('.swiper-pagination-switch').forEach(function (switchElem, index) {
    switchElem.addEventListener('click', function () {
      mainSwiper.slideTo(index);
    });
  });
});

const achievementImages = ["./assets/ach1.jpg", "./assets/ach2.jpg"];
let currentAchievementIndex = 0;

const currentAchievementImage = document.getElementById("currentAchievementImage");

function updateImage() {
  currentAchievementIndex = (currentAchievementIndex + 1) % achievementImages.length;
  currentAchievementImage.src = achievementImages[currentAchievementIndex];
}

// Automatically change image every 5 seconds
setInterval(updateImage, 5000);
