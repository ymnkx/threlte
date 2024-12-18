<script>
  import { T, useLoader } from '@threlte/core';
  import { DoubleSide, TextureLoader } from 'three';
  import projectData from '@/data/project.ts';
  const { baseUrl } = projectData;

  const textures = useLoader(TextureLoader).load({
    map: `${baseUrl}assets/image/green.png`,
    specularMap: `${baseUrl}assets/image/SpecularMap.png`,
  });
</script>

{#if $textures}
  <T.Mesh>
    <T.PlaneGeometry args={[2, 2]} />
    <T.MeshPhongMaterial side={DoubleSide} {...$textures} reflectivity={1} shininess={30} specular="#aaaaaa" />
  </T.Mesh>
{/if}
