import { FETCH_USER } from "../actions/type";

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || null;
        default:
            return state;
    }
};
