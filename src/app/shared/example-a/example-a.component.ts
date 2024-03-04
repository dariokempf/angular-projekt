import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-a',
  templateUrl: './example-a.component.html',
  styleUrls: ['./example-a.component.css']
})
export class ExampleAComponent implements OnInit {
  birdPosition: number = 250; // Initial position of the bird
  gravity: number = 0.5; // Gravity force
  jumpStrength: number = 10; // Jump strength
  gameSpeed: number = 10; // Game speed
  isJumping: boolean = false; // Flag to track if the bird is jumping

  constructor() { }

  ngOnInit(): void {
    this.startGame();
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
}