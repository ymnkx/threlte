<script lang="ts">
  import ThreeCanvas from '@/components/Three/ThreeCanvas.svelte';
  import Items from './Items.svelte';
  import Camera from '../Camera/Camera.svelte';
  import { Pane, Button, Color, Checkbox } from 'svelte-tweakpane-ui';
  import { GeometorySettings, grid } from './geometory.svelte.ts';

  let controls: any;
  const position = [0, grid * 0.5, 50];
  const target = [0, grid * 0.5, 0];
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
    <Color bind:value={GeometorySettings.baseColor} label="Base Color" />
    <Color bind:value={GeometorySettings.edgeColor} label="Edge Color" />
    <Checkbox bind:value={GeometorySettings.isNormalMaterial} label="Normal Material" />
    <Checkbox bind:value={GeometorySettings.isEdge} label="Edge" />
    <Checkbox bind:value={GeometorySettings.isRotation} label="Rotation" />
  </Pane>
  <Items />
  <Camera bind:controls {position} {target} />
</ThreeCanvas>
