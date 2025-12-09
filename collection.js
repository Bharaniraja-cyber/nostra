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


