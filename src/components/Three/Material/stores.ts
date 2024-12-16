import { writable } from 'svelte/store';

export const objectColor = writable('#cccccc');
export const ambientColor = writable('#cccccc');
export const isLightHelper = writable(false);
export const isEnv = writable(true);
export const isEnvShow = writable(false);
export const isDirectionalLight = writable(true);

export const standardParams = writable({
  roughness: 0.2,
  metalness: 0.8,
});
export const phongParams = writable({
  shininess: 30,
  color: '#ffffff',
});
