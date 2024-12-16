<script lang="ts">
  import { T, useLoader } from '@threlte/core';
  import { DoubleSide, TextureLoader } from 'three';
  import { mapType, phongParams } from '../stores';

  $: textureList = () => {
    let result: {
      displacementMap: string;
      normalMap: string;
      aoMap: string;
      alphaMap: string;
      specularMap: string;
      map?: string;
    } = {
      displacementMap: '/assets/image/DisplacementMap.png',
      normalMap: '/assets/image/NormalMap.png',
      aoMap: '/assets/image/AmbientOcclusionMap.png',
      alphaMap: '/assets/image/AlphaMap.png',
      specularMap: '/assets/image/SpecularMap.png',
    };

    if ($mapType === 'orange') {
      result = {
        ...result,
        map: '/assets/image/orange.png',
      };
    } else if ($mapType === 'green') {
      result = {
        ...result,
        map: '/assets/image/green.png',
      };
    } else {
      result = {
        ...result,
      };
    }
    return result;
  };

  const { load } = useLoader(TextureLoader);
  $: textures = load(textureList());
</script>

{#if $textures}
  <T.Mesh>
    <T.PlaneGeometry args={[2, 2, 64, 64]} />
    <T.MeshPhongMaterial
      side={DoubleSide}
      {...$textures}
      displacementScale={1}
      displacementBias={-0.35}
      shininess={$phongParams.shininess}
      specular={$phongParams.color}
      opacity={1}
      transparent
    />
  </T.Mesh>
{/if}
