import { types } from "../types/types"

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                rol: action.payload.rol,
            }
        case types.Logout:
            return {}

        default:
            return state;
    }
}