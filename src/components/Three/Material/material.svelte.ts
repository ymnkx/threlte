export const MaterialSettings = $state({
  objectColor: '#cccccc',
  ambientColor: '#cccccc',
  isLightHelper: false,
  isEnv: true,
  isEnvShow: false,
  isDirectionalLight: true,
  standardParams: {
    roughness: 0.2,
    metalness: 0.8,
  },
  phongParams: {
    shininess: 30,
    color: '#ffffff',
  },
});

export const grid = 2.8;
