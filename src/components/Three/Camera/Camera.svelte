<script lang="ts">
  import { T, useTask, useThrelte } from '@threlte/core';
  import CC from 'camera-controls';
  import { onDestroy } from 'svelte';
  import { OrthographicCamera, PerspectiveCamera } from 'three';
  import { Box3, Matrix4, Quaternion, Raycaster, Sphere, Spherical, Vector2, Vector3, Vector4 } from 'three';

  class CameraControls extends CC {
    static installed = false;
    constructor(camera: OrthographicCamera | PerspectiveCamera, element: HTMLElement) {
      if (!CameraControls.installed) {
        CC.install({
          THREE: {
            Box3,
            Matrix4,
            Quaternion,
            Raycaster,
            Sphere,
            Spherical,
            Vector2,
            Vector3,
            Vector4,
          },
        });
        CameraControls.installed = true;
      }
      super(camera);
      const { invalidate } = useThrelte();
      this.connect(element);
      onDestroy(() => {
        this.dispose();
      });
      useTask(
        (delta) => {
          if (this.update(delta)) {
            invalidate();
          }
        },
        { autoInvalidate: false },
      );
    }
  }

  let { controls = $bindable(), position, target } = $props();
  const { dom } = useThrelte();
  const camera = new PerspectiveCamera();
  camera.fov = 15;
  camera.far = 10000;
  controls = new CameraControls(camera, dom);
  controls.setPosition(...position);
  controls.setTarget(...target);
</script>

<T is={camera} makeDefault />
