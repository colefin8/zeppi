const initialState = {
    friends: []
}

const GET_FRIENDS = 'GET_FRIENDS'

export function getFriends(payload){
    console.log(payload)
    return {
        type: GET_FRIENDS,
        payload: payload
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case GET_FRIENDS:
            return {...state, friends: payload}
        default:
            return state
    }
}