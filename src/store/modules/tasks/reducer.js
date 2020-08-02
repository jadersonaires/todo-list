const initialState = {
    list: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
}

export default function tasksList(state = initialState, action) {
    switch (action.type) {
        case 'CREATE':
            return { ...state, list: [...state.list, action.payload] }
        case 'CONCLUDE':
            return { ...state, list: [...state.list, action.payload] }
        case 'REMOVE':
            return { ...state, list: [...state.list, action.payload] }
        default:
            return state
    }
}