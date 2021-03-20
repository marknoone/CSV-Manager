import { Reducer } from 'redux';
import { SET_META_DATA, CSVManagerAction, CSVManagerState } from './';

export const initialState = {
    csvFiles: [
        { id: 0, title: "Task 1", createdAt: 1616265832, fileSizeKB: 1000, sourceURL: "http://www.google.com/" },
        { id: 1, title: "Task 2", createdAt: 1616265832, fileSizeKB: 1000, sourceURL: "http://www.google.com/" },
        { id: 2, title: "Task 3", createdAt: 1616265832, fileSizeKB: 1000, sourceURL: "http://www.google.com/" }
    ]
}
  
const ModalReducer: Reducer<CSVManagerState, CSVManagerAction> = (state = initialState, action) => {
    switch (action.type) {
      case SET_META_DATA:
        return {
            csvFiles: action.payload.data
        }
      default:
        return state
    }
}

export default ModalReducer;