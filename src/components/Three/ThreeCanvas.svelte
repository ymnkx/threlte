<script>
  import { Canvas } from '@threlte/core';
</script>

<div class="canvas" id="js-canvas">
  <Canvas>
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
