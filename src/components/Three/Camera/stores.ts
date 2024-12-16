import { writable } from 'svelte/store';
import type CameraControls from './CameraControls.svelte.d.ts';

export const cameraControls = writable<CameraControls>(undefined);
// export const mesh = writable(undefined);
