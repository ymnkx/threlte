<script lang="ts">
  import { useTask } from '@threlte/core';
  import { onMount } from 'svelte';
  import Stats from 'three/examples/jsm/libs/stats.module';
  const stats = Stats();

  onMount(() => {
    document.body.appendChild(stats.dom);
  });

  useTask(() => {
    stats.update();
  });
</script>
