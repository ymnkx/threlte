<script lang="ts">
  import { onMount } from 'svelte';
  import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';
  import projectData from '@/data/project.ts';
  const { baseUrl } = projectData;

  // どちらでもOK
  // console.log(baseUrl);
  // console.log(import.meta.env.BASE_URL);

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
      .addSplatScene(`${baseUrl}assets/gs/brompton.ply`, {
        scale: [1, -1, -1],
        showLoadingUI: false,
      })
      .then(() => {
        viewer.start();
      });
  });
</script>
