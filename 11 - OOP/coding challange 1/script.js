'use strict';

/*
Coding Challange #1

1. Use a constructor function to implement a Car.
A car has a make and a speed property. The speed
property is the current speed of the car in km/h;
2. Implement an 'acelerate' method that will
increase the car's speed by 10, and log the new
speed to the console;
3. Implement a 'brake' method that will decrease
the car's speed by 5, and log the new speed to 
the console.
4. Create 2 car objects and experiment with
calling 'acelerate' and 'brake' multiple times
on each of them.

Data 1: 'BMW' going at 120 km/h
Data 2: 'Mercedes' going at 95 km/h
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.acelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
console.log(bmw);
bmw.acelerate();
bmw.brake();
