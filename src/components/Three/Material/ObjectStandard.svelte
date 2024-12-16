<script>
  import { T } from '@threlte/core';
  import { objectColor, standardParams } from './stores';
</script>

<T.Mesh>
  <T.SphereGeometry />
  <T.MeshStandardMaterial
    color={$objectColor}
    metalness={$standardParams.metalness}
    roughness={$standardParams.roughness}
  />
</T.Mesh>
