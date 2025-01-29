<script lang="ts">
  import { T } from '@threlte/core';
  import Object from './Object.svelte';
  import ObjectNormal from './ObjectNormal.svelte';
  import ObjectLambert from './ObjectLambert.svelte';
  import ObjectPhong from './ObjectPhong.svelte';
  import ObjectToon from './ObjectToon.svelte';
  import ObjectStandard from './ObjectStandard.svelte';
  import Frame from '../Frame.svelte';
  import { grid } from './material.svelte.ts';
</script>

<T.Group position.x={grid * -1.5} position.y={0}>
  <T.Group position.x={0} position.y={grid}>
    <Frame label="MeshBasicMaterial">
      <Object />
    </Frame>
  </T.Group>
  <T.Group position.x={grid} position.y={grid}>
    <Frame label="MeshNormalMaterial">
      <ObjectNormal />
    </Frame>
  </T.Group>
  <T.Group position.x={grid * 2} position.y={grid}>
    <Frame label="MeshLambertMaterial">
      <ObjectLambert />
    </Frame>
  </T.Group>
  <T.Group position.x={0} position.y={0}>
    <Frame label="MeshPhongMaterial">
      <ObjectPhong />
    </Frame>
  </T.Group>
  <T.Group position.x={grid} position.y={0}>
    <Frame label="MeshToonMaterial">
      <ObjectToon />
    </Frame>
  </T.Group>
  <T.Group position.x={grid * 2} position.y={0}>
    <Frame label="MeshStandardMaterial">
      <ObjectStandard />
    </Frame>
  </T.Group>
</T.Group>
