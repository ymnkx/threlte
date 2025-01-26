<script>
  import { T, useTask } from '@threlte/core';
  import { Environment, Edges } from '@threlte/extras';
  // import Camera from '../Camera/Camera.svelte';
  import Frame from '../Frame.svelte';
  import { baseColor, edgeColor } from './stores.ts';
  // import { cameraControls } from '../Camera/stores.ts';
  import { DoubleSide, MeshNormalMaterial, MeshBasicMaterial } from 'three';
  import { Pane, Button, Color, Checkbox } from 'svelte-tweakpane-ui';

  const grid = 2.8;
  // const initCameraPosition = [0, grid * 0.5, 50];
  // const initCameraLookAt = [0, grid * 0.5, 0];

  let isEdge = true;
  let isRotation = true;
  let isNormalMaterial = false;
  let rotation = 0;

  useTask((delta) => {
    if (!isRotation) return;
    rotation += delta * 0.5;
  });

  const normalMaterial = new MeshNormalMaterial({ side: DoubleSide });
  $: basicMaterial = new MeshBasicMaterial({ color: $baseColor, side: DoubleSide });
  $: material = isNormalMaterial ? normalMaterial : basicMaterial;
</script>

<Pane title="Control" position="fixed" y={10}>
  <Button
    title="Reset Camera"
    on:click={() => {
      // if ($cameraControls) $cameraControls.setLookAt(...initCameraPosition, ...initCameraLookAt, true);
    }}
  />
  <Color bind:value={$baseColor} label="Base Color" />
  <Color bind:value={$edgeColor} label="Edge Color" />
  <Checkbox bind:value={isNormalMaterial} label="Normal Material" />
  <Checkbox bind:value={isEdge} label="Edge" />
  <Checkbox bind:value={isRotation} label="Rotation" />
</Pane>

<Environment
  files={'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/venice_sunset_1k.hdr'}
  isBackground={false}
/>

<T.Group position.x={grid * -2} position.y={0}>
  <T.Group position.x={0} position.y={grid}>
    <Frame label="Box">
      <T.Mesh rotation.y={rotation} {material}>
        <T.BoxGeometry args={[1, 1, 1]} />
        {#if isEdge}<Edges color={$edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid} position.y={grid}>
    <Frame label="Sphere">
      <T.Mesh rotation.y={rotation} {material}>
        <T.SphereGeometry args={[0.75, 16, 16]} />
        {#if isEdge}<Edges color={$edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid * 2} position.y={grid}>
    <Frame label="Plane">
      <T.Mesh rotation.y={rotation} {material}>
        <T.PlaneGeometry args={[1, 1]} />
        {#if isEdge}<Edges color={$edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid * 3} position.y={grid}>
    <Frame label="Circle">
      <T.Mesh rotation.y={rotation} {material}>
        <T.CircleGeometry args={[0.75, 32]} />
        {#if isEdge}<Edges color={$edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={0} position.y={0}>
    <Frame label="Cone">
      <T.Mesh rotation.y={rotation} {material}>
        <T.ConeGeometry args={[0.5, 1, 16]} />
        {#if isEdge}<Edges color={$edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid} position.y={0}>
    <Frame label="Cylinder">
      <T.Mesh rotation.y={rotation} {material}>
        <T.CylinderGeometry args={[0.5, 0.5, 1, 16]} />
        {#if isEdge}<Edges color={$edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid * 2} position.y={0}>
    <Frame label="Torus">
      <T.Mesh rotation.y={rotation} {material}>
        <T.TorusGeometry args={[0.5, 0.2, 16, 32]} />
        {#if isEdge}<Edges color={$edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid * 3} position.y={0}>
    <Frame label="Ring">
      <T.Mesh rotation.y={rotation} {material}>
        <T.RingGeometry args={[0.5, 0.75, 32]} />
        {#if isEdge}<Edges color={$edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={0} position.y={grid * -1}>
    <Frame label="Icosahedron">
      <T.Mesh rotation.y={rotation} {material}>
        <T.IcosahedronGeometry args={[0.75, 0]} />
        {#if isEdge}<Edges color={$edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid} position.y={grid * -1}>
    <Frame label="Dodecahedron">
      <T.Mesh rotation.y={rotation} {material}>
        <T.DodecahedronGeometry args={[0.75, 0]} />
        {#if isEdge}<Edges color={$edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid * 2} position.y={grid * -1}>
    <Frame label="Capsule">
      <T.Mesh rotation.y={rotation} {material}>
        <T.CapsuleGeometry args={[0.375, 0.75, 4, 16]} />
        {#if isEdge}<Edges color={$edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid * 3} position.y={grid * -1}>
    <Frame label="Tetrahedron">
      <T.Mesh rotation.y={rotation} {material}>
        <T.TetrahedronGeometry args={[0.75, 0]} />
        {#if isEdge}<Edges color={$edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
</T.Group>
