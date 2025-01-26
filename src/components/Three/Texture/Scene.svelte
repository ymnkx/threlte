<script lang="ts">
  import { T, useThrelte } from '@threlte/core';
  import { Environment, Portal } from '@threlte/extras';
  import { Pane, Slider, Button, Checkbox, List, Folder, Color } from 'svelte-tweakpane-ui';
  import type { DirectionalLightHelper } from 'three';
  import { mapType, phongParams, standardParams } from './stores.js';
  import MeshBasicMaterial from './MeshBasicMaterial/Index.svelte';
  import MeshPhongMaterial from './MeshPhongMaterial/Index.svelte';
  import MeshStandardMaterial from './MeshStandardMaterial/Index.svelte';

  let isDirectionLight = true;
  let isEnv = true;
  let isEnvShow = false;
  let isLightHelper = false;
  let helperA: DirectionalLightHelper;
  // const { scene } = useThrelte();
  const grid = 2.8;
  const gap = 0.2;
  // const initCameraPosition: [number, number, number] = [0, grid * 1.5 + gap, 60];
  // const initCameraLookAt: [number, number, number] = [0, grid * 1.5 + gap, 0];
</script>

<Pane title="Control" position="fixed" y={10}>
  <Button
    title="Reset Camera"
    on:click={() => {
      // $cameraControls.setLookAt(...initCameraPosition, ...initCameraLookAt, true);
    }}
  />
  <Folder title="Scene">
    <Checkbox bind:value={isDirectionLight} label="Direction Light" />
    <Checkbox bind:value={isLightHelper} label="Light Helper" />
    <Checkbox bind:value={isEnv} label="Env" />
    <Checkbox bind:value={isEnvShow} label="Env Show" />
  </Folder>
  <Folder title="Base">
    <List
      label="map"
      bind:value={$mapType}
      options={[
        { text: 'none', value: 'none' },
        { text: 'green', value: 'green' },
        { text: 'orange', value: 'orange' },
      ]}
    />
  </Folder>
  <Folder title="MeshPhongMaterial">
    <Slider bind:value={$phongParams.shininess} label="shininess" min={0} max={100} />
    <Color bind:value={$phongParams.color} label="color" />
  </Folder>
  <Folder title="MeshStandardMaterial">
    <Slider bind:value={$standardParams.roughness} label="roughness" min={0} max={1} />
    <Slider bind:value={$standardParams.metalness} label="metalness" min={0} max={1} />
  </Folder>
</Pane>

{#if isEnv}
  <Environment
    files={'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/venice_sunset_1k.hdr'}
    isBackground={isEnvShow}
  />
{/if}

{#if isDirectionLight}
  <T.DirectionalLight position={[10, 10, 10]} castShadow={true} let:ref intensity={2}>
    <!-- {#if isLightHelper}
      <Portal object={scene}>
        <T.DirectionalLightHelper args={[ref, 1]} bind:ref={helperA} />
      </Portal>
    {/if} -->
  </T.DirectionalLight>
{/if}
<T.AmbientLight color="#cccccc" />

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
