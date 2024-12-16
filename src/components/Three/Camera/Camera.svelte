<script lang="ts">
  import { T } from '@threlte/core';
  import CameraControls from './CameraControls.svelte';
  import { cameraControls } from './stores.ts';
  export let initCameraPosition: [number, number, number] = [20, 8.5, 20];
  export let initCameraLookAt: [number, number, number] = [0, 1, 0];
</script>

<T.PerspectiveCamera
  makeDefault
  position={initCameraPosition}
  fov={15}
  on:create={({ ref }) => {
    ref.lookAt(...initCameraLookAt);
  }}
>
  <CameraControls
    on:create={({ ref }) => {
      $cameraControls = ref;
      $cameraControls.setTarget(...initCameraLookAt, false); // 初期設定
    }}
  />
</T.PerspectiveCamera>
