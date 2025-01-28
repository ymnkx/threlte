<script lang="ts">
  import ThreeCanvas from '@/components/Three/ThreeCanvas.svelte';
  import { T } from '@threlte/core';
  import { ContactShadows, Grid, Environment, OrbitControls } from '@threlte/extras';
  import Model from './Model.svelte';
  import { Pane, Checkbox } from 'svelte-tweakpane-ui';
  import { GltfSettings } from './gltf.svelte.ts';
</script>

<ThreeCanvas>
  <Pane title="Control" position="fixed" y={10}>
    <Checkbox bind:value={GltfSettings.isOriginalMaterial} label="Material" />
  </Pane>
  <Grid
    position.y={-0.001}
    cellColor="#000000"
    sectionColor="#ffffff"
    sectionThickness={0}
    fadeDistance={30}
    cellSize={2}
  />
  <T.PerspectiveCamera makeDefault position={[7.5, 2.5, 12.5]} fov={15} far={10000}>
    <OrbitControls enableZoom={true} enableDamping target.y={1} />
  </T.PerspectiveCamera>
  <Environment
    url={'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/venice_sunset_1k.hdr'}
    isBackground={false}
  />
  <ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />
  <Model />
</ThreeCanvas>
