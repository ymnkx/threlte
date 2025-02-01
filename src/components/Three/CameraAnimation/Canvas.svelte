<script>
  import ThreeCanvas from '@/components/Three/ThreeCanvas.svelte';
  import { T } from '@threlte/core';
  import { ContactShadows } from '@threlte/extras';
  import Greenman from './Greenman.svelte';
  import { LoopOnce } from 'three';
  import { onMount } from 'svelte';
  import { Pane, Checkbox } from 'svelte-tweakpane-ui';
  import { CameraAnimationSettings } from './cameraAnimation.svelte.ts';
  import Stats from '@/components/Three/Stats.svelte';

  let object = $state();
  const actions = $derived(object?.actions);
  const mixer = $derived(object?.mixer);

  let duration = $derived($actions ? $actions['CameraAction']?._clip.duration : 0);
  let h = $state(0);
  let y = $state(0);
  let scroll_h = $state(0);
  let p = $derived(y / (scroll_h - h));

  const frameAnimation = () => {
    if ($actions['CameraAction'].paused === true) $actions['CameraAction'].paused = false;
    mixer.setTime(duration * p);
    if ($actions['CameraAction'].paused === false) $actions['CameraAction'].paused = true;
  };

  $effect(() => {
    if ($actions && $actions['CameraAction']) {
      $actions['CameraAction'].setLoop(LoopOnce, 0);
      if ($actions['CameraAction'].clampWhenFinished === false) $actions['CameraAction'].clampWhenFinished = true;
      $actions['CameraAction'].play();
      if ($actions['CameraAction'].paused === false) $actions['CameraAction'].paused = true;
      // console.dir($actions['CameraAction'].paused);
      // console.dir($actions['CameraAction'].time);
      // console.dir($actions['CameraAction']._clip.duration);
    }
  });

  onMount(() => {
    scroll_h = document.documentElement.scrollHeight;
    window.addEventListener('resize', () => {
      scroll_h = document.documentElement.scrollHeight;
    });
    window.addEventListener('scroll', () => {
      frameAnimation();
    });

    // リロード時にスクロール位置を記憶してる対応。あとで改良する。
    setTimeout(() => {
      frameAnimation();
    }, 100);
  });
</script>

<ThreeCanvas>
  <Pane title="Control" position="fixed">
    <Checkbox bind:value={CameraAnimationSettings.isToonMaterial} label="Toon Material" />
  </Pane>
  <!-- light -->
  <T.AmbientLight color="#ffffff" intensity={1} />
  <T.DirectionalLight position={[-3, 6, 3]} castShadow={false} intensity={2} />
  <!-- model -->
  <Greenman bind:this={object} />
  <ContactShadows scale={10} blur={2} far={2.5} opacity={0.25} />
  <Stats />
</ThreeCanvas>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />

<div class="checker">
  {p}
</div>

<style>
  .checker {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: white;
  }
</style>
