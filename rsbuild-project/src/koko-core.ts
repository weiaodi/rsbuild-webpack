// 简化版 @koko/core 实现
import 'reflect-metadata';

// 元数据键定义
const WATCHED_METADATA_KEY = 'koko:watched';
const MODEL_METADATA_KEY = 'koko:model';

// 响应式基类
export class Reactive {
  // 存储属性的观察者映射
  private watchers: Map<string, Array<() => void>> = new Map();

  constructor() {
    // 初始化时收集并设置观察者
    this.initializeWatchers();
  }

  private initializeWatchers() {
    const watchedMethods =
      Reflect.getMetadata(WATCHED_METADATA_KEY, this) || [];

    watchedMethods.forEach(({ propertyKey, watchTarget }: any) => {
      if (!this.watchers.has(watchTarget)) {
        this.watchers.set(watchTarget, []);
      }
      // 将方法绑定到实例并添加到观察者列表
      this.watchers.get(watchTarget)!.push(this[propertyKey].bind(this));
    });
  }

  // 触发属性变更的方法，供适配器调用
  triggerChange(property: string) {
    const methods = this.watchers.get(property);
    if (methods) {
      methods.forEach((method) => method());
    }
  }
}

// 模型装饰器
export function kokoModel(target: any) {
  Reflect.defineMetadata(MODEL_METADATA_KEY, true, target);
  return target;
}

// 观察者装饰器
export function watched(property: string) {
  return function (target: any, propertyKey: string) {
    // 收集被观察的方法信息
    const existing = Reflect.getMetadata(WATCHED_METADATA_KEY, target) || [];
    Reflect.defineMetadata(
      WATCHED_METADATA_KEY,
      [...existing, { propertyKey, watchTarget: property }],
      target,
    );
  };
}
