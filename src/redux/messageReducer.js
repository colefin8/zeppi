const initialState = {
    loot: [],
    drops: []
}

const GET_LOOT = 'GET_LOOT'
const GET_DROPS = 'GET_DROPS'

export function getLoot(payload){
    console.log(payload)
    return {
        type: GET_LOOT,
        payload: payload
    }
}

export function getDrops(payload){
    console.log(payload)
    return {
        type: GET_DROPS,
        payload: payload
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case GET_LOOT:
            return {...state, loot: payload}
        case GET_DROPS:
            return {...state, drops: payload}
        default:
            return state
    }
}