// 适配器接口定义
export interface KoKoAdapter {
  eventEmitter: {
    emit: (eventName: string, ...args: any[]) => void;
  };
  getMilestoneContent: (id: string) => any[];
  // 用于触发变更的方法
  updateMilestoneContent: (id: string, content: any[]) => void;
}
