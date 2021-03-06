import {
    REDUCE_STAMINA,
    INCREASE_STAMINA,
    GET_CURRENT_ROOM,
    INIT_PLAYER_START,
    INIT_PLAYER_SUCCESS,
    INIT_PLAYER_FAILURE,
    PLAYER_MOVE_START,
    PLAYER_MOVE_SUCCESS,
    PLAYER_MOVE_FAILURE,
} from './playerTypes'

import {PLAYER_X, PLAYER_Y} from '../../components/map/utils'

const initialState = {
    position: [PLAYER_X, PLAYER_Y],
    stamina: 100,
    title: "",
    description: "",
    isLoading: false,
    error: "",
    room_id: 0,
    player_id: 0,
}

const playerReducer = (state = initialState, {payload, type}) => {
    switch (type) {
        //  MOVE ACTION
        case PLAYER_MOVE_START:
            return {
                ...state,
                isLoading: true,
            }

        case PLAYER_MOVE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                position: payload.position,
                title: payload.title,
                description: payload.description,
                players: payload.players,
                stamina: payload.stamina,
                room_id: payload.room_id,
            }

        case PLAYER_MOVE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
            }

        case GET_CURRENT_ROOM:
            return {
                ...state,
                title: payload.title,
                description: payload.description
            }

        //    INIT PLAYER
        case INIT_PLAYER_START:
            return {
                ...state,
                isLoading: true,
            }

        case INIT_PLAYER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                title: payload.title,
                description: payload.description,
                name: payload.name,
                position: [payload.x, payload.y],
                player_id: payload.player_id,
                room_id: payload.room_id,
            }

        case INIT_PLAYER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            }


        default:
            return state

    }
}

export default playerReducer