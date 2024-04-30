tailwind.config = {
    theme: {
      extend: {
        colors: {
          pink1: '#D42E5B',
          pink2: '#bb2649',
          pink3: '#9f2436',
          pink4: 'rgba(187, 38, 73, 0.5)',
          pink5: '#6E182F',
          gray: '#e1e0e0',
          dark: '#27272A',
          white: '#fff',
          black: '#000',
        },
        fontFamily: {
        'body': ['"Manrope"']
        },
        fontSize: {
          h2: ['56px', '62px'],
          h4: ['40px', '48px'],
          h6: ['28px', '36px'],
          h7: ['26px', '34px'],
          min: ['10px', '16px'],
        },
        height: {
            hero: 'calc(100vh - 188px)'
        },
        width: {
          '30%': '30%',
          '56%': '56%',
        },
        boxShadow:{
          'tripple' : 'inset 0 2px 2px 0 rgba(255, 255, 255, 0.25), inset 0 -2px 4px 0 rgba(166, 166, 166, 0.25), inset 0 0 50px 0 rgba(255, 255, 255, 0.15);',
          'custom' : '0 0 7px 0 rgba(187, 38, 73, 0.2);',
          'news' : '0 0 14px 0 rgba(212, 46, 91, 0.1);',
        },
        margin: {
          16: '60px',
          17.5: '70px'
        },
        padding: {
          25: '100px'
        },
        backgroundImage: {
          triangle: 'url("img/triangle.svg")',
          arrow: 'url("img/arrow-down.svg")',
        },
        gridTemplateColumns: {
          'footer': '34px 1fr',
          '1/2': '1fr 2fr',
        },
        borderWidth: {
          '3': '3px'
        },
        screens: {
          '2xl': {'max': '1535px'},  
          'xl': {'max': '1279px'},
          'menu': {'max': '11473px'},
          'lg': {'max': '1023px'},
          'md': {'max': '767px'},
          'sm': {'max': '639px'},
          'xsm': {'max': '379px'},
        }
      }
    }
  }

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    breakpoints: {
      786: {
        slidesPerView: 2,
      }
    }
  });

  // openMenu
(function () {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#menu");

  if(burger != null && menu != null) {
    burger.addEventListener("click", () => {
      menu.classList.remove("lg:translate-x-full");
      menu.classList.remove("lg:opacity-100");
    });
  }
})();
 // closeMenu
(function () {
  const closeMobile = document.querySelector("#close-mobile");
  const menu = document.querySelector("#menu");

  if (closeMobile != null && menu != null) {
    closeMobile.addEventListener("click", () => {
      menu.classList.add("lg:translate-x-full");
      menu.classList.add("lg:opacity-100");
    });
  }
})();
