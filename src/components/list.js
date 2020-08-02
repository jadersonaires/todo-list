import React from 'react'
import Items from './items'

const List = ({tasksList, onToggleTaskDone, onRemoveTask }) => {
    
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-sm">
                    <hr className="my-4" />
                    <ul className="list-group list-group-flush">
                        {tasksList.map(({id, tasks, type, completed, date }) => (
                            <Items 
                                key={id}
                                id={id}
                                task={tasks}
                                type={type}
                                completed={completed}
                                date={date}
                                onToggleTaskDone={onToggleTaskDone}
                                onRemoveTask={onRemoveTask}
                            />                            
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default List