var knopke = document.querySelector("button");
var kat = document.querySelector("#kat");

knopke.addEventListener("click", function(){
	kat.classList.toggle("nyan-start");
	kat.classList.toggle("nyan-end");
});
