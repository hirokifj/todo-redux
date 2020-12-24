import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { Task } from '../types/todo'
import { findTaskIndex } from '../util/task'

export type TodoState = {
  tasks: Task[]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: { tasks: [] } as TodoState,
  reducers: {
    taskAdded: (state, action: PayloadAction<{ title: Task['title'] }>) => {
      state.tasks.push({
        id: uuidv4(),
        title: action.payload.title,
        isDone: false,
      })
    },
    taskDeleted: (state, action: PayloadAction<{ id: Task['id'] }>) => {
      const targetIndex = findTaskIndex(action.payload.id, state.tasks)
      state.tasks.splice(targetIndex, 1)
    },
    taskStatusToggled: (state, action: PayloadAction<{ id: Task['id'] }>) => {
      const targetIndex = findTaskIndex(action.payload.id, state.tasks)
      state.tasks[targetIndex].isDone = !state.tasks[targetIndex].isDone
    },
  },
})
