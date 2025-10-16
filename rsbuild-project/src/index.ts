// app.ts
import { UserService } from './user-service';
import { User } from './user';

// 创建用户实例
const user1 = new User(1, '张三');
const user2 = new User(2, '李四');

// 创建服务实例
const userService = new UserService([user1]);

// 使用服务方法
userService.addUser(user2);
const foundUser = userService.getUserById(1);
console.log('找到的用户:', foundUser?.getDisplayName());
