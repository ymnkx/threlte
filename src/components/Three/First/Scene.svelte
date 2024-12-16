<script>
  import { T, useThrelte } from '@threlte/core';
  import { OrbitControls, Sky, Grid, Gizmo, ContactShadows, TransformControls } from '@threlte/extras';
  import { Folder, Pane, Slider } from 'svelte-tweakpane-ui';

  // const { renderer } = useThrelte();
  // console.log(renderer);

  $: elevation = 2;
  $: azimuth = 180;
  $: turbidity = 10;
  $: rayleigh = 3;
  $: roughness = 0.1;
  $: metalness = 1;
</script>

<Pane title="Control" position="fixed" y={10}>
  <Folder title="Sky">
    <Slider bind:value={azimuth} label="Azimuth" min={-180} max={180} />
    <Slider bind:value={elevation} label="Elevation" min={-5} max={90} />
    <Slider bind:value={turbidity} label="Turbidity" min={0} max={20} />
    <Slider bind:value={rayleigh} label="Rayleigh" min={0} max={4} />
  </Folder>
  <Folder title="Material">
    <Slider bind:value={roughness} label="Elevation" min={0} max={1} />
    <Slider bind:value={metalness} label="Metalness" min={0} max={1} />
  </Folder>
</Pane>

<Gizmo horizontalPlacement="left" />

<Grid
  position.y={-0.001}
  cellColor="#000000"
  sectionColor="#ffffff"
  sectionThickness={0}
  fadeDistance={30}
  cellSize={2}
/>

<!-- 他のシーンはcamera-controls対応済みカメラを使用 -->
<T.PerspectiveCamera makeDefault position={[-15, 2, 15]} fov={15} far={10000}>
  <OrbitControls enableZoom={true} enableDamping target.y={1.5} />
</T.PerspectiveCamera>

<Sky {azimuth} {elevation} {turbidity} {rayleigh} />

<!-- <TransformControls position.y={1.2} autoPauseOrbitControls={true}>
  <T.Mesh>
    <T.SphereGeometry />
    <T.MeshStandardMaterial {roughness} {metalness} />
  </T.Mesh>
</TransformControls> -->

<!-- <T.Mesh position.y={1.2} let:ref>
  <TransformControls object={ref} />
  <T.SphereGeometry />
  <T.MeshStandardMaterial {roughness} {metalness} />
</T.Mesh> -->

<T.Mesh position.y={1.2}>
  <T.SphereGeometry />
  <T.MeshStandardMaterial {roughness} {metalness} />
</T.Mesh>

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />
