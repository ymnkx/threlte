<script lang="ts">
  import ThreeCanvas from '@/components/Three/ThreeCanvas.svelte';
  import Scene from './Scene.svelte';
  import Camera from '../Camera/Camera.svelte';

  let controls: any;
  const grid = 2.8;
  const position = [0, grid, 50];
  const target = [0, grid, 0];
</script>

<ThreeCanvas>
  <Scene />
  <Camera bind:controls {position} {target} />
</ThreeCanvas>
