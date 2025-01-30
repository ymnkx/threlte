<script lang="ts">
  import { T, useThrelte } from '@threlte/core';
  import MeshBasicMaterial from './MeshBasicMaterial/Index.svelte';
  import MeshPhongMaterial from './MeshPhongMaterial/Index.svelte';
  import MeshStandardMaterial from './MeshStandardMaterial/Index.svelte';
  import { grid, gap } from './texture.svelte.ts';

  const { scene } = useThrelte();
</script>

<T.Group position.x={grid * -3}>
  <T.Group position.x={0} position.y={(grid + gap) * 2}>
    <MeshPhongMaterial />
  </T.Group>
  <T.Group position.x={0} position.y={grid + gap}>
    <MeshStandardMaterial />
  </T.Group>
  <T.Group position.x={0} position.y={0}>
    <MeshBasicMaterial />
  </T.Group>
</T.Group>
