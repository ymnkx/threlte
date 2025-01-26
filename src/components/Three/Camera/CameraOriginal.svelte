<script lang="ts">
  import { T, useThrelte } from '@threlte/core';
  // import type CC from 'camera-controls';
  import { PerspectiveCamera } from 'three';

  import CameraControls from './CameraControls.ts';

  // type Props = {
  //   controls: CC;
  // }
  // let { controls = $bindable() }: Props = $props();

  const { dom } = useThrelte();
  const camera = new PerspectiveCamera();

  const controls = new CameraControls(camera, dom);
  controls.setPosition(5, 5, 5);
</script>

<T is={camera} makeDefault />
