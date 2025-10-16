// 1. 引入反射库（元数据操作依赖）
import 'reflect-metadata';

interface UserType {
  id: string;
  name: string;
}

const USER_METADATA_KEY = 'user:config';

function setUserConfig(config: { title: string }) {
  return function (target: any) {
    Reflect.defineMetadata(USER_METADATA_KEY, config, target);
  };
}

@setUserConfig({
  title: '用户管理模型',
})
class UserManager {
  getUserName(user: UserType): string {
    return user.name;
  }
}

const userMetadata = Reflect.getMetadata(USER_METADATA_KEY, UserManager);
console.log('读取到的元数据：', userMetadata);

const mockUser: UserType = { id: '123', name: '张三' };
const manager = new UserManager();
console.log('获取用户名：', manager.getUserName(mockUser));
