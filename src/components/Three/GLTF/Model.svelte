<script lang="ts">
  import { T } from '@threlte/core';
  import { useGltf } from '@threlte/extras';
  import Label from '../Label.svelte';
  import { GltfSettings } from './gltf.svelte.ts';
  import { MeshStandardMaterial, Color } from 'three';

  let originalMaterial: any = $state();
  const anotherMaterial = new MeshStandardMaterial({ roughness: 0.0, color: new Color('rgb(128, 128, 128)') });

  const gltfPath =
    'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf';
  const gltf = useGltf(gltfPath);
  gltf.then((gltf: any) => {
    originalMaterial = gltf.nodes['node_damagedHelmet_-6514'].material;
  });
  let material = $derived(GltfSettings.isOriginalMaterial ? originalMaterial : anotherMaterial);
</script>

{#if $gltf}
  <T.Mesh
    geometry={$gltf.nodes['node_damagedHelmet_-6514'].geometry}
    rotation={[1.5, 0, 0]}
    position={[0, 1.3, 0]}
    {material}
  />
{:else}
  <T.Group position.y={1.2}>
    <Label text="Loading..." anchorX="center" fontSize={0.1} />
  </T.Group>
{/if}
