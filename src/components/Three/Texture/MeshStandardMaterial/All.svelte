<script lang="ts">
  import { T, useLoader } from '@threlte/core';
  import { DoubleSide, TextureLoader } from 'three';
  import { TextureSettings } from '../texture.svelte.ts';
  import projectData from '@/data/project.ts';
  const { baseUrl } = projectData;

  let textureList = $derived(() => {
    let result: {
      displacementMap: string;
      normalMap: string;
      aoMap: string;
      alphaMap: string;
      map?: string;
    } = {
      displacementMap: `${baseUrl}assets/image/DisplacementMap.png`,
      normalMap: `${baseUrl}assets/image/NormalMap.png`,
      aoMap: `${baseUrl}assets/image/AmbientOcclusionMap.png`,
      alphaMap: `${baseUrl}assets/image/AlphaMap.png`,
    };

    if (TextureSettings.mapType === 'orange') {
      result = {
        ...result,
        map: `${baseUrl}assets/image/orange.png`,
      };
    } else if (TextureSettings.mapType === 'green') {
      result = {
        ...result,
        map: `${baseUrl}assets/image/green.png`,
      };
    } else {
      result = {
        ...result,
      };
    }
    return result;
  });

  const { load } = useLoader(TextureLoader);
  let textures = $derived(load(textureList()));
</script>

{#if $textures}
  <T.Mesh>
    <T.PlaneGeometry args={[2, 2, 64, 64]} />
    <T.MeshStandardMaterial
      side={DoubleSide}
      {...$textures}
      displacementScale={1}
      displacementBias={-0.35}
      metalness={TextureSettings.standardParams.metalness}
      roughness={TextureSettings.standardParams.roughness}
      opacity={1}
      transparent
    />
  </T.Mesh>
{/if}
