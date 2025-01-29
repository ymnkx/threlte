<script>
  import { T } from '@threlte/core';
  import { MaterialSettings } from './material.svelte.ts';
</script>

<T.Mesh>
  <T.SphereGeometry />
  <T.MeshPhongMaterial
    color={MaterialSettings.objectColor}
    shininess={MaterialSettings.phongParams.shininess}
    specular={MaterialSettings.phongParams.color}
    reflectivity={1}
  />
</T.Mesh>
