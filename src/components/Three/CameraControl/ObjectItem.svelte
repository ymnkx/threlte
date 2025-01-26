<script lang="ts">
  import { T } from '@threlte/core';
  import { Outlines, useCursor } from '@threlte/extras';
  let { name = '', isMoved = false, ...rest } = $props();
  let isDown = $state(false);
  let outline = $state('black');
  const { onPointerEnter, onPointerLeave } = useCursor();
</script>

<T.Mesh
  {...rest}
  {name}
  {isMoved}
  onpointerenter={(e) => {
    e.stopPropagation();
    outline = 'red';
    isMoved = false;
    onPointerEnter(e);
  }}
  onpointerleave={(e) => {
    e.stopPropagation();
    outline = 'black';
    onPointerLeave(e);
  }}
  onpointerdown={(e) => {
    e.stopPropagation();
    isDown = true;
    isMoved = false;
  }}
  onpointermove={(e) => {
    e.stopPropagation();
    if (!isDown || isMoved) return;
    isMoved = true;
    outline = 'black';
  }}
  onpointerup={(e) => {
    e.stopPropagation();
    isDown = false;
  }}
>
  <T.BoxGeometry args={[1, 1, 1]} />
  <T.MeshStandardMaterial color="white" roughness={0.0} metalness={1.0} />
  <Outlines color={outline} thickness={0.02} />
</T.Mesh>
