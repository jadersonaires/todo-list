import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import randomString from 'randomstring'


import moment from 'moment'
import 'moment/locale/pt-br'

import List from './list'

const Form = () => {

    //Pega lista de tarefas do redux
    let getTasks = useSelector(state => state.tasks.list)

    const dispatch = useDispatch()
    const [tasks, setTasks] = useState(getTasks)
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    function handleAddTasks(e) {
        e.preventDefault()

        if (value.trim().length > 3) {
            setError('');

            const createTasks = {
                id: randomString.generate(8),
                tasks: value,
                type: 'Conclude',
                completed: false,
                date: moment().format('LL')
            }

            let addItemArr = [...tasks, createTasks]

            dispatch({
                type: 'CREATE',
                payload: addItemArr
            })

            setTasks([...addItemArr])
            setValue('')
        } else {
            setError('Please input something...');
        }
    }

    const toggleTasksDoneHandler = useCallback(id => {
        let search = tasks.find(item => item.id === id)
        search.completed = true;
        search.type = 'Done';

        dispatch({
            type: 'CONCLUDE',
            payload: [...tasks]
        })
        setTasks([...tasks])
    }, [tasks])

    const removeTasksHandler = useCallback(id => {
        var filterRemove = tasks.filter(item => item.id !== id)

        dispatch({
            type: 'REMOVE',
            payload: filterRemove
        })

        setTasks(filterRemove)
    }, [tasks])

    return (
        <>
            <div className="container-sm">
                <div className="row justify-content-end">
                    <div className="col-sm-7">
                        <form onSubmit={handleAddTasks} className="form-inline justify-content-end" style={{'align-items': 'self-start'}}>
                            <div className="form-group mx-md-3 w-75">
                                <label htmlFor="inputTasks" className="sr-only">Tasks</label>
                                <input
                                    type="text"
                                    name="value"
                                    className="form-control w-100"
                                    id="inputTasks"
                                    placeholder="Tasks..."
                                    value={value}
                                    onChange={e => setValue(e.target.value)} />
                                    {error.length > 0 && <small className="text-danger">{error}</small>}
                            </div>
                            <button type="submit" className="btn btn-primary">Adicionar</button>
                        </form>
                    </div>
                </div>
            </div>
            <List tasksList={tasks}
                onToggleTaskDone={toggleTasksDoneHandler}
                onRemoveTask={removeTasksHandler} />
        </>
    )
}

export default Form