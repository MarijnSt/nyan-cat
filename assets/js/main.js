var knopke = document.querySelector("button");
var kat = document.querySelector("#kat");

knopke.addEventListener("click", function(){
	var timeLeft = 5;
    var runTimer = setInterval(function(){
    timeLeft--;
    //Drop cats
    katvallen();
    if(timeLeft <= 0)
        clearInterval(runTimer);
    },1000);	
});

function katvallen(){
	var posX = Math.floor(Math.random() * 100);
	var start = posX + "vw";
	kat.classList.add("nyan-start");
	kat.style.left = start;
	kat.classList.toggle("hidden");
	setTimeout(function(){
		kat.classList.remove("nyan-start");
		kat.classList.toggle("nyan-end");
		var posBottom = (posX + 20) + "vw";
		kat.style.left = posBottom;
	}, 1);
}