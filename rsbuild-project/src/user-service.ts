// user-service.ts
// 仅导入类型，使用import type避免运行时依赖
import type { User } from './user';
import { LogDecorator } from './log-decorator';

// 应用类装饰器
@LogDecorator.classDecorator
export class UserService {
  private users: User[] = [];

  constructor(initialUsers?: User[]) {
    if (initialUsers) {
      this.users = initialUsers;
    }
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
