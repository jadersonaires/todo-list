import React, { useCallback } from 'react'

const Items = ({ task, id, type, completed, date, onToggleTaskDone, onRemoveTask }) => {

    const toggleTaskDoneHandler = useCallback(() => onToggleTaskDone(id), [id, onToggleTaskDone])
    const removeTodoHandler = useCallback(() => onRemoveTask(id), [id, onRemoveTask])

    return (
        <li key={id}
            className="list-group-item d-flex justify-content-between align-items-center">

            <div class="d-flex align-items-start flex-column">
                <h6 class={`mb-1 ${completed === true ? `text-decorate-through` : ``} `}>{task}</h6>
                <small>{date}</small>
            </div>

            <span>
                <span type="button"
                    className="badge badge-danger badge-pill ml-2 mr-2"
                    onClick={removeTodoHandler}>
                    Remove
                </span>
                <span type="button"
                    className={`badge ${completed === true ? `badge-success` : `badge-secondary`} badge-pill ml-2 mr-2`}
                    onClick={toggleTaskDoneHandler}>
                    {type}
                </span>
            </span>
        </li>
    )
}

export default Items