import { combineReducers } from 'redux'

import listTasks from './tasks/reducer'

export default combineReducers({
    tasks: listTasks
})