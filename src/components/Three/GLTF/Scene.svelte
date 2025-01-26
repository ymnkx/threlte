<script lang="ts">
  import { T } from '@threlte/core';
  import { ContactShadows, Grid, Environment, useGltf, OrbitControls } from '@threlte/extras';
  // import { Pane, Button, Checkbox } from 'svelte-tweakpane-ui';
  import Label from '../Label.svelte';
  // import { isOriginalMaterial } from './stores.ts';
  // import { MeshStandardMaterial, Color } from 'three';

  // import Camera from '../Camera/Camera.svelte';
  // import { cameraControls } from '../Camera/stores.ts';
  // const initCameraPosition: [number, number, number] = [7.5, 2.5, 12.5];
  // const initCameraLookAt: [number, number, number] = [0, 1.5, 0];

  // $: material = $isOriginalMaterial ? originalMaterial : anotherMaterial;
  let originalMaterial: any = $state();
  // const anotherMaterial = new MeshStandardMaterial({ roughness: 0.0, color: new Color('rgb(128, 128, 128)') });
  const gltfPath =
    'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf';
  const gltf = useGltf(gltfPath);
  gltf.then((gltf:any) => {
    originalMaterial = gltf.nodes['node_damagedHelmet_-6514'].material;
  });
</script>

<!--
<Pane title="Control" position="fixed" y={10}>
  <Button
    title="Reset Camera"
    on:click={() => {
      if ($cameraControls) $cameraControls.setLookAt(...initCameraPosition, ...initCameraLookAt, true);
    }}
  />
  <Checkbox bind:value={$isOriginalMaterial} label="Material" />
</Pane>-->

<Grid
  position.y={-0.001}
  cellColor="#000000"
  sectionColor="#ffffff"
  sectionThickness={0}
  fadeDistance={30}
  cellSize={2}
/>

<Environment
  url={'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/venice_sunset_1k.hdr'}
  isBackground={false}
/>

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />

<!-- <Camera {initCameraPosition} {initCameraLookAt} /> -->

<T.PerspectiveCamera
  makeDefault
  position={[7.5, 2.5, 12.5]}
  fov={15}
  far={10000}
>
  <OrbitControls enableZoom={true} enableDamping target.y={1}/>
</T.PerspectiveCamera>

{#if $gltf}
  <T.Mesh
    geometry={$gltf.nodes['node_damagedHelmet_-6514'].geometry}
    rotation={[1.5, 0, 0]}
    position={[0, 1.3, 0]}
    material={originalMaterial}
  />
{:else}
  <T.Group position.y={1.2}>
    <Label text="Loading..." anchorX="center" fontSize={0.1} />
  </T.Group>
{/if}
