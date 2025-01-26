<script lang="ts">
  import ThreeCanvas from '@/components/Three/ThreeCanvas.svelte';
  import Items from './Items.svelte';
  import Camera from '../Camera/Camera.svelte';

  let controls: any;
  const grid = 2.8;
  const position = [0, grid * 0.5, 50];
  const target = [0, grid * 0.5, 0];
</script>

<ThreeCanvas>
  <Items />
  <Camera bind:controls {position} {target} />
</ThreeCanvas>
