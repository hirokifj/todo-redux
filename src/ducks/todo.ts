import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { Task } from '../types/todo'

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
      const targetIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      )
      state.tasks.splice(targetIndex, 1)
    },
    taskStatusToggled: (state, action: PayloadAction<{ id: Task['id'] }>) => {
      const targetIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      )
      state.tasks[targetIndex].isDone = !state.tasks[targetIndex].isDone
    },
  },
})
