export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE' ;
export const SET_FILTER = 'SET_FILTER';
export const Filters = {ALL : 'ALL', COMPLETED: 'COMPLETED', ACTIVE: 'ACTIVE'};

export function addTodo(text){
    return {type: ADD, text}
}

export function toggleTodo(index) {
    return { type: TOGGLE, index }
  }
  
  export function setFilter(filter) {
    return { type: SET_FILTER, filter }
  }