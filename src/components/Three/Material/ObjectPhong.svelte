<script>
  import { T } from '@threlte/core';
  import { objectColor, phongParams } from './stores';
</script>

<T.Mesh>
  <T.SphereGeometry />
  <T.MeshPhongMaterial
    color={$objectColor}
    shininess={$phongParams.shininess}
    specular={$phongParams.color}
    reflectivity={1}
  />
</T.Mesh>
