import { API } from '../../API';
import { SET_RESPONSE } from '../../constants';

const setResponse = (payload) => ({ type: SET_RESPONSE, payload });

export const sendPhone = (phoneData) => async (dispatch) => {
    try {
        const response = await API.sendPhoneData(phoneData);
        dispatch(setResponse(response));
    } catch (error) {
        console.error('Send phone data failed!', error);
    }
}