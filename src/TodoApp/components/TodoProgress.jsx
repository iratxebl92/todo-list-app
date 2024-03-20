import {FinishedProgressIcon, ProgressEmptyIcon, InProgressIcon } from '../../core/Icons'

export const TodoProgress = ({state}) => {
  return (
    <div className="progress column">
    {
      state === "To Do" ? (
        <ProgressEmptyIcon />
      ) : state === "In Progress" ? (
        <InProgressIcon />
      ) : (
        <FinishedProgressIcon />
      )
    }
  </div>
  )
}
