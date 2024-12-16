<script lang="ts">
  import { onMount } from 'svelte';
  import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';

  export let scene;
  export let camera;

  onMount(() => {
    const rootElement = document.getElementById('js-gs-canvas');
    const viewer = new GaussianSplats3D.Viewer({
      rootElement: rootElement, // 指定した場所に生成
      threeScene: scene,
      camera: camera,
      useBuiltInControls: false, // OrbitControlsを使うため
      sharedMemoryForWorkers: false, // 共有メモリをOFFにしてCORSエラーを回避
      initialCameraPosition: [-6, 0, 0],
    });
    viewer
      .addSplatScene('/assets/gs/brompton.ply', {
        scale: [1, -1, -1],
        showLoadingUI: false,
      })
      .then(() => {
        viewer.start();
      });
  });
</script>
