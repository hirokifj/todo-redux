import { Task } from '../types/todo'

export const findTaskIndex = (targetId: Task['id'], tasks: Task[]): number => {
  return tasks.findIndex((task) => task.id === targetId)
}
