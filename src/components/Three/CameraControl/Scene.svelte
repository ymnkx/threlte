<script lang="ts">
  import ThreeCanvas from '@/components/Three/ThreeCanvas.svelte';
  import { T } from '@threlte/core';
  import { ContactShadows, Grid, Sky } from '@threlte/extras';
  import { Pane, Button, Checkbox } from 'svelte-tweakpane-ui';
  import ObjectGruop from './ObjectGruop.svelte';
  import Camera from '@/components/Three/Camera/Camera.svelte';
  import { cameraControls } from '../Camera/stores.ts';
  import { isTopCamera } from './stores.ts';
  const initCameraPosition: [number, number, number] = [20, 8.5, 20];
  const initCameraLookAt: [number, number, number] = [0, 1, 0];
</script>

<ThreeCanvas>
  <Pane title="Control" position="fixed" y={10}>
    <Button
      title="Reset Camera"
      on:click={() => {
        $cameraControls.setLookAt(...initCameraPosition, ...initCameraLookAt, true);
      }}
    />
    <Checkbox label="Top Camera" bind:value={$isTopCamera} />
  </Pane>
  <Sky elevation={1} />
  <Grid
    position.y={-0.001}
    cellColor="#000000"
    sectionColor="#ffffff"
    sectionThickness={0}
    fadeDistance={40}
    cellSize={2}
  />
  <ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />
  <ObjectGruop />

  {#if $isTopCamera}
    <T.PerspectiveCamera
      makeDefault
      position={[0, 20, 0]}
      on:create={({ ref }) => {
        ref.lookAt(0, 1, 0);
      }}
    />
  {:else}
    <Camera {initCameraPosition} {initCameraLookAt} />
  {/if}
</ThreeCanvas>
