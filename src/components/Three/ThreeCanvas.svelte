<script>
  import { Canvas } from '@threlte/core';
  import { ACESFilmicToneMapping } from 'three';
</script>

<div class="canvas" id="js-canvas">
  <Canvas toneMapping={ACESFilmicToneMapping}>
    <slot></slot>
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
