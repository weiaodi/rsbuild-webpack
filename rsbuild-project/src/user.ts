// user.ts
export class User {
  id: number;
  name: string;
  
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  
  getDisplayName(): string {
    return `User: ${this.name}`;
  }
}
