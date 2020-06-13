# canvas2-dots

A simple implementation of a genetic algorithm. Each dot has 400 randomly generated angles (from 0 to 359 degrees) in its "brain" and moves 10 pixels in each step. Then the distance to the goal is counted. Then a pseudo-natural selection algorithm randomly chooses a dot. The dots which are closer to the goal have a more chance to be drawn. A dot my by draw a few times. After drawing new dots are cloned with mutation chance to change some of its angles. When a dot reaches the goal the less step to reach the goal is counted after each simulation step. You can turn on and off additional obstacles (recommended before running a simulation).

Strongly inspired by [Code Bullet tutorial](https://github.com/Code-Bullet/Smart-Dots-Genetic-Algorithm-Tutorial), but I wrote it in JavaScript with some modifications.

## Simulation

Distance to goal: 500 (pixels, straight)
Steps: 400

## Dots

Population size: 180
Mutation rate: 0.01
"Brain" size: 400 (randomly generated angles)
Move: 10 (pixels per simulation step)

[Live version](http://mybytes.pl/projects/dots/)
