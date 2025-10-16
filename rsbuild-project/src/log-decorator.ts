// log-decorator.ts
// 定义装饰器类
export class LogDecorator {
  // 类装饰器：记录类的创建
  static classDecorator(target: any) {
    // 保存原始构造函数
    const original = target;

    // 创建新的构造函数
    const newConstructor: any = function (...args: any[]) {
      console.log(`[Log] 实例化类: ${original.name}`);
      return new original(...args);
    };

    // 复制原型链
    newConstructor.prototype = original.prototype;

    // 添加日志方法
    newConstructor.prototype.log = function (message: string) {
      console.log(`[${original.name}] ${message}`);
    };

    return newConstructor;
  }
}
