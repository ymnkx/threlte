<script lang="ts">
  import Label from '../Label.svelte';
  const labelPosition = { x: -1, y: 1.15, z: 0 };
  export let text = 'text';
</script>

<Label {text} position={labelPosition} />
