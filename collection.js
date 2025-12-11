var search = document.getElementById("search");
var dress_filter = document.getElementById("dress_filter");
var dress = dress_filter.querySelectorAll("div");

search.addEventListener("keyup", function() { 
    var dresslist = event.target.value.toUpperCase();

    for (var count = 0; count < dress.length; count = count + 1) { 
        
        var dressname = dress[count].querySelector("h2").textContent;

        if (dressname.toUpperCase().indexOf(dresslist) < 0) {
            dress[count].style.display = "none";
        } else {
            dress[count].style.display = "block"; 
        }
    }
});

var sorting = document.querySelector(".filter_sec")
var sort = sorting.querySelectorAll("input")

sort.forEach(function(input){
    input.addEventListener("click",function(event){
        var check = event.target.value.toUpperCase()

        if(!event.target.checked){
            check=""
        }

        for(var i=0;i<dress.length;i=i+1){
            var dressname = dress[i].querySelector("h2").textContent.toUpperCase();

            if (dressname.indexOf(check)<0){
                dress[i].style.display = "none"
            }
            else{
                dress[i].style.display = "block"
            }
        }
    })
    
})




