<script lang="ts">
  import { T } from '@threlte/core';
  import ThreeCanvas from '@/components/Three/ThreeCanvas.svelte';
  import Modal from './Modal.svelte';
  import Camera from '../Camera/Camera.svelte';
  import { Pane, Button, Color, Checkbox, Slider, Folder } from 'svelte-tweakpane-ui';
  import { Environment } from '@threlte/extras';
  import { MaterialSettings, grid } from './material.svelte.ts';

  let controls: any;
  const position = [0, grid, 50];
  const target = [0, grid, 0];
</script>

<ThreeCanvas>
  <Pane title="Control" position="fixed" y={10}>
    <Button
      title="Reset Camera"
      on:click={() => {
        controls.setTarget(...target, true);
        controls.setPosition(...position, true);
      }}
    />
    <Folder title="Scene">
      <Color bind:value={MaterialSettings.ambientColor} label="Ambient Color" />
      <Checkbox bind:value={MaterialSettings.isDirectionalLight} label="Direction Light" />
      <Checkbox bind:value={MaterialSettings.isLightHelper} label="Light Helper" />
      <Checkbox bind:value={MaterialSettings.isEnv} label="Env" />
      <Checkbox bind:value={MaterialSettings.isEnvShow} label="Env Show" />
    </Folder>
    <Folder title="Base">
      <Color bind:value={MaterialSettings.objectColor} label="Object Color" />
    </Folder>
    <Folder title="MeshPhongMaterial">
      <Slider bind:value={MaterialSettings.phongParams.shininess} label="shininess" min={0} max={100} />
      <Color bind:value={MaterialSettings.phongParams.color} label="color" />
    </Folder>
    <Folder title="MeshStandardMaterial">
      <Slider bind:value={MaterialSettings.standardParams.roughness} label="roughness" min={0} max={1} />
      <Slider bind:value={MaterialSettings.standardParams.metalness} label="metalness" min={0} max={1} />
    </Folder>
  </Pane>

  {#if MaterialSettings.isEnv}
    <Environment
      url={'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/venice_sunset_1k.hdr'}
      isBackground={MaterialSettings.isEnvShow}
    />
  {/if}

  {#if MaterialSettings.isDirectionalLight}
    <T.DirectionalLight position={[2, 4, 2]} castShadow={true} let:ref intensity={2}>
      <!-- ここでエラー -->
      <!-- {#if $isLightHelper}
      <Portal object={scene}>
        <T.DirectionalLightHelper args={[ref, 1]} bind:ref={helperA} />
      </Portal>
    {/if} -->
    </T.DirectionalLight>
  {/if}
  <T.AmbientLight color={MaterialSettings.ambientColor} />

  <Modal />

  <Camera bind:controls {position} {target} />
</ThreeCanvas>
