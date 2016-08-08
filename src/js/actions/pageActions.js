import { SET_YEAR } from '../constants/pageConstants';

export function setYear(year){
    return {
        type: SET_YEAR,
        payload: year
    }
}