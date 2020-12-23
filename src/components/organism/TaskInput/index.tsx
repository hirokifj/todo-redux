/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react'
import { css, jsx } from '@emotion/react'
import { useDispatch } from 'react-redux'
import { todoSlice } from '../../../ducks/todo'

import Input from '../../atom/Input'
import Button from '../../atom/Button'

const TaskInput: FC<{
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
  onSubmit: () => void
}> = ({ value, onChange, onKeyPress, onSubmit }) => {
  const inputStyle = css`
    flex-grow: 1;
    margin-bottom: 20px;
  `

  const buttonStyle = css`
    text-align: right;
  `

  return (
    <div>
      <div css={inputStyle}>
        <Input
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder="Task Title"
        />
      </div>
      <div css={buttonStyle}>
        <Button onClick={onSubmit}>Add Task</Button>
      </div>
    </div>
  )
}

const TaskInputContainer: FC = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  const clearInput = () => {
    setValue('')
  }

  const dispatch = useDispatch()
  const { taskAdded } = todoSlice.actions

  const submitTask = () => {
    dispatch(taskAdded({ title: value }))
    clearInput()
  }

  const handleSubmit = () => {
    submitTask()
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitTask()
    }
  }

  return TaskInput({
    value,
    onChange: handleChange,
    onKeyPress: handleKeyPress,
    onSubmit: handleSubmit,
  })
}

export default TaskInputContainer
