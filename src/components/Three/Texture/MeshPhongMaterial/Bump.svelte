<script>
  import { T, useLoader } from '@threlte/core';
  import { DoubleSide, TextureLoader } from 'three';
  import projectData from '@/data/project.ts';
  const { baseUrl } = projectData;

  const textures = useLoader(TextureLoader).load({
    map: `${baseUrl}assets/image/green.png`,
    bumpMap: `${baseUrl}assets/image/NormalMap.png`,
  });
</script>

{#if $textures}
  <T.Mesh>
    <T.PlaneGeometry args={[2, 2]} />
    <T.MeshPhongMaterial side={DoubleSide} {...$textures} bumpScale={2} />
  </T.Mesh>
{/if}
