import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { uuid } from 'uuidv4'
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
        id: uuid(),
        title: action.payload.title,
        isDone: false,
      })
    },
    taskStatusToggled: (state, action: PayloadAction<{ id: Task['id'] }>) => {
      const targetIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      )
      state.tasks[targetIndex].isDone = !state.tasks[targetIndex].isDone
    },
  },
})
