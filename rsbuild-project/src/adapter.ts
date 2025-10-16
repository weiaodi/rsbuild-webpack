// ./adapter.ts
// export class KoKoAdapter {
//   eventEmitter = {
//     emit: (eventName: string, ...args: any[]) => {},
//   };

//   getMilestoneContent(id: string): any[] {
//     return []; // 实际实现
//   }

//   updateMilestoneContent(id: string, content: any[]): void {
//     // 实际实现
//   }
// }
export interface KoKoAdapter {
  eventEmitter: {
    emit: (eventName: string, ...args: any[]) => void;
  };
  getMilestoneContent: (id: string) => any[];
  // 用于触发变更的方法
  updateMilestoneContent: (id: string, content: any[]) => void;
}
