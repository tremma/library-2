$(document).ready(function () {
    // responsive menu + burger
   $('.header__burger').click(function (event) {
      $('.header__burger,.header .menu').toggleClass('active');
      $('body').toggleClass('lock');
   });

//scroll-to-top
   const scrollSize = 100;
   const scrollUp = document.querySelector('.scroll-to-top');

   const getTop = () => window.pageYOffset || document.documentElement.scrollTop;


   window.addEventListener('scroll', () => {
      if (getTop() > scrollSize) {
         scrollUp.classList.add('show');
      } else {
         scrollUp.classList.remove('show');
      }
   });

   scrollUp.addEventListener('click', () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   });



   // animations
   //1.Добавить класс _anim-items для необходимого элемента
   //2.Прописать стили для класса _active который подставит скрипт
   //3.Класс _anim-no-hide отменяет удаление класса _active и анимация не повторяется при обратном скроле
   const animItems = document.querySelectorAll('._anim-items');

   if (animItems.length > 0) {
      window.addEventListener('scroll', animOnScroll);
      function animOnScroll() {
         for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
               animItem.classList.add('_active');
            }
            else {
               if (!animItem.classList.contains('_anim-no-hide')) {
                  animItem.classList.remove('_active');
               }
            }
         }
      }
      function offset(el) {
         const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      setTimeout(() => {
         animOnScroll();
      }, 300);

   }


// main-slider
var swiper = new Swiper('.main-slider', {
   slidesPerView: 1,
   loop: true,
   effect: 'fade',
   autoplay: {
      delay: 8000,
    },
   pagination: {
     el: '.swiper-pagination',
     dynamicBullets: true,
   },
 });

 var bookSwiper = new Swiper('.hero__left-slider', {
   effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 10,
        stretch: 1,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      loop: true,
      autoplay: {
         delay: 6000,
       },
      pagination: {
        el: '.swiper-pagination',
      },
 });

 var gallerySwiper = new Swiper('.gallery__slider', {
   slidesPerView: 4,
   // centeredSlides: true,
   spaceBetween: 10,
   grabCursor: true,
   loop: true,
   autoplay: {
      delay: 3000,
    },
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
 });
   

// fixed header
const header = document.querySelector('.header');

window.addEventListener('scroll', function(){
   header.classList.toggle('fixed', window.scrollY > 0);
})



// filials
 const openFilials = document.querySelector('.filials-btn'),
       filialsContent = document.querySelector('.filials__content'),
       openFilialsIcon = openFilials.querySelector('i');

       openFilials.addEventListener('click', function(){
         filialsContent.classList.toggle('active');
         openFilialsIcon.classList.toggle('hide');
       })

       const filials = [
          {
             name: 'Аккайинская с.б.',
             boss: 'Имя руководителя',
             adress: 'Аккайинская с.б. адрес',
             phone: 'номер телефона',
             info: 'Некая текстовая информация',
             imgSrc: 'img/akkain.jpg'
          },
           {
             name: 'Валихановская с.б.',
             boss: 'Имя руководителя',
             adress: 'Аккайинская с.б. адрес',
             phone: 'номер телефона',
             info: 'Некая текстовая информация',
             imgSrc: 'img/akkain.jpg'
          },
          {
            name: 'Весёлорощинская с.б.',
            boss: 'Имя руководителя',
            adress: 'Аккайинская с.б. адрес',
            phone: 'номер телефона',
            info: 'Некая текстовая информация',
            imgSrc: 'img/akkain.jpg'
         },
         {
            name: 'Жанажулдызская с.б.',
            boss: 'Имя руководителя',
            adress: 'Аккайинская с.б. адрес',
            phone: 'номер телефона',
            info: 'Некая текстовая информация',
            imgSrc: 'img/akkain.jpg'
         },
         {
            name: 'Кузьминская с.б.',
            boss: 'Имя руководителя',
            adress: 'Аккайинская с.б. адрес',
            phone: 'номер телефона',
            info: 'Некая текстовая информация',
            imgSrc: 'img/akkain.jpg'
         },
         {
            name: 'Башмачинская с.б.',
            boss: 'Имя руководителя',
            adress: 'Аккайинская с.б. адрес',
            phone: 'номер телефона',
            info: 'Некая текстовая информация',
            imgSrc: 'img/akkain.jpg'
         },
         {
            name: 'Березовская с.б.',
            boss: 'Имя руководителя',
            adress: 'Аккайинская с.б. адрес',
            phone: 'номер телефона',
            info: 'Некая текстовая информация',
            imgSrc: 'img/akkain.jpg'
         },
         {
            name: 'Енбекшинская с.б.',
            boss: 'Имя руководителя',
            adress: 'Аккайинская с.б. адрес',
            phone: 'номер телефона',
            info: 'Некая текстовая информация',
            imgSrc: 'img/akkain.jpg'
         },
         {
            name: 'Захаровская с.б.',
            boss: 'Имя руководителя',
            adress: 'Аккайинская с.б. адрес',
            phone: 'номер телефона',
            info: 'Некая текстовая информация',
            imgSrc: 'img/akkain.jpg'
         },
         {
            name: 'Лесная с.б.',
            boss: 'Имя руководителя',
            adress: 'Аккайинская с.б. адрес',
            phone: 'номер телефона',
            info: 'Некая текстовая информация',
            imgSrc: 'img/akkain.jpg'
         },
         {
            name: 'Михайловская с.б.',
            boss: 'Имя руководителя',
            adress: 'Аккайинская с.б. адрес',
            phone: 'номер телефона',
            info: 'Некая текстовая информация',
            imgSrc: 'img/akkain.jpg'
         },
         {
            name: 'Озёрновская с.б.',
            boss: 'Имя руководителя',
            adress: 'Аккайинская с.б. адрес',
            phone: 'номер телефона',
            info: 'Некая текстовая информация',
            imgSrc: 'img/akkain.jpg'
         },
         {
            name: 'Прииртышская с.б.',
            boss: 'Имя руководителя',
            adress: 'Аккайинская с.б. адрес',
            phone: 'номер телефона',
            info: 'Некая текстовая информация',
            imgSrc: 'img/akkain.jpg'
         },
         {
            name: 'Церковянская с.б.',
            boss: 'Имя руководителя',
            adress: 'Аккайинская с.б. адрес',
            phone: 'номер телефона',
            info: 'Некая текстовая информация',
            imgSrc: 'img/akkain.jpg'
         }
       ]
         

         const allFilials = document.querySelectorAll('.filial');
         const filialsContentOut = document.querySelector('.filials__content-out');

         allFilials.forEach(function(filial){
         filial.addEventListener('click', function(e){
      
            allFilials.forEach(function(filial){
               filial.classList.remove('active');
      })

      this.classList.add('active');
      let btnFilialName = this.textContent;

      filials.forEach(function(item){
         filialName = item.name;
         if(filialName === btnFilialName){
            // let filialImage = filialsContentOut.querySelector('.img-box');

            // filialImage.classList.add('active');

            filialsContentOut.innerHTML = `
            <div class="img-box active">
                        <img src="${item.imgSrc}" alt="">
                     </div>
                     <div class="desc">
                        <i class="fa fa-university" aria-hidden="true"></i>
                           <h4>${item.name}</h4>
                           <div class="row">
                              <span class="name">Руководитель:</span>
                              <span class="info">${item.boss}</span>
                           </div>
                           <div class="row">
                              <span class="name">Адрес:</span>
                              <span class="info">${item.adress}</span>
                           </div>
                           <div class="row">
                              <span class="name">Телефон:</span>
                              <span class="info">${item.phone}</span>
                           </div>
                           <div class="row">
                              <span class="name">Информация:</span>
                              <span class="info">${item.info}</span>
                           </div>
                     </div>
            `

         }
      })
      
   })
})


})