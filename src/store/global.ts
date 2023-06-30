/* eslint-disable @typescript-eslint/no-explicit-any */
/** 系统公共数据 */
import { LocalKeyEnum } from '@/core/enums/localKeyEnum';
import localStorageEffect from '@/core/storageEffect';
import { atom } from 'recoil';

/** global - 用户登录的 Token */
export const globalTokenAtom = atom({
  key: 'globalTokenState',
  default: '',
  effects_UNSTABLE: [localStorageEffect(LocalKeyEnum.ACCESSTOKEN)],
});
