<script>
  import { T } from '@threlte/core';
  import { OrbitControls, ContactShadows, Grid, Environment, Gizmo } from '@threlte/extras';
</script>

<Gizmo horizontalPlacement="lef" />

<Grid
  position.y={-0.001}
  cellColor="#000000"
  sectionColor="#ffffff"
  sectionThickness={0}
  fadeDistance={30}
  cellSize={2}
/>

<Environment
  files={'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/venice_sunset_1k.hdr'}
  isBackground={false}
/>

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />

<T.PerspectiveCamera makeDefault position={[-15, 5, 15]} fov={15} far={10000}>
  <OrbitControls enableZoom={true} enableDamping target.y={1.5} />
</T.PerspectiveCamera>

<T.Mesh position.y={1.2}>
  <T.SphereGeometry />
  <T.MeshStandardMaterial color="grey" roughness={0.0} />
</T.Mesh>
