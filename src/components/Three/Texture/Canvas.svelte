<script lang="ts">
  import ThreeCanvas from '@/components/Three/ThreeCanvas.svelte';
  import Scene from './Scene.svelte';
  import Camera from '../Camera/Camera.svelte';

  let controls: any;
  const grid = 2.8;
  const gap = 0.2;
  const position = [0, grid * 1.5 + gap, 60];
  const target = [0, grid * 1.5 + gap, 0];
</script>

<ThreeCanvas>
  <Scene />
  <Camera bind:controls {position} {target} />
</ThreeCanvas>
