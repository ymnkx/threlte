<script lang="ts">
  import { T, useThrelte } from '@threlte/core';
  import GsViewer from './GsViewer.svelte';
  import Label from '../Label.svelte';
  import { OrbitControls } from '@threlte/extras';
  const { scene, camera } = useThrelte();
  console.log(camera.current);
</script>

<Label
  text="BROMPTON"
  position={{ x: 0, y: 1.75, z: 0 }}
  rotation={{ x: 0, y: 3.14 * -0.5, z: 0 }}
  anchorX="center"
  fontSize={0.3}
/>

<T.PerspectiveCamera makeDefault position={[-30, 0, 0]} fov={15} far={10000}>
  <OrbitControls enableZoom={true} enableDamping />
</T.PerspectiveCamera>

<GsViewer {scene} camera={camera.current} />
