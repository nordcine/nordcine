var callBackGetSuccess = function(data) {
    console.log("data", data)
    //alert("Critiques : " + data.results) "data.results" est le chemin pour accéder à notre demande, dans ce cas c'est le numéro de la page.
    var element = document.getElementById("zone_cast");
    element.innerHTML = "<h3>" + data.cast[0].name + " : " + "</h3>" + "<p>" + data.cast[0].character + "</p>" + "</br>" +
    "<h3>" + data.cast[1].name + " : " + "</h3>" + "<p>" + data.cast[1].character + "</p>" + "</br>" +
    "<h3>" + data.cast[2].name + " : " + "</h3>" + "<p>" + data.cast[2].character + "</p>" + "</br>" +
    "<h3>" + data.cast[3].name + " : " + "</h3>" + "<p>" + data.cast[3].character + "</p>" + "</br>" +
    "<h3>" + data.cast[4].name + " : " + "</h3>" + "<p>" + data.cast[4].character + "</p>" + "</br>" +
    "<h3>" + data.cast[5].name + " : " + "</h3>" + "<p>" + data.cast[5].character + "</p>" + "</br>" ;
    var element = document.getElementById("zone_real");
    element.innerHTML = "<h3>Réalisé par : </h3>" + "<p>" + data.crew[20].name + " et " +  data.crew[21].name + "</p>" + "</br>";
    var element = document.getElementById("zone_producer");
    element.innerHTML = "<h3>Produit par : </h3>" + "<p>" + data.crew[10].name + "</p>" + "</br>";
    
}

var url = "https://api.themoviedb.org/3/movie/299534/credits?api_key=0c96e3e0bf84ab754a8547fdff224572"

$.get(url, callBackGetSuccess).done(function() {
})
.fail(function() {
alert("error");
})
.always(function(){
});

