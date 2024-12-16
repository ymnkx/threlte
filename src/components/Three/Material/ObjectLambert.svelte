<script>
  import { T } from '@threlte/core';
  import { objectColor } from './stores';
</script>

<T.Mesh>
  <T.SphereGeometry />
  <T.MeshLambertMaterial color={$objectColor} />
</T.Mesh>
