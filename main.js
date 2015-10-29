var key = 0;

$(function(){
	setInterval(function(){
		draw();
		key = 0;
	}, 40);

	$(document).keydown( function (e) {
	    key = e.which;
		console.log(key);
	});
	// $("#myCanvas").click(function (e) {
	// 	console.log("yeah");
	// 	key = 39;
	// });
});



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";

var bgImage = document.getElementById("bg");
var pikaSprite = document.getElementById("pika");

var pika = {
	hp: 100,
	position: {x:0, y:400}
};

function draw(){
	
	if(key === 39){
		pika.position.x += 20;
	} else if (key===37) {
		pika.position.x -= 20;
	}

	ctx.drawImage(bgImage,0,0);
	ctx.drawImage(pikaSprite, pika.position.x, pika.position.y, 120, 120);
	ctx.fillText("HP:"+pika.hp,10,50);
}