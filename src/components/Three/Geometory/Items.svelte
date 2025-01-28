<script>
  import { T, useTask } from '@threlte/core';
  import { Edges } from '@threlte/extras';
  import Frame from '../Frame.svelte';
  import { DoubleSide, MeshNormalMaterial, MeshBasicMaterial } from 'three';
  import { GeometorySettings, grid } from './geometory.svelte.ts';

  let rotation = $state(0);
  useTask((delta) => {
    if (!GeometorySettings.isRotation) return;
    rotation += delta * 0.5;
  });

  const normalMaterial = new MeshNormalMaterial({ side: DoubleSide });
  let basicMaterial = $derived(new MeshBasicMaterial({ color: GeometorySettings.baseColor, side: DoubleSide }));
  let material = $derived(GeometorySettings.isNormalMaterial ? normalMaterial : basicMaterial);
</script>

<T.Group position.x={grid * -2} position.y={0}>
  <T.Group position.x={0} position.y={grid}>
    <Frame label="Box">
      <T.Mesh rotation.y={rotation} {material}>
        <T.BoxGeometry args={[1, 1, 1]} />
        {#if GeometorySettings.isEdge}<Edges color={GeometorySettings.edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid} position.y={grid}>
    <Frame label="Sphere">
      <T.Mesh rotation.y={rotation} {material}>
        <T.SphereGeometry args={[0.75, 16, 16]} />
        {#if GeometorySettings.isEdge}<Edges color={GeometorySettings.edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid * 2} position.y={grid}>
    <Frame label="Plane">
      <T.Mesh rotation.y={rotation} {material}>
        <T.PlaneGeometry args={[1, 1]} />
        {#if GeometorySettings.isEdge}<Edges color={GeometorySettings.edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid * 3} position.y={grid}>
    <Frame label="Circle">
      <T.Mesh rotation.y={rotation} {material}>
        <T.CircleGeometry args={[0.75, 32]} />
        {#if GeometorySettings.isEdge}<Edges color={GeometorySettings.edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={0} position.y={0}>
    <Frame label="Cone">
      <T.Mesh rotation.y={rotation} {material}>
        <T.ConeGeometry args={[0.5, 1, 16]} />
        {#if GeometorySettings.isEdge}<Edges color={GeometorySettings.edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid} position.y={0}>
    <Frame label="Cylinder">
      <T.Mesh rotation.y={rotation} {material}>
        <T.CylinderGeometry args={[0.5, 0.5, 1, 16]} />
        {#if GeometorySettings.isEdge}<Edges color={GeometorySettings.edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid * 2} position.y={0}>
    <Frame label="Torus">
      <T.Mesh rotation.y={rotation} {material}>
        <T.TorusGeometry args={[0.5, 0.2, 16, 32]} />
        {#if GeometorySettings.isEdge}<Edges color={GeometorySettings.edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid * 3} position.y={0}>
    <Frame label="Ring">
      <T.Mesh rotation.y={rotation} {material}>
        <T.RingGeometry args={[0.5, 0.75, 32]} />
        {#if GeometorySettings.isEdge}<Edges color={GeometorySettings.edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={0} position.y={grid * -1}>
    <Frame label="Icosahedron">
      <T.Mesh rotation.y={rotation} {material}>
        <T.IcosahedronGeometry args={[0.75, 0]} />
        {#if GeometorySettings.isEdge}<Edges color={GeometorySettings.edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid} position.y={grid * -1}>
    <Frame label="Dodecahedron">
      <T.Mesh rotation.y={rotation} {material}>
        <T.DodecahedronGeometry args={[0.75, 0]} />
        {#if GeometorySettings.isEdge}<Edges color={GeometorySettings.edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid * 2} position.y={grid * -1}>
    <Frame label="Capsule">
      <T.Mesh rotation.y={rotation} {material}>
        <T.CapsuleGeometry args={[0.375, 0.75, 4, 16]} />
        {#if GeometorySettings.isEdge}<Edges color={GeometorySettings.edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
  <T.Group position.x={grid * 3} position.y={grid * -1}>
    <Frame label="Tetrahedron">
      <T.Mesh rotation.y={rotation} {material}>
        <T.TetrahedronGeometry args={[0.75, 0]} />
        {#if GeometorySettings.isEdge}<Edges color={GeometorySettings.edgeColor} />{/if}
      </T.Mesh>
    </Frame>
  </T.Group>
</T.Group>
