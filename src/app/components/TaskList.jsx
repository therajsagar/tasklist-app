import React from 'react';
import {connect} from 'react-redux';
import {requestTaskCreation} from '../store/mutation';
import {Link} from 'react-router-dom';

export const TaskList = ({tasks, name, id, createNewTask}) => (
    <div>
        <h4>{name}</h4>
        <div>{tasks.map(i=> <Link key={i.id} to={`/task/${i.id}`}><div>{i.name}</div></Link>)}</div>
        <button onClick={() => createNewTask(id)}>Add Task</button>
    </div>
)

const mapStateToProps = (state, ownProps) =>{
    let groupID = ownProps.id; 
    return {
        name: ownProps.name, 
        id: groupID,
        tasks: state.tasks.filter(i=> i.group === groupID)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNewTask(id){
            console.log("Creating new task", id);
            dispatch(requestTaskCreation(id));
        } 
    }
}

export const ConnectedTaskList =  connect(mapStateToProps, mapDispatchToProps)(TaskList);