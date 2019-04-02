import {combineReducers} from 'redux';
import {ADD, TOGGLE, SET_FILTER, Filters} from './actions';

const {ALL} = Filters;

function visibilityFilter(state= ALL, action){
    if(action.type===SET_FILTER){
        return action.filter;
    }
    return state;
}

function todos(state={}, action){
    switch(action.type){
        case ADD:
        return [...state, {text: action.text, completed: false}]

        case TOGGLE:
         return state.map((v, k) => {
             if(k===action.index){
                 return Object.assign({}, v, {completed: !v.completed})}
            return v})

        default:
                return state
    }
}
    
const todoApp = combineReducers({
    visibilityFilter,
    todos
  })
  
  export default todoApp