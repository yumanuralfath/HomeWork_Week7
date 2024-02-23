import { Square } from "./formulaSquare.js";

// Membuat objek Square dengan panjang sisi 5
const square = new Square(5);

// Menghitung dan mencetak keliling persegi
console.log("Keliling persegi:", square.squarePerimeter());

// Menghitung dan mencetak luas persegi
console.log("Luas persegi:", square.squareArea());

// Menghitung dan mencetak keliling persegi panjang
console.log("Keliling persegi panjang:", square.rectanglePerimeter(4, 6));

// Menghitung dan mencetak luas persegi panjang
console.log("Luas persegi panjang:", square.rectangleArea(4, 6));
