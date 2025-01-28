<script lang="ts">
  import { ContactShadows, Grid, Sky } from '@threlte/extras';
  import ThreeCanvas from '@/components/Three/ThreeCanvas.svelte';
  import ObjectGruop from './ObjectGruop.svelte';
  import Camera from '../Camera/Camera.svelte';
  import { Pane, Button } from 'svelte-tweakpane-ui';

  type CameraPayload = {
    position: {
      x: number;
      y: number;
      z: number;
    };
    viewPosition: {
      x: number;
      y: number;
      z: number;
    };
  };

  let controls: any;
  const position = [20, 10, 20];
  const target = [0, 1, 0];
  const moveCamera = (payload: CameraPayload) => {
    controls.setTarget(payload.position.x, payload.position.y, payload.position.z, true);
    controls.setPosition(payload.viewPosition.x, payload.viewPosition.y, payload.viewPosition.z, true);
  };
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
  <ObjectGruop {moveCamera} />
  <Camera bind:controls {position} {target} />
</ThreeCanvas>
