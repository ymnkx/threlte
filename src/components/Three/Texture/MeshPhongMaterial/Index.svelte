<script lang="ts">
  import { T } from '@threlte/core';
  import All from './All.svelte';
  // import Bump from './Bump.svelte';
  import Specular from './Specular.svelte';
  import Displacement from './Displacement.svelte';
  import Normal from './Normal.svelte';
  import Ao from './Ao.svelte';
  import Alpha from './Alpha.svelte';
  import Frame from '../../Frame.svelte';
  const grid = 2.8;
  const offset = -0.1;
  const gap = 0.2;
</script>

<T.Group position.x={-gap} position.y={0}>
  <Frame label="MeshPhongMaterial" {offset}>
    <All />
  </Frame>
</T.Group>
<T.Group position.x={grid} position.y={0}>
  <Frame label="DisplacementMap" {offset}>
    <Displacement />
  </Frame>
</T.Group>
<T.Group position.x={grid * 2} position.y={0}>
  <Frame label="NormalMap" {offset}>
    <Normal />
  </Frame>
</T.Group>
<T.Group position.x={grid * 3} position.y={0}>
  <Frame label="AmbientOcclusionMap" {offset}>
    <Ao />
  </Frame>
</T.Group>
<T.Group position.x={grid * 4} position.y={0}>
  <Frame label="AlphaMap" {offset}>
    <Alpha />
  </Frame>
</T.Group>
<T.Group position.x={grid * 5} position.y={0}>
  <Frame label="SpecularMap" {offset}>
    <Specular />
  </Frame>
</T.Group>

<!-- <T.Group position.x={10} position.y={0}>
  <Bump />
  <SceneLabel text="(BumpMap)" />
</T.Group> -->
