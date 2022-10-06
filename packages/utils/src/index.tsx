export const pxToInt = (pxVal: string): number => parseInt(pxVal?.substring(0, pxVal.length - 2));

export { default as Button } from './components/Button';
export { default as Svg } from './components/Svg';

export type { DeepOmit } from './types';