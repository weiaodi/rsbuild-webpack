import 'reflect-metadata';
import type { KoKoAdapter } from './adapter';
// @ts-ignore
import './index.less';

const METADATA_KEY = 'custom:metadataTest';

function setMetadata(value: string) {
  return function (target: any) {
    Reflect.defineMetadata(METADATA_KEY, value, target);
  };
}

@setMetadata('这是我的元数据信息')
class MyClass {
  constructor(adapter: KoKoAdapter, demo1: string) {
    console.log('🚀 ~测试', adapter, demo1);
  }

  static greet() {
    return 'Hello World';
  }
}

const metadata = Reflect.getMetadata(METADATA_KEY, MyClass);

console.log('测试', MyClass.greet(), metadata);
