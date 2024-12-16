<script lang="ts">
  import { Text } from '@threlte/extras';
  export let text = 'Hello, World!';
  export let position = { x: 0, y: 0, z: 0 };
  export let rotation = { x: 0, y: 0, z: 0 };
  export let fontSize = 0.16;
  export let anchorX = 'left';
</script>

<Text
  {text}
  position.x={position.x}
  position.y={position.y}
  position.z={position.z}
  {fontSize}
  color="#000000"
  lineHeight={fontSize}
  anchorY="bottom"
  {anchorX}
  rotation.x={rotation.x}
  rotation.y={rotation.y}
  rotation.z={rotation.z}
/>
