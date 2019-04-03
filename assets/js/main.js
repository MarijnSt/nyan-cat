var knopke = document.querySelector("button");
var cats = document.querySelectorAll(".cat");

/* functie om een kat te laten vallen*/
function katvallen(i){
	var posX = Math.floor(Math.random() * 80);
	var start = posX + "vw";
	i.style.left = start;
	i.classList.add("nyan-start");
	i.classList.toggle("hidden");
	setTimeout(function(){
		i.classList.remove("nyan-start");
		var posBottom = (posX + 20) + "vw";
		i.style.left = posBottom;
		i.classList.add("nyan-end");
	}, 1);
}

/* functie om door array van katten te gaan en ze te laten zien*/
var i = 0;

function showCats() {
	katvallen(cats[i]);
	i++;
	if(i < cats.length){
		setTimeout(showCats, 1100);
	}
};

knopke.addEventListener("click", function(){
	showCats();
});