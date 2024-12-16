<script lang="ts">
  import { T } from '@threlte/core';
  import { useTexture } from '@threlte/extras';
  import { DoubleSide } from 'three';
  import { mapType } from '../stores';
  import Frame from '../../Frame.svelte';
  $: texture =
    $mapType === 'orange'
      ? useTexture('/assets/image/orange.png')
      : $mapType === 'green'
        ? useTexture('/assets/image/green.png')
        : Promise.resolve(null);
  const displacementTexture = useTexture('/assets/image/DisplacementMap.png');
  const normalTexture = useTexture('/assets/image/NormalMap.png');
  const aoTexture = useTexture('/assets/image/AmbientOcclusionMap.png');
  const alphaTexture = useTexture('/assets/image/AlphaMap.png');
  const specularTexture = useTexture('/assets/image/SpecularMap.png');
  const grid = 2.8;
  const offset = -0.1;
  const gap = 0.2;
</script>

<T.Group position.x={-gap} position.y={0}>
  <Frame label="MeshBasicMaterial" {offset}>
    {#await texture then value}
      <T.Mesh>
        <T.PlaneGeometry args={[2, 2]} />
        <T.MeshBasicMaterial color="white" side={DoubleSide} map={value} />
      </T.Mesh>
    {/await}
  </Frame>
</T.Group>
<T.Group position.x={grid} position.y={0}>
  <Frame label="DisplacementMap" {offset}>
    {#await displacementTexture then value}
      <T.Mesh>
        <T.PlaneGeometry args={[2, 2]} />
        <T.MeshBasicMaterial color="white" side={DoubleSide} map={value} />
      </T.Mesh>
    {/await}
  </Frame>
</T.Group>
<T.Group position.x={grid * 2} position.y={0}>
  <Frame label="NormalMap" {offset}>
    {#await normalTexture then value}
      <T.Mesh>
        <T.PlaneGeometry args={[2, 2]} />
        <T.MeshBasicMaterial color="white" side={DoubleSide} map={value} />
      </T.Mesh>
    {/await}
  </Frame>
</T.Group>
<T.Group position.x={grid * 3} position.y={0}>
  <Frame label="AmbientOcculusionMap" {offset}>
    {#await aoTexture then value}
      <T.Mesh>
        <T.PlaneGeometry args={[2, 2]} />
        <T.MeshBasicMaterial color="white" side={DoubleSide} map={value} />
      </T.Mesh>
    {/await}
  </Frame>
</T.Group>
<T.Group position.x={grid * 4} position.y={0}>
  <Frame label="AlphaMap" {offset}>
    {#await alphaTexture then value}
      <T.Mesh>
        <T.PlaneGeometry args={[2, 2]} />
        <T.MeshBasicMaterial color="white" side={DoubleSide} map={value} />
      </T.Mesh>
    {/await}
  </Frame>
</T.Group>
<T.Group position.x={grid * 5} position.y={0}>
  <Frame label="SpecularMap" {offset}>
    {#await specularTexture then value}
      <T.Mesh>
        <T.PlaneGeometry args={[2, 2]} />
        <T.MeshBasicMaterial color="white" side={DoubleSide} map={value} />
      </T.Mesh>
    {/await}
  </Frame>
</T.Group>
