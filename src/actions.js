export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE' ;
export const SET_FILTER = 'SET_FILTER';
export const Filters = {ALL : 'ALL', COMPLETED: 'COMPLETED', ACTIVE: 'ACTIVE'};
let Id = 0;


export const addTodo = text =>
    ({type: ADD, index: Id++, text})


export const toggleTodo = index =>
    ({ type: TOGGLE, index })
  
  
  export const setFilter = filter =>
    ({ type: SET_FILTER, filter })
  