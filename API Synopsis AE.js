var callBackGetSuccess = function(data) {
    console.log("data", data)
    //alert("Critiques : " + data.results) "data.results" est le chemin pour accéder à notre demande, dans ce cas c'est le numéro de la page.
    var element = document.getElementById("zone_synopsis");
    element.innerHTML = data.overview;
    var element = document.getElementById("zone_tagline");
    element.innerHTML = data.tagline;
    var element = document.getElementById("zone_title");
    element.innerHTML = data.title;
    var element = document.getElementById("zone_title2");
    element.innerHTML = "<a class='article_view_title_js' href='" + data.homepage + "'>" + data.title + "</a>";
    var element = document.getElementById("zone_date");
    element.innerHTML = "<h3>Statut : </h3>" + "<p>Sortie le " + data.release_date + "</p>" + "</br>";
    var element = document.getElementById("zone_production");
    element.innerHTML = "<h3>Boite de production : </h3>" + "<p>" + data.production_companies[0].name + "</p>" + "</a>" + "</br>" ;
    var element = document.getElementById("zone_budget");
    element.innerHTML = "<h3>Budget : </h3>" + "<p>" + data.budget + " $</p>" + "</br>";
    var element = document.getElementById("zone_recette");
    element.innerHTML = "<h3>Recette : </h3>" + "<p>" + data.revenue + " $</p>" + "</br>";
}

var url = "https://api.themoviedb.org/3/movie/299534?api_key=0bee5e1868fb90c11b6992925fc67e0b&language=fr"

$.get(url, callBackGetSuccess).done(function() {
})
.fail(function() {
alert("error");
})
.always(function(){
});

