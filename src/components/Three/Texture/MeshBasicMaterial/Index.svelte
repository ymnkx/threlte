<script lang="ts">
  import { T } from '@threlte/core';
  import { useTexture } from '@threlte/extras';
  import { DoubleSide } from 'three';
  import { TextureSettings } from '../texture.svelte.ts';
  import Frame from '../../Frame.svelte';
  import projectData from '@/data/project.ts';
  const { baseUrl } = projectData;

  let texture = $derived(
    TextureSettings.mapType === 'orange'
      ? useTexture(`${baseUrl}assets/image/orange.png`)
      : TextureSettings.mapType === 'green'
        ? useTexture(`${baseUrl}assets/image/green.png`)
        : Promise.resolve(null),
  );
  const displacementTexture = useTexture(`${baseUrl}assets/image/DisplacementMap.png`);
  const normalTexture = useTexture(`${baseUrl}assets/image/NormalMap.png`);
  const aoTexture = useTexture(`${baseUrl}assets/image/AmbientOcclusionMap.png`);
  const alphaTexture = useTexture(`${baseUrl}assets/image/AlphaMap.png`);
  const specularTexture = useTexture(`${baseUrl}assets/image/SpecularMap.png`);
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
