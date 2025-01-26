<script lang="ts">
  import { T } from '@threlte/core';
  import { onMount, tick } from 'svelte';
  import { ContactShadows } from '@threlte/extras';
  import { Pane, Button, Checkbox } from 'svelte-tweakpane-ui';
  import Camera from '../Camera/Camera.svelte';
  import Unt from './Unt.svelte';
  import { isWireFrame } from './stores.ts';
  import { LoopOnce, MeshPhongMaterial, Color } from 'three';

  let controls: any = $state();
  const position = [0, 6, 80];
  const position_zoom = [0, 6, 25];
  const target = [0, 1.5, 0];

  let object = $state();
  const actions = $derived(object?.actions);
  const mixer = $derived(object?.mixer);

  const ActionNames = ['TAction', 'UAction', 'NAction'];
  const set = () => {
    ActionNames.forEach((name) => {
      if ($actions[name]) {
        if ($actions[name].clampWhenFinished === false) $actions[name].clampWhenFinished = true;
        $actions[name].setLoop(LoopOnce, 0);
      }
    });
  };
  const play = () => {
    ActionNames.forEach((name) => {
      if ($actions[name]) {
        $actions[name].stop();
        $actions[name].play();
      }
    });
  };

  $effect(() => {
    set();
    play();
  });

  onMount(() => {
    mixer.timeScale = 1.5;
    if (controls) controls.setLookAt(...position_zoom, ...target, true);
  });
</script>

<Pane title="Control" position="fixed" y={10}>
  <Button
    title="Reset Camera"
    on:click={() => {
      if (controls) controls.setLookAt(...position, ...target, true);
    }}
  />
  <Checkbox label="WireFrame" bind:value={$isWireFrame} />
</Pane>

<T.AmbientLight color="#ffffff" intensity={3} />
<T.DirectionalLight position={[-3, 6, 3]} castShadow={false} let:ref intensity={3} />

<!-- <Camera initCameraPosition={initCameraPositionFirst} {initCameraLookAt} /> -->

<Camera bind:controls {position} {target} />

<Unt bind:this={object} />

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />
