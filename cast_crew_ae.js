var callBackGetSuccess = function(data) {
    console.log("datacastcrewae", data)
    var element = document.getElementById("cast_actor_iron-man");
    element.innerHTML = "<h3>" + data.cast[0].name + "</h3>" ;
    var element = document.getElementById("cast_iron-man");
    element.innerHTML = "<h3>" + data.cast[0].character + "</h3>";
    var element = document.getElementById("cast_actor_capt-america");
    element.innerHTML = "<h3>" + data.cast[1].name + "</h3>" ;
    var element = document.getElementById("cast_capt-america");
    element.innerHTML = "<h3>" + data.cast[1].character + "</h3>";
    var element = document.getElementById("card_actor_hulk");
    element.innerHTML = "<h3>" + data.cast[2].name + "</h3>" ;
    var element = document.getElementById("cast_hulk");
    element.innerHTML = "<h3>" + data.cast[2].character + "</h3>";
    var element = document.getElementById("card_actor_thor");
    element.innerHTML = "<h3>" + data.cast[3].name + "</h3>" ;
    var element = document.getElementById("cast_thor");
    element.innerHTML = "<h3>" + data.cast[3].character + "</h3>";
    var element = document.getElementById("card_actor_black-widow");
    element.innerHTML = "<h3>" + data.cast[4].name + "</h3>" ;
    var element = document.getElementById("cast_black-widow");
    element.innerHTML = "<h3>" + data.cast[4].character + "</h3>";
    var element = document.getElementById("card_actor_hawkeye");
    element.innerHTML = "<h3>" + data.cast[5].name + "</h3>" ;
    var element = document.getElementById("cast_hawkeye");
    element.innerHTML = "<h3>" + data.cast[5].character + "</h3>";

    var element = document.getElementById("crew_real_1");
    element.innerHTML = "<h3>" + data.crew[21].name + "</h3>";
    var element = document.getElementById("crew_real_2");
    element.innerHTML = "<h3>" + data.crew[22].name + "</h3>";
    
    var element = document.getElementById("crew_producer");
    element.innerHTML = "<h3>" + data.crew[10].name + "</h3>";
}

var url = "https://api.themoviedb.org/3/movie/299534/credits?api_key=0c96e3e0bf84ab754a8547fdff224572"

$.get(url, callBackGetSuccess).done(function() {
})
.fail(function() {
alert("error");
})
.always(function(){
});

