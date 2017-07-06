const profiles = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PROFILE':
        case 'UPDATE_PROFILE':
            return Object.assign({}, state, {
                ...state,
                [action.profile._tx]: action.profile
            })
        default:
            return state
    }
}

export default profiles
