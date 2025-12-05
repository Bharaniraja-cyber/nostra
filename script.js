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

