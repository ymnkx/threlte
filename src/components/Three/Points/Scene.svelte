<script lang="ts">
  import { T } from '@threlte/core';
  import { Align, OrbitControls, useTexture } from '@threlte/extras';
  import { BufferGeometry, Vector3, Float32BufferAttribute } from 'three';

  const p: number = 10;
  const r: number = 28;
  const b: number = 8 / 3;
  const count = 4000;
  const dt = 0.00644;

  /**
   * ローレンツアトラクターの次の位置を計算する関数
   * @param {Vector3} position - 現在の位置
   * @param {number} dt - 時間の刻み幅
   * @returns {Vector3} 次の位置
   */
  const calculateNextPosition = (position: Vector3, dt: number): Vector3 => {
    const dx = p * (position.y - position.x) * dt;
    const dy = (position.x * (r - position.z) - position.y) * dt;
    const dz = (position.x * position.y - b * position.z) * dt;
    return new Vector3(position.x + dx, position.y + dy, position.z + dz);
  };

  /**
   * ローレンツアトラクターの軌跡を生成する関数
   * @param {number} count - 生成する点の数
   * @param {number} dt - 時間の刻み幅
   * @returns {Vector3[]} 軌跡の配列
   */
  let positions: Vector3[] = [];
  const generateLorenzAttractor = (count: number, dt: number): Vector3[] => {
    positions = [new Vector3(0.1, 0, 0)];
    for (let i = 1; i < count; i++) {
      const nextPosition = calculateNextPosition(positions[i - 1], dt);
      positions.push(nextPosition);
    }
    return positions;
  };

  /**
   * positionsのzの値の分布から特定の数値がどの割合に位置するかを返す関数
   * @param {number} value - 確認する値
   * @returns {number} 割合 (0から1の間)
   */
  const getZValueRatio = (value: number, axis: 'x' | 'y' | 'z'): number => {
    const zValues = positions.map((pos) => pos[`${axis}`]);
    const minValue = Math.min(...zValues);
    const maxValue = Math.max(...zValues);
    return (value - minValue) / (maxValue - minValue);
  };

  /**
   * HSBをRGBに変換する関数
   * @param {number} h - 色相 (0から1の間)
   * @param {number} s - 彩度 (0から1の間)
   * @param {number} b - 明度 (0から1の間)
   * @returns {number[]} RGBの配列 (各値は0から1の間)
   */
  const hsbToRgb = (h: number, s: number, b: number): number[] => {
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = b * (1 - s);
    const q = b * (1 - f * s);
    const t = b * (1 - (1 - f) * s);
    const mod = i % 6;

    const rVal = [b, q, p, p, t, b][mod];
    const gVal = [t, b, b, q, p, p][mod];
    const bVal = [p, p, t, b, b, q][mod];

    return [rVal, gVal, bVal];
  };

  /**
   * ランダムな色配列を返す関数
   * @param {number} count - 生成する色の数
   * @returns {number[]} 色の配列
   */
  const getColors = (count: number): number[] => {
    const colors: number[] = [];
    for (let i = 0; i < count; i++) {
      const thisColor = hsbToRgb(
        0.6 *
          getZValueRatio(positions[i].x, 'x') *
          getZValueRatio(positions[i].y, 'y') *
          getZValueRatio(positions[i].z, 'z'),
        1,
        0.5,
      );
      colors.push(thisColor[0], thisColor[1], thisColor[2]);
    }
    return colors;
  };

  const lorenzPositions = generateLorenzAttractor(count, dt);
  const lorenzBufferGeometry = new BufferGeometry().setFromPoints(lorenzPositions);
  lorenzBufferGeometry.setAttribute('color', new Float32BufferAttribute(getColors(count), 3));
  const alphaTexture = useTexture('/assets/image/AlphaMap.png'); // 丸くするため
</script>

<T.PerspectiveCamera makeDefault position={[300, 0, 0]} fov={15}>
  <OrbitControls autoRotate enableDamping />
</T.PerspectiveCamera>

<Align>
  <T.Points rotation.z="180">
    <T is={lorenzBufferGeometry} />
    {#await alphaTexture then value}
      <T.PointsMaterial size={2} vertexColors alphaMap={value} alphaTest={0.5} />
    {/await}
  </T.Points>
</Align>
