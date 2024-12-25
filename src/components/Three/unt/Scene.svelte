<script lang="ts">
  import { T } from '@threlte/core';
  import { onMount } from 'svelte';
  import { ContactShadows } from '@threlte/extras';
  import { Pane, Button, Checkbox } from 'svelte-tweakpane-ui';
  import Camera from '../Camera/Camera.svelte';
  import { cameraControls } from '../Camera/stores.ts';
  import Unt from './Unt.svelte';
  import { isWireFrame } from './stores.ts';

  const initCameraPositionFirst: [number, number, number] = [0, 6, 80];
  const initCameraPosition: [number, number, number] = [0, 6, 25];
  const initCameraLookAt: [number, number, number] = [0, 1.5, 0];

  onMount(() => {
    if ($cameraControls) $cameraControls.setLookAt(...initCameraPosition, ...initCameraLookAt, true);
  });
</script>

<Pane title="Control" position="fixed" y={10}>
  <Button
    title="Reset Camera"
    on:click={() => {
      if ($cameraControls) $cameraControls.setLookAt(...initCameraPosition, ...initCameraLookAt, true);
    }}
  />
  <Checkbox label="WireFrame" bind:value={$isWireFrame} />
</Pane>

<T.AmbientLight color="#ffffff" intensity={3} />
<T.DirectionalLight position={[-3, 6, 3]} castShadow={false} let:ref intensity={3} />

<Camera initCameraPosition={initCameraPositionFirst} {initCameraLookAt} />

<Unt />
<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />
