<script lang="ts">
  import { T } from '@threlte/core';
  import { Outlines, useCursor } from '@threlte/extras';
  let { name = '', ...rest } = $props();
  const { hovering, onPointerEnter, onPointerLeave } = useCursor();
  let outline = $derived($hovering ? 'red' : 'black');
</script>

<T.Mesh
  {...rest}
  {name}
  onpointerenter={(e) => {
    e.stopPropagation();
    onPointerEnter();
  }}
  onpointerleave={() => {
    onPointerLeave();
  }}
>
  <T.BoxGeometry args={[1, 1, 1]} />
  <T.MeshStandardMaterial color="white" roughness={0.0} metalness={1.0} />
  <Outlines color={outline} thickness={0.02} />
</T.Mesh>
