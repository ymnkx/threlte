<script>
  import { T } from '@threlte/core';
  import { MaterialSettings } from './material.svelte.ts';
</script>

<T.Mesh>
  <T.SphereGeometry />
  <T.MeshStandardMaterial
    color={MaterialSettings.objectColor}
    metalness={MaterialSettings.standardParams.metalness}
    roughness={MaterialSettings.standardParams.roughness}
  />
</T.Mesh>
