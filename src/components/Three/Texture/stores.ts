import { writable } from 'svelte/store';

export const mapType = writable('green');

export const standardParams = writable({
  roughness: 0.5,
  metalness: 0.5,
});
export const phongParams = writable({
  shininess: 30,
  color: '#ffffff',
  // reflectivity: 1, // envMap用
});
