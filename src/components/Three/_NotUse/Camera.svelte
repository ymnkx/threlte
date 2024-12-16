<script>
  import { T } from '@threlte/core';
  import CameraControls from '../CameraControl/CameraControls.svelte';
  import { cameraControls } from './stores.ts';
  import { initCameraPosition, initCameraLookAt } from './settings.ts';
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
