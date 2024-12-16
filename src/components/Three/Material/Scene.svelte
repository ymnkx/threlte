<script lang="ts">
  import { T, useThrelte } from '@threlte/core';
  import { Portal, Environment } from '@threlte/extras';
  import { Pane, Button, Color, Checkbox, Slider, Folder } from 'svelte-tweakpane-ui';
  import Object from './Object.svelte';
  import Camera from '../Camera/Camera.svelte';
  import { cameraControls } from '../Camera/stores.ts';
  import {
    isLightHelper,
    objectColor,
    ambientColor,
    standardParams,
    phongParams,
    isEnv,
    isEnvShow,
    isDirectionalLight,
  } from './stores.ts';
  import type { DirectionalLightHelper } from 'three';
  import ObjectNormal from './ObjectNormal.svelte';
  import ObjectLambert from './ObjectLambert.svelte';
  import ObjectPhong from './ObjectPhong.svelte';
  import ObjectToon from './ObjectToon.svelte';
  import ObjectStandard from './ObjectStandard.svelte';
  import Frame from '../Frame.svelte';

  const { scene } = useThrelte();
  let helperA: DirectionalLightHelper;
  const initCameraPosition: [number, number, number] = [0, 2.8, 50];
  const initCameraLookAt: [number, number, number] = [0, 2.8, 0];
  const grid = 2.8;
</script>

<Pane title="Control" position="fixed" y={10}>
  <Button
    title="Reset Camera"
    on:click={() => {
      if ($cameraControls) $cameraControls.setLookAt(...initCameraPosition, ...initCameraLookAt, true);
    }}
  />
  <Folder title="Scene">
    <Color bind:value={$ambientColor} label="Ambient Color" />
    <Checkbox bind:value={$isDirectionalLight} label="Direction Light" />
    <Checkbox bind:value={$isLightHelper} label="Light Helper" />
    <Checkbox bind:value={$isEnv} label="Env" />
    <Checkbox bind:value={$isEnvShow} label="Env Show" />
  </Folder>
  <Folder title="Base">
    <Color bind:value={$objectColor} label="Object Color" />
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

{#if $isEnv}
  <Environment
    files={'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/venice_sunset_1k.hdr'}
    isBackground={$isEnvShow}
  />
{/if}

{#if $isDirectionalLight}
  <T.DirectionalLight position={[2, 4, 2]} castShadow={true} let:ref intensity={2}>
    {#if $isLightHelper}
      <Portal object={scene}>
        <T.DirectionalLightHelper args={[ref, 1]} bind:ref={helperA} />
      </Portal>
    {/if}
  </T.DirectionalLight>
{/if}
<T.AmbientLight color={$ambientColor} />

<Camera {initCameraPosition} {initCameraLookAt} />

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
