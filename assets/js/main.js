var knopke = document.querySelector("button");
var kat = document.querySelector("#kat");

knopke.addEventListener("click", function(){
	kat.classList.toggle("nyan-start");
	if(kat.classList.contains("nyan-start")){
		kat.style.left = randomGetalX();
	}
	kat.classList.toggle("hidden");
});

function randomGetalX(){
	var random = Math.floor(Math.random() * 100) + "vw";
	return random;
}
