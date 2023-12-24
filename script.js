let menu = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll= () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// home swiper section

var swiper = new Swiper(".home_main", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   scroll reveal JS

const sr = ScrollReveal({

    distance: '60px',
    duration: 2500,
    reset: true

});
// Home section

sr.reveal('.about_img' , {delay:200 , origin: 'left'});
sr.reveal('.about_content' , {delay:200 , origin: 'right'});

// Department section

sr.reveal('#department_1' , {delay:200 , origin: 'left'});
sr.reveal('#department_2' , {delay:200 , origin: 'top'});
sr.reveal('#department_3' , {delay:200 , origin: 'right'});
sr.reveal('#department_4' , {delay:200 , origin: 'right'});
sr.reveal('#department_5' , {delay:200 , origin: 'bottom'});
sr.reveal('#department_6' , {delay:200 , origin: 'left'});
sr.reveal('#department_7' , {delay:200 , origin: 'left'});
sr.reveal('#department_8' , {delay:200 , origin: 'bottom'});
sr.reveal('#department_9' , {delay:200 , origin: 'right'});

// contact section

sr.reveal('#box1' , {delay:200 , origin: 'left'});
sr.reveal('#box2' , {delay:200 , origin: 'top'});
sr.reveal('#box3' , {delay:200 , origin: 'bottom'});
sr.reveal('#box4' , {delay:200 , origin: 'right'});


// contact section

sr.reveal('#order' , {delay:200 , origin: 'right'});