var knopke = document.querySelector("button");
var kat = document.querySelector("#kat");

var posX = 0;

function randomPositieTop(i){
	posX = Math.floor(Math.random() * 100);
	var random = posX + "vw";
	i.style.left = random;
}

knopke.addEventListener("click", function(){
	katvallen();
});

function katvallen(){
	kat.classList.add("nyan-start");
	randomPositieTop(kat);
	kat.classList.toggle("hidden");
	setTimeout(function(){
		kat.classList.remove("nyan-start");
		kat.classList.toggle("nyan-end");
		var posBottom = (posX + 20) + "vw";
		kat.style.left = posBottom;
	}, 1);
}

function generateCats(){
	
}