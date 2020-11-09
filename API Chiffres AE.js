var callBackGetSuccess = function(data) {
    console.log("data", data)
    //alert("Critiques : " + data.results) //"data.results" est le chemin pour accéder à notre demande, dans ce cas c'est le numéro de la page.
    var element = document.getElementById("zone_budget");
    element.innerHTML = data.budget;
    var element = document.getElementById("zone_revenue");
    element.innerHTML = data.revenue;
}

var url = "https://api.themoviedb.org/3/movie/299534?api_key=0bee5e1868fb90c11b6992925fc67e0b&language=fr"

$.get(url, callBackGetSuccess).done(function() {
})
.fail(function() {
alert("error");
})
.always(function(){
});

