<script>
  import { T, useLoader } from '@threlte/core';
  import { DoubleSide, TextureLoader } from 'three';

  const textures = useLoader(TextureLoader).load({
    map: '/assets/image/green.png',
    normalMap: '/assets/image/NormalMap.png',
  });
</script>

{#if $textures}
  <T.Mesh>
    <T.PlaneGeometry args={[2, 2]} />
    <T.MeshStandardMaterial side={DoubleSide} {...$textures} normalScale={[2, 2]} />
  </T.Mesh>
{/if}
