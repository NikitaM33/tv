import { SET_RESPONSE } from '../../constants';

const initialState = {
    phoneData: false
}

const form = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESPONSE:
            return {
                ...state,
                phoneData: action.payload
            }
        default:
            return state;
    }
}

export default form;