<script lang="ts">
  import { T } from '@threlte/core';
  // import { T, useThrelte } from '@threlte/core';
  // import type { DirectionalLightHelper } from 'three';
  // import { Portal } from '@threlte/extras';
  // import { TextureSettings } from './texture.svelte.ts';
  // const { scene } = useThrelte();
  // let helperA: DirectionalLightHelper | undefined = $state(undefined);
</script>

<T.DirectionalLight position={[10, 10, 10]} castShadow={true} let:ref intensity={2}>
  <!-- つくけど消えないので、いったん保留！ -->
  <!-- {#snippet children({ ref })}
    {#if TextureSettings.isLightHelper}
      <Portal object={scene}>
        <T.DirectionalLightHelper args={[ref, 1, '#333333']} bind:ref={helperA} />
      </Portal>
    {/if}
  {/snippet} -->
</T.DirectionalLight>
