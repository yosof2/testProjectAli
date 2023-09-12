document.addEventListener('DOMContentLoaded', () => {

/**
 * loading page
 */

document.querySelector('.loading').style.display = 'none';
document.body.style.overflow = 'visible';

/**
 * navbar toggle in mobile
 */

const $openNav = document.querySelector ('[open-navbar]'),
    $closeNav = document.querySelector ('[close-navbar]'),
    $dataNavbar = document.querySelector ('.navbar'),
    $bar = document.querySelector ('.bar');

$openNav.addEventListener ('click', _ => {
    $dataNavbar.classList.toggle('navbar-mob');
    $bar.classList.toggle ('barr')
});


let navbar = document.querySelectorAll(`.navbar`);
navbar.forEach((e)=>{
    e.addEventListener("click" , ()=>{
        $dataNavbar.classList.toggle('navbar-mob');
    })
})
/**
 * color active in navbar
 */

const $navbarLink = document.querySelectorAll('.navbar-link'); 

for (const value of $navbarLink) {      
    value.onclick = _=>{
        clearBg();
        value.classList.add('active');
        $closeNav.style.display = 'none';
    };
};

function clearBg() {
    for (const value of $navbarLink) {
        value.classList.remove('active')    
    };
}; 

/**
 * Header scroll state
 */

    const $header = document.querySelector('[data-header]');

    window.addEventListener('scroll', () => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"] ("active");
    
    });
    
  // go up when you down
  let UP = document.querySelector('.Go-UP');
  window.onscroll = _=>{
    if (scrollY > 400) {
      UP.style.display ='block';
    }else    UP.style.display ='none';
  }

//   UP.addEventListener("click", function () {

//         window.scrollTo({
//           top: 0 ,behavior:"smooth"
//         });
        
//   });

  /**
   * - Anmimtion 
   */

  const $box1 = document.querySelector('.box1'),
    $box2 = document.querySelector('.box2'),
    $box3 = document.querySelector('.box3'),
    $box4 = document.querySelector('.box4'),
    $box5 = document.querySelector('.box5'),
    $box6 = document.querySelector('.box6'),
    $h1 = document.querySelectorAll('.h1'),
    $p = document.querySelector('.p'),
    $abou = document.querySelector('.abou'),
    $pic = document.querySelector('.pic'),
    $map = document.querySelector('.mapp'),
    $inp1 = document.querySelector('.inp1'),
    $last = document.querySelector('.last');

    let imgBg = document.querySelector(`.img-bg.x`);
    let main = document.querySelector(`.main`); 
    console.log(imgBg);
        imgBg.classList.toggle(`d-md-none`);

  window.addEventListener("scroll", _ => {

        if(window.scrollY > 600){
            imgBg.classList.remove(`d-md-none`);
            main.classList.remove(`z-2`);
        }else{
            imgBg.classList.add(`d-md-none`);
            main.classList.add(`z-2`);
        }
        if(window.scrollY > 800){
            main.classList.remove(`z-2`);
        }else{
            main.classList.add(`z-2`);
        }
      let oFset$box1 = $box1.offsetTop
      if (window.scrollY >= oFset$box1 -700) {
          $box1.style.opacity = "1"
          $box1.classList.add("animate__backInLeft");
          $box1.style.cssText = ' animation-delay: 1s;'
        }

        let oFset$box2 = $box2.offsetTop
        if (window.scrollY >= oFset$box2 -700) {
            $box2.style.opacity = "1"
            $box2.classList.add("animate__backInLeft");
            $box2.style.cssText = ' animation-delay: 0.7s;'
        }

        let oFset$box3 = $box3.offsetTop
        if (window.scrollY >= oFset$box3 -700) {
            $box3.style.opacity = "1"
            $box3.classList.add("animate__backInLeft");
            $box3.style.cssText = ' animation-delay: 0.3s;'
        }

        let oFset$box4 = $box4.offsetTop
        if (window.scrollY >= oFset$box4 -700) {
            $box4.style.opacity = "1"
            $box4.classList.add("animate__backInRight");
        }
        
        let oFset$box5 = $box5.offsetTop
        if (window.scrollY >= oFset$box5 -700) {
            $box5.style.opacity = "1"
            $box5.classList.add("animate__backInRight");
        }

        let oFset$box6 = $box6.offsetTop
        if (window.scrollY >= oFset$box6 -700) {
            $box6.style.opacity = "1"
            $box6.classList.add("animate__backInRight");
        }

        $h1.forEach(element => {
            let oFset$h1= element.offsetTop
            if (window.scrollY >= oFset$h1 -700) {
                element.style.opacity = "1"
                element.classList.add("animate__heartBeat");
        }
        });

        let oFset$abou = $abou.offsetTop
        if (window.scrollY >= oFset$abou - 700) {
            $abou.style.opacity = "1"
            $abou.classList.add("animate__lightSpeedInLeft");
        }

        let oFset$p = $p.offsetTop
        if (window.scrollY >= oFset$p - 700) {
            $p.style.opacity = "1"
            $p.classList.add("animate__slideInLeft");
        }

         let oFset$pic = $pic.offsetTop
        if (window.scrollY >= oFset$pic -700) {
            $pic.style.opacity = "1"
            $pic.classList.add("animate__zoomInRight");
        }

        let oFset$map = $map.offsetTop
        if (window.scrollY >= oFset$map -700) {
            $map.style.opacity = "1"
            $map.classList.add("animate__zoomInRight");
        }

        let oFset$inp1 = $inp1.offsetTop
        if (window.scrollY >= oFset$inp1 - 800) {
            $inp1.style.opacity = "1"
            $inp1.classList.add("animate__lightSpeedInLeft");
        }

        let oFset$last = $last.offsetTop
        if (window.scrollY >= oFset$last - 800) {
            $last.style.opacity = "1"
            $last.classList.add("animate__slideInRight");
        }


    });

});



/**
 * color when you scroll
 */

let navbar = document.querySelectorAll(`.navbar a`);
let contact = document.querySelectorAll(`.contact`);
let servises = document.querySelectorAll(`.servises`);
let artical = document.querySelectorAll(`.artical`);
let overView = document.querySelectorAll(`.overView`);
console.log(navbar);
navbar.forEach((e , i)=>{
    window.addEventListener("scroll" , ()=>{
        navbar[i].classList.remove(`active`);
        if(scrollY>2000){
            console.log("4");
            navbar[3].classList.add(`active`);
        }else if(scrollY>1400){
            console.log("3");
            navbar[2].classList.add(`active`);
        }else if(scrollY>700){
            console.log("2");
            navbar[1].classList.add(`active`);
        }else if(scrollY>=0){
            console.log("1");
            navbar[0].classList.add(`active`);
        } 
    })
})


/**
 * remove nav animation from the header in bg-screen
 */

let navbars = document.querySelector(`.navbar`);
if(window.innerWidth > 768 ){
  
  navbars.classList.remove(`animate__fadeInDown`);
}
  else{
    navbars.classList.add(`animate__fadeInDown`);
  }
  
window.addEventListener("scroll" , ()=>{
  if(window.innerWidth > 768 ){
  
    navbars.classList.remove(`animate__fadeInDown`);
  }
    else{
      navbars.classList.add(`animate__fadeInDown`);
    }
})








