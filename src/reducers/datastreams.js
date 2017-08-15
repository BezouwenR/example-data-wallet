const datastreams = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_DATASTREAM':
        case 'UPDATE_DATASTREAM':
            return Object.assign({}, state, {
                ...state,
                [action.datastream._assetId]: action.datastream
            })
        default:
            return state
    }
}

export default datastreams
