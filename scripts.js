// scripts.js

function Phone (brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "zł.");
}

var samsungGalaxyS7 = new Phone("Samsung", 2399, "white");
var iPhone6S = new Phone("Apple", 2699, "gold");
var htcOneA9S = new Phone("HTC", 1099, "black");

samsungGalaxyS7.printInfo();
iPhone6S.printInfo();
htcOneA9S.printInfo();

