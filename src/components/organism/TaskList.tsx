/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import TaskItem from './TaskItem'
import { Task } from '../../types/todo'
import { todoSlice, TodoState } from '../../ducks/todo'

const TaskList: FC<{
  tasks: Task[]
  onCheckTask: (id: Task['id']) => void
}> = ({ tasks, onCheckTask }) => {
  const listStyle = css`
    list-style: none;

    li:not(:first-of-type) {
      margin-top: 20px;
    }
  `

  return (
    <ul css={listStyle}>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem
            task={task}
            onCheckTask={() => {
              onCheckTask(task.id)
            }}
          />
        </li>
      ))}
    </ul>
  )
}

const TaskListContainer: FC = () => {
  const tasks = useSelector<TodoState, Task[]>((state) => state.tasks)
  const dispatch = useDispatch()
  const { taskStatusToggled } = todoSlice.actions

  const checkTask = (id: Task['id']) => {
    dispatch(taskStatusToggled({ id }))
  }

  return TaskList({ tasks, onCheckTask: checkTask })
}

export default TaskListContainer
