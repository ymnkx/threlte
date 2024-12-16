<script lang="ts">
  import { T, forwardEventHandlers } from '@threlte/core';
  import { Outlines, useCursor } from '@threlte/extras';
  export let name = '';
  export let isMoved = false;
  let isDown = false;
  let outline = 'black';
  const { onPointerEnter, onPointerLeave } = useCursor();
  const dispatchingComponent = forwardEventHandlers(); // これで配置した親の方でon:clickできる
</script>

<T.Mesh
  {name}
  {isMoved}
  on:pointerenter={onPointerEnter}
  on:pointerleave={onPointerLeave}
  on:pointerenter={(e) => {
    e.stopPropagation();
    outline = 'red';
    isMoved = false;
  }}
  on:pointerleave={(e) => {
    e.stopPropagation();
    outline = 'black';
  }}
  on:pointerdown={(e) => {
    e.stopPropagation();
    isDown = true;
    isMoved = false;
  }}
  on:pointermove={(e) => {
    e.stopPropagation();
    if (!isDown || isMoved) return;
    isMoved = true;
    outline = 'black';
  }}
  on:pointerup={(e) => {
    e.stopPropagation();
    isDown = false;
  }}
  bind:this={$dispatchingComponent}
>
  <T.BoxGeometry args={[1, 1, 1]} />
  <T.MeshStandardMaterial color="white" roughness={0.0} metalness={1.0} />
  <Outlines color={outline} thickness={0.02} />
</T.Mesh>
