// Меню
const iconMenu = document.querySelector('.menu_icon');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link')
if (iconMenu){  
  iconMenu.addEventListener('click', function(e){
    document.body.classList.toggle('_lock');
    menu.classList.toggle('_active');
    iconMenu.classList.toggle('_active');
  });
}
if (menuLinks.length>0){
  menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click", ()=>{
      if (iconMenu.classList.contains('_active')){
        document.body.classList.remove('_lock');
        menu.classList.remove('_active');
        iconMenu.classList.remove('_active');
      } 
    });
  });  
}


// Слайдер
let number, numberNew, i = 0;

const languages = document.querySelectorAll('.language_link');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const len = languages.length;


arrowLeft.addEventListener('click', () => {
  for (let language in languages){    
    if (languages[language].classList.contains('active')){
      number = language;
      break;
    }  
  }
  arrowRight.classList.add('active');
  if (number == 1) {
    arrowLeft.classList.remove('active');
  }
  if (0 < number < 3){
    numberNew = (parseInt(number) + 3) % 6;
    if (numberNew == 0){
      numberNew = len;
    }
    languages[numberNew-1].classList.remove('active');
    languages[parseInt(number)-1].classList.add('active');
  }
});


arrowRight.addEventListener('click', () => {
  for (let language in languages){    
    if (languages[language].classList.contains('active')){
      number = language;
      break;
    }  
  }
  arrowLeft.classList.add('active');
  // console.log(number);
  if (number < 3){
    languages[number].classList.remove('active');
    numberNew = (parseInt(number) + 3) % 6;
    languages[numberNew].classList.add('active');
  }
  if (number == 2) {
    arrowRight.classList.remove('active');
  }
});
