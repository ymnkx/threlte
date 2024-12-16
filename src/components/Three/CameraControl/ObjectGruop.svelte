<script lang="ts">
  import { T } from '@threlte/core';
  import { interactivity } from '@threlte/extras';
  import ObjectItem from './ObjectItem.svelte';
  import { cameraControls } from '../Camera/stores.ts';

  $: elements = [
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
    return [d.viewPosition.x, d.viewPosition.y, d.viewPosition.z, d.position.x, d.position.y, d.position.z, true];
  };

  const clickHandler = (e) => {
    e.stopPropagation();
    console.log(
      JSON.stringify({
        name: e.eventObject.name,
        position: { ...e.eventObject.parent.position },
      }),
    );

    // 頻繁に不具合が起きるのでいったんコメントアウト
    // if (!e.eventObject.isMoved) $cameraControls.setLookAt(...getMotionPos(e.eventObject.name));
    $cameraControls.setLookAt(...getMotionPos(e.eventObject.name));
  };
</script>

{#each elements as element, index}
  <T.Group key={index} position.x={element.position.x} position.y={element.position.y} position.z={element.position.z}>
    <ObjectItem name={element.name} on:click={clickHandler} />
  </T.Group>
{/each}
