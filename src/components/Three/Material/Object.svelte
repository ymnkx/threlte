<script>
  import { T } from '@threlte/core';
  import { MaterialSettings } from './material.svelte.ts';
</script>

<T.Mesh>
  <T.SphereGeometry />
  <T.MeshBasicMaterial color={MaterialSettings.objectColor} />
</T.Mesh>
