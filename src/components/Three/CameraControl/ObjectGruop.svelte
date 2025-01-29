<script lang="ts">
  import { T } from '@threlte/core';
  import { interactivity } from '@threlte/extras';
  import ObjectItem from './ObjectItem.svelte';
  let { moveCamera } = $props();

  const elements = [
    {
      name: 'item-0',
      position: { x: -1, y: 1, z: -1 },
      viewPosition: { x: -10, y: 5, z: -10 },
    },
    {
      name: 'item-1',
      position: { x: 1, y: 1, z: -1 },
      viewPosition: { x: 20, y: 10, z: -20 },
    },
    {
      name: 'item-2',
      position: { x: 1, y: 1, z: 1 },
      viewPosition: { x: 30, y: 15, z: 30 },
    },
    {
      name: 'item-3',
      position: { x: -1, y: 1, z: 1 },
      viewPosition: { x: -40, y: 20, z: 40 },
    },
  ];

  interactivity();

  const getMotionPos = (name: string) => {
    const d = elements.filter((element) => element.name === name)[0];
    return {
      viewPosition: d.viewPosition,
      position: d.position,
    };
  };

  const clickHandler = (e) => {
    // console.log(e.eventObject.name);

    e.stopPropagation();
    const payload = getMotionPos(e.eventObject.name);
    moveCamera(payload);
  };
</script>

{#each elements as element, index}
  <T.Group key={index} position.x={element.position.x} position.y={element.position.y} position.z={element.position.z}>
    <ObjectItem name={element.name} onclick={clickHandler} />
  </T.Group>
{/each}
