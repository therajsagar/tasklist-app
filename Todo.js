import React from 'react'
import Proptypes from 'prop-types';


export const Todo = ({onClick, completed, text}) => (
    <li 
        onClick={onClick}
        >
            {text}
        </li>
)

Todo.prototypes = {
    onClick : Proptypes.func.isRequired,
    completed: Proptypes.bool.isRequired,
    text: Proptypes.string.isRequired
}