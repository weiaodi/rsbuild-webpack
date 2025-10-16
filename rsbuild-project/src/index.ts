import 'reflect-metadata';
import { KoKoAdapter } from './adapter';

const METADATA_KEY = 'custom:metadata';

function setMetadata(value: string) {
  return function (target: any) {
    Reflect.defineMetadata(METADATA_KEY, value, target);
  };
}

@setMetadata('这是我的元数据信息')
class MyClass {
  constructor(adapter: KoKoAdapter) {
    console.log('🚀 ~测试', adapter);
  }

  greet() {
    return 'Hello World';
  }
}

const metadata = Reflect.getMetadata(METADATA_KEY, MyClass);

console.log('读取到的元数据:', metadata);
