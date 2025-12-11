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
})


menu_cancel.addEventListener("click",function(){
    menu.style.left = "-70%"
})

