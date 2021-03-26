import { Reducer } from 'redux';
import { SET_META_DATA, CSVMetaDataAction, CSVMetaDataState } from '.';

export const initialState = {
    csvMetaData: {},
};

const CSVManagerReducer: Reducer<CSVMetaDataState, CSVMetaDataAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_META_DATA:
            return {
                ...state,
                csvMetaData: action.payload.data,
            };
        default:
            return state;
    }
};

export default CSVManagerReducer;
