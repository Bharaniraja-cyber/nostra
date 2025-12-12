btn1.addEventListener("click",function(){
    pop1.style.display = "none"
})





document.querySelectorAll('.heart_black').forEach(blackHeart => {
    const red = blackHeart.nextElementSibling;

    blackHeart.addEventListener('click', () => {
        red.style.display = 'block';
    });

    red.addEventListener('click', () => {
        red.style.display = 'none';
    });
});


var hid = document.querySelector(".hidden")
var menu = document.querySelector(".sec_navbar_menu")
var menu_cancel = document.getElementById("menu_cancel")


hid.addEventListener("click",function(){
    menu.style.left = 0
    pop1.style.display = "none"

})


menu_cancel.addEventListener("click",function(){
    menu.style.left = "-100%"
    pop1.style.display = ""

})



let currentSlide = 0;
const slides = document.querySelectorAll('.slide_image');

function showSlide(n) {
    // Hide all
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Loop around
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    
    // Show current
    slides[currentSlide].classList.add('active');
}

function plusSlides(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

// Auto-play every 4 seconds (optional - remove if you don't want auto slide)
setInterval(() => {
    plusSlides(1);
}, 4000);

// Start with first slide
showSlide(currentSlide);

