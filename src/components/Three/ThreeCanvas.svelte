<script>
  import { Canvas } from '@threlte/core';
  import { ACESFilmicToneMapping } from 'three';
  let { children } = $props();
</script>

<div class="canvas" id="js-canvas">
  <Canvas toneMapping={ACESFilmicToneMapping}>
    {@render children()}
  </Canvas>
</div>

<style>
  .canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }
</style>
