# Interactive rug shader

View Live: [StackBlitz](https://stackblitz.com/~/github.com/Faraz-Portfolio/demo-2025-interactive-rug)

<video src="./assets/demo.mp4" width="400px" autoplay muted></video>

A simple interactive rug shader that simulates a spherical object going under a rug and the subsequent lifting of the rug.

Inspired by the [Rug Shader](https://80.lv/articles/learn-how-to-make-interactive-rug-with-unity-s-shader-graph) by [Inigo @\_Dervishh](https://x.com/_Dervishh).

## How it works

The lift is based on a circle SDF centered on the position of the refrence object. Physics are done via react-three/rapier.

## 3D Model credits

- Carpet: https://sketchfab.com/3d-models/carpet-66e06c1857814fd2a60e3ecfdba36ae0
- Blocks: https://sketchfab.com/3d-models/blocks-e3455b13c1a14ca69962d5f5fa2f3efa
