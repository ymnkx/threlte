<script>
  import { T, useLoader } from '@threlte/core';
  import { DoubleSide, TextureLoader } from 'three';

  const textures = useLoader(TextureLoader).load({
    map: '/assets/image/green.png',
    displacementMap: '/assets/image/DisplacementMap.png',
  });
</script>

{#if $textures}
  <!-- <T.Mesh castShadow={true} receiveShadow={true}> -->
  <T.Mesh>
    <T.PlaneGeometry args={[2, 2, 64, 64]} />
    <T.MeshStandardMaterial side={DoubleSide} {...$textures} displacementScale={1} displacementBias={-0.35} />
  </T.Mesh>
{/if}
