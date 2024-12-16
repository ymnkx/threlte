<script>
  import { Canvas } from '@threlte/core';
  import Scene from './Scene.svelte';
</script>

<!-- cameraを作用させるために必要 -->
<div class="canvas">
  <Canvas autoRender={false}>
    <Scene />
  </Canvas>
</div>

<div class="canvas -gs" id="js-gs-canvas"></div>

<style>
  .canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &.-gs {
      pointer-events: none;
      background-color: #dddddd;
    }
  }
</style>
