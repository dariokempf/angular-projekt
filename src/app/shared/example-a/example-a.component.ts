import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-a',
  templateUrl: './example-a.component.html',
  styleUrls: ['./example-a.component.css']
})
export class ExampleAComponent implements OnInit {
  birdPosition: number = 250; // Initial position of the bird
  gravity: number = 3; // Gravity force
  jumpStrength: number = 100; // Jump strength
  gameSpeed: number = 10; // Game speed
  isJumping: boolean = false; // Flag to track if the bird is jumping
  obstacles: any[] = []; // Array to store obstacles

  constructor() { }

  ngOnInit(): void {
    this.startGame();
    this.generateObstacles();
  }

  startGame() {
    setInterval(() => {
      this.applyGravity();
    }, this.gameSpeed);
  }

  applyGravity() {
    if (!this.isJumping) {
      this.birdPosition -= this.gravity;
    }
  }

  jump() {
    this.isJumping = true;
    this.birdPosition += this.jumpStrength;
    setTimeout(() => {
      this.isJumping = false;
    }, 300); // Adjust this value for the duration of the jump animation
  }

  @HostListener('window:keydown.space')
  onSpaceBarPress() {
    this.jump();
  }

  generateObstacles() {
    console.log("Generating obstacles...");
    setInterval(() => {
      // Generate a new obstacle and add it to the array
      this.obstacles.push({
        top: Math.random() * 300, // Random height
        left: 400 // Starting position outside the game area
      });
      console.log("Obstacle generated:", this.obstacles);
    }, 2000); // Interval for generating new obstacles (in milliseconds)
  }
}
