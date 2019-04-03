var knopke = document.querySelector("button");
var cats = document.querySelectorAll(".cat");

knopke.addEventListener("click", function(){
	showCats();
	/* TIMER

	var timeLeft = 10;
    var runTimer = setInterval(function(){
    timeLeft--;
    //Drop cats
    katvallen(kat);
    if(timeLeft <= 0)
        clearInterval(runTimer);
    },1000);*/	
});

/* functie om een kat te laten vallen*/
function katvallen(i){
	var posX = Math.floor(Math.random() * 80);
	var start = posX + "vw";
	i.classList.add("nyan-start");
	i.style.left = start;
	i.classList.toggle("hidden");
	setTimeout(function(){
		i.classList.remove("nyan-start");
		i.classList.add("nyan-end");
		var posBottom = (posX + 20) + "vw";
		i.style.left = posBottom;
	}, 1);
}

/* functie om door array van katten te gaan en ze te laten zien*/
function showCats() {
	for (var i = 0; i < cats.length; i++){
		katvallen(cats[i]);
	}
};