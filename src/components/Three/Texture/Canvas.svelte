<script lang="ts">
  import ThreeCanvas from '@/components/Three/ThreeCanvas.svelte';
  import Model from './Model.svelte';
  import Camera from '../Camera/Camera.svelte';
  import Light from './Light.svelte';
  import { T } from '@threlte/core';
  import { Environment } from '@threlte/extras';
  import { Pane, Slider, Button, Checkbox, List, Folder, Color } from 'svelte-tweakpane-ui';
  import { TextureSettings, grid, gap } from './texture.svelte.ts';

  let isDirectionLight = $state(true);
  let isEnv = $state(true);
  let isEnvShow = $state(false);

  let controls: any = $state(undefined);
  const position = [0, grid * 1.5 + gap, 60];
  const target = [0, grid * 1.5 + gap, 0];
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
      <Checkbox bind:value={isDirectionLight} label="Direction Light" />
      <!-- <Checkbox bind:value={TextureSettings.isLightHelper} label="Light Helper" /> -->
      <Checkbox bind:value={isEnv} label="Env" />
      <Checkbox bind:value={isEnvShow} label="Env Show" />
    </Folder>
    <Folder title="Base">
      <List
        label="map"
        bind:value={TextureSettings.mapType}
        options={[
          { text: 'none', value: 'none' },
          { text: 'green', value: 'green' },
          { text: 'orange', value: 'orange' },
        ]}
      />
    </Folder>
    <Folder title="MeshPhongMaterial">
      <Slider bind:value={TextureSettings.phongParams.shininess} label="shininess" min={0} max={100} />
      <Color bind:value={TextureSettings.phongParams.color} label="color" />
    </Folder>
    <Folder title="MeshStandardMaterial">
      <Slider bind:value={TextureSettings.standardParams.roughness} label="roughness" min={0} max={1} />
      <Slider bind:value={TextureSettings.standardParams.metalness} label="metalness" min={0} max={1} />
    </Folder>
  </Pane>

  {#if isEnv}
    <Environment
      url={'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/venice_sunset_1k.hdr'}
      isBackground={isEnvShow}
    />
  {/if}

  {#if isDirectionLight}
    <Light />
  {/if}

  <T.AmbientLight color="#cccccc" />

  <Model />

  <Camera bind:controls {position} {target} />
</ThreeCanvas>
