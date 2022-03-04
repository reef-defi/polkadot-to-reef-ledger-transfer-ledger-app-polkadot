import { DeviceModel } from '@zondax/zemu'

const Resolve = require('path').resolve

export const APP_SEED = 'equip will roof matter pink blind book anxiety banner elbow sun young'

const APP_PATH_S = Resolve('../app/output/app_s.elf')
const APP_PATH_X = Resolve('../app/output/app_x.elf')

export const models: DeviceModel[] = [
  { name: 'nanos', prefix: 'S', path: APP_PATH_S },
  { name: 'nanox', prefix: 'X', path: APP_PATH_X },
]

export const txBasic =
  '05000025c62f50ecc694ae45526cb2562fe05d18cfe56eca5b13ccb737f28bccaa66ad8ed73e0dd5038d2433158139ae28a3dfaac5fe1560a5e9e05cc82300000a00000091b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c391b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3'

export const txNomination =
  '07050800b1520bf102ce885cc279519198d3b68934006c7ab090e9c86812a8cf9235f4bb0061fb8580780475df8ec28cd59b4cef400815798af329536fc94ff14992842620d5030433158139ae28a3dfaac5fe1560a5e9e05cc82300000a00000091b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c391b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3'

export const setKeys =
  '09003f4b5b826ada8724543a997632936c2f79dc7d834f7dd273d95f9a871aa93ffc42a812884b3320950f03ae886cef208ac693a2feadd1494ac84e2c55f26e789b2aa21b5bdbd2073dca9fc884451e7afee8914835a72769230e135fecc953919cf670d72322aa8ddbcf322c7a540988c7e9adc6493d74b15fc893a1dc4fa24ec3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101e31f0b3029ced153f95a56f069ee3aa0041fc443bd2c45b137ab7d98de462ba77f7b6a6b3be5f2a3c8441a3bb55c162b89c6e64b63894785f74a81e072dc76c9d5030000c82300000a00000091b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c391b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3'