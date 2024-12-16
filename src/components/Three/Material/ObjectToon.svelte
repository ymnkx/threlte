<script>
  import { T } from '@threlte/core';
  import { objectColor } from './stores';
</script>

<T.Mesh>
  <T.SphereGeometry />
  <T.MeshToonMaterial color={$objectColor} />
</T.Mesh>
