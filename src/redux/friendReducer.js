const initialState = {
    friends: [],
    requests: []
}

const GET_FRIENDS = 'GET_FRIENDS'
const GET_REQUESTS = 'GET_REQUESTS'

export function getFriends(payload){
    console.log(payload)
    return {
        type: GET_FRIENDS,
        payload: payload
    }
}

export function getRequests(payload){
    console.log(payload)
    return {
        type: GET_REQUESTS,
        payload: payload
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case GET_FRIENDS:
            return {...state, friends: payload}
        case GET_REQUESTS:
            return {...state, requests: payload}
        default:
            return state
    }
}