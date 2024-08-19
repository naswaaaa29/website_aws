let moon = document.getElementById("moon");
let hand = document.getElementById("hand");
let text = document.getElementById("text");
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
var bottomPx;

function updateBottomPosition() {
    var lebarLayar = window.innerWidth;
    var tinggiLayar = window.innerHeight;
    var bottomPercentage;

    // Jika lebar layar >= 1000px, bottom 10%
    if (lebarLayar <= 500) {
        bottomPercentage = 50; // Jika lebar layar <= 500px, bottom 50%
    }else if(tinggiLayar <= 700){
        bottomPercentage = -10+ (60 - 10) * (1700 - lebarLayar) / (1700 - 600);
    } else {
        // Menghitung bottom secara proporsional antara 10% dan 50% berdasarkan lebar layar
        bottomPercentage = 0+ (60 - 10) * (1700 - lebarLayar) / (1700 - 600);
    }

    // Menyesuaikan posisi bottom berdasarkan tinggi layar juga
    bottomPx = (bottomPercentage / 100) * tinggiLayar-100;
  
    // Mengatur properti CSS bottom dari elemen yang diinginkan
    moon.style.bottom = bottomPx + 'px';
}

// Memanggil fungsi saat halaman dimuat
updateBottomPosition();

// Menambahkan event listener untuk memperbarui saat ukuran layar berubah
window.addEventListener('resize', updateBottomPosition);



// Function to handle parallax effects and hide/show parallax-home
window.addEventListener("scroll", () => {
    let value = window.scrollY;
    let tinggiLayarhand = window.innerHeight * (bottomPx / window.innerHeight);
   
    
    let handbot = value * -0.7;

   
    
    moon.style.bottom = tinggiLayarhand + value * -0.7 + "px";
    hand.style.bottom = handbot + "px";

    
    text.style.marginTop = value * 1 + 'px';
    p2.style.left = value * -1.5 + 'px';
    p3.style.left = value * 1.5 + 'px';

    const parallaxHome = document.querySelector(".parallax-home");
    const aboutSection = document.querySelector(".about");
    const aboutOffsetTop = aboutSection.offsetTop;

    // Parallax background position adjustment
    parallaxHome.style.backgroundPositionY = `${value * 0.5}px`;

    // Hide parallax-home when reaching 'about' section
    if (value >= aboutOffsetTop) {
        parallaxHome.classList.add('hidden');
    } else {
        parallaxHome.classList.remove('hidden');
    }
});

// Progress bar 
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// Efek Parallax 
document.addEventListener("scroll", function () {
    const scrollPos = window.pageYOffset;
    const parallaxHome = document.querySelector(".parallax-home");

    parallaxHome.style.backgroundPositionY = `${scrollPos * 0.5}px`;
});


// lima-sehat 
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}