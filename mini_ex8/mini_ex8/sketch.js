var weather;

function preload() {
img1 = loadImage('beyonce.png');
img2 = loadImage('skirt.png');
img3 = loadImage('beyonce-hand.png');

}
function setup() {
createCanvas(600, 800);
loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Aarhus&APPID=c1cf7d922ce7a8df0cedb81b7aad1227&units=metric', gotData);
//Try to change the city (Aarhus) in the URL to see how long a skirt you need to wear to stay as hot as Beyonce!
}

function gotData(data) {
weather = data;

}

function draw() {
background(255, 200, 200);
fill(255);
textSize(20);
image(img1, 20, -20, 520, 800);


if (weather) {

if(weather.main.temp<10){

		image(img2, 150,315,290,weather.main.temp+350);
		image(img3, 276,293,80,80)
}

if(weather.main.temp>10 && weather.main.temp<15){

		image(img2, 150,315,290,weather.main.temp+250);
		image(img3, 276,293,80,80)
}

if(weather.main.temp>15 && weather.main.temp<20){

		image(img2, 150,315,290,weather.main.temp+200);
		image(img3, 276,293,80,80)
}

else if(weather.main.temp>20){

		image(img2, 150,315,290,weather.main.temp+150);
		image(img3, 276,293,80,80)
}

}

}
