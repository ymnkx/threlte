<script lang="ts">
  import { T } from '@threlte/core';
  import { MeshLineGeometry } from '@threlte/extras';
  import { Vector3 } from 'three';
  import Label from './Label.svelte';
  const settings = {
    size: 2,
    padding: 0.4,
  };
  const width = settings.size + settings.padding * 2;
  const height = settings.size + settings.padding * 2;
  const points = [
    new Vector3(0, 0, 0),
    new Vector3(width, 0, 0),
    new Vector3(width, height, 0),
    new Vector3(0, height, 0),
  ];
  export let label = 'Frame';
  export let offset = 0;
</script>

<T.Line>
  <MeshLineGeometry {points} />
  <T.LineBasicMaterial color="#000000" />
</T.Line>
<Label text={label} position={{ x: 0.075, y: height - 0.15, z: 0 }} />

<T.Group position.x={width * 0.5} position.y={height * 0.5 - 0.1} position.z={offset}>
  <slot></slot>
</T.Group>

<!-- <T.Mesh>
  <MeshLineGeometry {points} />
  <MeshLineMaterial
    width={0.5}
    color="#fe3d00"
  />
</T.Mesh> -->
<!-- MeshLineMaterialがエラー -->
